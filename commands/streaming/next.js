const { SlashCommandBuilder } = require('discord.js');
const { metalBot } = require('../../index');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('next')
        .setDescription('Play next song from queue'),
    async execute(interaction)
    {
        await interaction.deferReply();

        const message = await metalBot.next(interaction.member.voice);

        await interaction.editReply(message);
    },
};
