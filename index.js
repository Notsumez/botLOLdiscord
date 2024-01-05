import { Client, IntentsBitField } from "discord.js";
import * as dotenv from "dotenv";
dotenv.config();

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent
  ]
});

// Comando /lol
client.on("messageCreate", (message) => {
    if(message.author.bot) return;

    if(message.content.startsWith("/lol")){
        const mentionedUser = message.mentions.users.first();

        if(mentionedUser){
            const userId = mentionedUser.id;
            message.reply({
                content: `MAS PRA JOGAR LOL VOCÊ É BOM <@${userId}> `,
                files: ['image.png']
            });
        } else {
            message.reply("Você precisa mencionar um usuário após o comando /lol.");
        }
    }
});

// Verificação se o bot está online
client.on('ready', (e) => {
    console.log(`${e.user.tag} esta Online!`);
})

client.login(process.env.TOKEN)