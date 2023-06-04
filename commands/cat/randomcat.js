const { SlashCommandBuilder } = require('discord.js')
const { catList } = require('../../random-cat-library.json')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('randomcat')
        .setDescription('Sends random cat gif'),
    async execute(interaction) {

        function getRandomInRange(min, max) {
            return Math.floor((Math.random() * (max - min) + min) + 0.5)
        }
        
        const num = getRandomInRange(0, catList.length-1)
        const chosenCat = catList[num]

        interaction.reply(
            {
                "embeds": [
                    {
                    "id": 460565032,
                    "image": {
                        "url": chosenCat
                    },
                    "color": 16751258,
                    "author": {
                        "name": "MEOW"
                    }
                    }
                ]
            }
        )
        
        /* test cat list
        for (let i = 0; i < catList.length; i++) {
            const chosenCat = catList[i]
            interaction.channel.send(
                {
                    "embeds": [
                      {
                        "id": 460565032,
                        "image": {
                          "url": chosenCat
                        },
                        "color": 16751258,
                        "author": {
                          "name": "MEOW"
                        }
                      }
                    ]
                }
            )
        }*/


    }
}