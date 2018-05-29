'use strict';

const secret = process.env.FRAMBUESA_SECRET;
if (!secret)
  throw new Error('must specify a GroupMe bot secret');

let identified = new Set();
let messages = {};

module.exports = {

  identify: (json) => {
    console.log('identify():', json);

    if (!json.secret)
      return { code:401, body:'Missing required key \'secret\'' };

    if (json.secret !== secret)
      return { code:403, body:'Incorrect secret' };

    if (isNaN(parseInt(json.group_id)) || json.group_id.length !== 8)
      return { code:400, body:'Invalid group ID' };

    identified.add(json.group_id);
    console.log('identify(): identified:', identified);
    return { code:200, body:'OK' };
  },

  callback: (json) => {
    /*
     * responses look like this:
     *  {
     *    "attachments": [],
     *    "avatar_url": "https://i.groupme.com/123456789",
     *    "created_at": 1302623328,
     *    "group_id": "1234567890",
     *    "id": "1234567890",
     *    "name": "John",
     *    "sender_id": "12345",
     *    "sender_type": "user",
     *    "source_guid": "GUID",
     *    "system": false,
     *    "text": "Hello world ☃☃",
     *    "user_id": "1234567890"
     *  }
     */

    console.log('callback():', json);

    if (isNaN(parseInt(json.group_id)) || json.group_id.length !== 8)
      return { code:400, body:'Invalid group ID' };

    if (!identified.has(json.group_id))
      return { code:403, body:'Unidentified group ID' };

    if (!json.text.startsWith('/'))
      return { code:204, body:null }; // ignore

    messages[json.id] = {
      id: json.id,
      date: json.created_at,
      name: json.name,
      sender: json.sender_id,
      text: json.text
    };
    return { code:201, body:'OK' };
  },

  queue: () => {
    return { code:200, body:Object.values(messages) };
  },

  process: (json) => {
    console.log('process():', json);

    if (!json.secret)
      return { code:401, body:'Missing required key \'secret\'' };

    if (json.secret !== secret)
      return { code:403, body:'Incorrect secret' };

    if (!messages[json.id])
      return { code:400, body:'Invalid resource ID' };

    delete messages[json.id];
    return { code:201, body:(json.text || 'OK') };
  }

};
