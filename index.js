require('dotenv').config();
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const fs = require('fs');
const path = require('path');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

const BOT_TOKEN = process.env.BOT_TOKEN;

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(path.join(commandsPath, file));
    client.commands.set(command.name, command);
    console.log(`Comando cargado: ${command.name}`);
}


client.once('ready', () => {
    console.log(`Bot iniciado como ${client.user.tag}`);
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    console.log(`Comando recibido: ${interaction.commandName}`);

    const command = client.commands.get(interaction.commandName);
    if (!command) {
        console.error(`Comando no encontrado: ${interaction.commandName}`);
        return;
    }

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(`Error ejecutando el comando ${interaction.commandName}:`, error);
        await interaction.reply({
            content: "Hubo un error al ejecutar este comando.",
            ephemeral: true,
        });
    }
});

client.login(BOT_TOKEN);
