module.exports = {
    name: "info",
    description: "Proporciona información sobre el bot",
    options: [],
    async execute(interaction) {
        await interaction.reply("Soy un bot creado para ayudarte con comandos slash!");
    }
};