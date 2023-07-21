const { SlashCommandBuilder } = require('discord.js');
const { metalBot } = require('../../index');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('Plays song from a given link')
        .addStringOption(option => 
            option.setName('link')
                .setDescription('A youtube link')
                .setRequired(true)),
    async execute(interaction)
    {
        interaction.deferReply();

        const link = interaction.options.getString('link');
        const message = await metalBot.play(link, interaction.member.voice, interaction.channel);

        interaction.editReply(message);
    },
};
