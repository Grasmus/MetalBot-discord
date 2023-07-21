const { SlashCommandBuilder } = require('discord.js');
const { metalBot } = require('../../index');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('queue')
        .setDescription('Add song to the queue')
        .addStringOption(option => 
            option.setName('link')
                .setDescription('A youtube link')
                .setRequired(true)),
    async execute(interaction)
    {
        interaction.deferReply();

        const link = interaction.options.getString('link');
        const message = await metalBot.queue(link);

        interaction.editReply(message);
    },
};
