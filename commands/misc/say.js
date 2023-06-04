const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('say')
        .setDescription('Repeats after the user.')
        .addStringOption(option =>
            option.setName('givenstring')
                .setDescription('Returns the input string')
                ),
    async execute(interaction) {
        // interaction.user is the object representing the User who ran the command
        // interaction.member is the GuildMember object, which represents the user in the specific guild
        let inputString = interaction.options.getString('givenstring')
        await interaction.reply(`${inputString}`)
    }
}