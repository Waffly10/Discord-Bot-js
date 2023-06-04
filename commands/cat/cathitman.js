const { SlashCommandBuilder } = require('discord.js')
const { catList } = require('../../random-cat-library.json')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cathitman')
        .setDescription('Sends random cat gif to the target')
        .addMentionableOption(option =>
            option.setName('stinky')
                .setRequired(true)
                .setDescription('Shoots target with cat')
                ),

    async execute(interaction) {

        function getRandomInRange(min, max) {
            return Math.floor((Math.random() * (max - min) + min) + 0.5)
        }
        
        const num = getRandomInRange(0, catList.length-1)
        const chosenCat = catList[num]

        let target = interaction.options.getMentionable('stinky')

        let avatar = target.user.displayAvatarURL()

        await interaction.reply(
            {
                "content": "",
                "tts": false,
                "embeds": [
                  {
                    "id": 460565032,
                    "fields": [],
                    "image": {
                      "url": "https://cdn.discordapp.com/attachments/1114434297319915520/1114698318610698350/ezgif.com-crop_2.gif"
                    },
                    "color": 16711680,
                    "author": {
                      "name": "cat hitman"
                    },
                    "thumbnail": {
                      "url": avatar
                    },
                    "footer": {
                      "text": "boom"
                    }
                  }
                ],
                "components": [],
                "actions": {}
              }
        )

        //sends cat to target
        interaction.client.users.send(target.user.id, 
            {
                "embeds": [
                    {
                    "id": 460565032,
                    "image": {
                        "url": chosenCat
                    },
                    "color": 16751258,
                    "author": {
                        "name": "You've been hit"
                    }
                    }
                ]
            }
        );

        
        
    }
}