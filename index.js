const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// Example ping command
client.on("messageCreate", msg => {
  if (msg.content === "!ping") {
    msg.reply("Pong!");
  }
});

// LOGIN using environment variable
client.login(process.env.TOKEN);
