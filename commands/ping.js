module.exports = {
    name: "ping",
    description: "Muestra la latencia del bot",
    options: [],
    async execute(interaction) {
        const sentMessage = await interaction.reply({
            content: "Calculando latencia...",
            fetchReply: true, 
        });

        const latency = sentMessage.createdTimestamp - interaction.createdTimestamp;

        await interaction.editReply(`🏓 Pong! Latencia: ${latency}ms`);
    },
};