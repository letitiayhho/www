'use strict';

const group_id = process.env.GMBOT_GROUP_ID;
const bot_id = process.env.GMBOT_BOT_ID;

function listen(req, res) {

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

  console.log('received request:');
  console.log(req);

}

module.exports.listen = listen;
