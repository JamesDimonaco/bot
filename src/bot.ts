import { Client } from "discord.js";

console.log("Bot is starting...");
require('dotenv').config();


const client = new Client({
  intents: [
    "GUILDS",
    "GUILD_MEMBERS",
    "GUILD_BANS",
    "GUILD_PRESENCES",
    "GUILD_VOICE_STATES",
    "GUILD_MESSAGES",
    "GUILD_MESSAGE_REACTIONS",
    "DIRECT_MESSAGES",
    "DIRECT_MESSAGE_REACTIONS",
  ],
  partials: ["REACTION", "MESSAGE", "CHANNEL"],
});

client.login(process.env.DISCORD_TOKEN);

client.on('ready', () => {
  console.log(`Logged in as ${client.user!.tag}!`);
});

client.on('message', msg => {
  console.log(msg);
  
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.addListener('message', (msg) => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

