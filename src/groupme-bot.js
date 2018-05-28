'use strict';

const secret = process.env.GROUPME_SECRET;
if (!secret)
  throw new Error('must specify a GroupMe bot secret');

let identified = {};
let messages = [];

module.exports = {

  identify: (json) => {
    console.log('identify():', json);

    if (!json.secret)
      return { code:401, message:'Missing required key \'secret\'' };

    if (json.secret !== secret)
      return { code:403, message:'Incorrect secret' };

    const group = parseInt(json.group);
    const bot = json.bot;

    if (isNaN(group) || json.group.length !== 8 || bot.length !== 26)
      return { code:400, message:'Unable to parse bot/group IDs' };

    if (!identified[group])
      identified[group] = new Set();
    identified[group].add(bot);

    console.log('identify(): identified:', identified);

    return { code:200, message:'OK' };
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
    let data = { code:500, message:'callback() Not implemented' };
    return data;
  },

  queue: () => {
    return { code:200, messages:messages };
  },

  process: (json) => {
    console.log('process():', json);
    let data = { code:500, message:'process() Not implemented' };
    return data;
  }

};
