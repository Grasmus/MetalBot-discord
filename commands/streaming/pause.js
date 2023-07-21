const { SlashCommandBuilder } = require('discord.js');
const { metalBot } = require('../../index');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pause')
        .setDescription('Pauses current song'),
    async execute(interaction)
    {
        const message = metalBot.pause();

        await interaction.reply(message);
    },
};
