const { SlashCommandBuilder } = require('discord.js');
const { metalBot } = require('../../index');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stop')
        .setDescription('Stop song and empty the queue'),
    async execute(interaction)
    {
        const message = metalBot.stop();

        await interaction.reply(message);
    },
};
