const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('catpop')
        .setDescription('Sends catpop'),
    async execute(interaction) {
        // interaction.user is the object representing the User who ran the command
        // interaction.member is the GuildMember object, which represents the user in the specific guild

        await interaction.reply(
            {
                "embeds": [
                  {
                    "id": 460565032,
                    "image": {
                      "url": "https://cdn.discordapp.com/attachments/1094037396485570641/1114672858568863774/ezgif.com-resize.gif"
                    },
                    "color": 16751258,
                    "author": {
                      "name": "cat pop"
                    }
                  }
                ]
            }
        )
    }
}