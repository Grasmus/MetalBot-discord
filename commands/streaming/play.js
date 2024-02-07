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
        await interaction.deferReply();

        try {
            const link = interaction.options.getString('link');
            const message = await metalBot.play(link, interaction.member.voice, interaction.channel);
            await interaction.editReply(message);
        } catch(error) {
            console.log(error)
            await interaction.editReply('Internal error has been occured');
        }
    },
};
