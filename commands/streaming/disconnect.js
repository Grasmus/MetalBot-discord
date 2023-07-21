const { SlashCommandBuilder } = require('discord.js');
const { metalBot } = require('../../index');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('disconnect')
        .setDescription('Disconnect bot from voice channel'),
    async execute(interaction)
    {
        metalBot.stop();
        const message = metalBot.disconnect();

        await interaction.reply(message);
    },
};
