import { Client } from "discord.js";

console.log("Bot is starting...");
require('dotenv').config();

const client = new Client({
  intents: [],
});

client.login(process.env.DISCORD_TOKEN);

client.on('ready', () => {
  console.log(`Logged in as ${client.user!.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});
