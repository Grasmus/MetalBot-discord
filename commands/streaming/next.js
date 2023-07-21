const { SlashCommandBuilder } = require('discord.js');
const { metalBot } = require('../../index');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('next')
        .setDescription('Play next song from queue'),
    async execute(interaction)
    {
        const message = metalBot.next(interaction.member.voice);

        interaction.reply(message);
    },
};
