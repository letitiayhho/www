'use strict';

const group_id = process.env.GMBOT_GROUP_ID;
const bot_id = process.env.GMBOT_BOT_ID;

module.exports.callback = (req) => {
  console.log('received request');
};

module.exports.queue = () => { 
  console.log('received queue');
};

module.exports.process = () => {
  console.log('received process request');
};

