'use strict';

const group_id = process.env.GMBOT_GROUP_ID;
const bot_id = process.env.GMBOT_BOT_ID;

module.exports.callback = (body) => {
  console.log('received request');
}
