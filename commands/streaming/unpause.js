const { SlashCommandBuilder } = require('discord.js');
const { metalBot } = require('../../index');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('unpause')
        .setDescription('Unpauses current song'),
    async execute(interaction)
    {
        const message = metalBot.unpause();

        await interaction.reply(message);
    },
};
