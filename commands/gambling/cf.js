const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cf')
        .setDescription('Heads or tails :3'),
    async execute(interaction) {

        await interaction.reply(
            {
                "content": "",
                "tts": false,
                "embeds": [
                  {
                    "id": 485276430,
                    "fields": [],
                    "author": {
                      "name": "Coin Flip",
                      "url": "https://discord.com/api/oauth2/authorize?client_id=1114429673376579585&permissions=8&scope=bot%20applications.commands",
                      "icon_url": "https://cdn.discordapp.com/attachments/1114434297319915520/1114661417702924288/PngItem_1352730.png"
                    },
                    "title": "Flipping",
                    "image": {
                      "url": "https://media.discordapp.net/attachments/1114434297319915520/1114657614240956456/d74906d39a1964e7d07555e7601b06ad.gif?width=240&height=180"
                    },
                    "color": 16754756
                  }
                ],
                "components": [],
                "actions": {}
              }
        )

        interaction.channel.send(`**3... 2... 1...**`)
        
        setTimeout(function () {
            if (Math.random() > 0.5) { 
                //heads
                interaction.channel.send(
                    {
                        "embeds": [
                            {
                            "id": 460565032,
                            "author": {
                                "name": "Tails",
                                "url": "https://discord.com/api/oauth2/authorize?client_id=1114429673376579585&permissions=8&scope=bot%20applications.commands"
                            },
                            "color": 16754756,
                            "image": {
                                "url": "https://cdn.discordapp.com/attachments/1114434297319915520/1114665126960828526/image.png"
                            }
                            }
                        ]
                    }
                )
            }   else {
                //tails
                interaction.channel.send(
                    {
                        "embeds": [
                            {
                            "id": 460565032,
                            "author": {
                                "name": "Heads",
                                "url": "https://discord.com/api/oauth2/authorize?client_id=1114429673376579585&permissions=8&scope=bot%20applications.commands"
                            },
                            "color": 16754756,
                            "image": {
                                "url": "https://cdn.discordapp.com/attachments/1114434297319915520/1114665416200036432/image.png"
                            }
                            }
                        ]
                    }
                )
            }

            interaction.channel.send(`Tadaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa :D`)
            
        }, 3000);

        //meow meow meow meow meow meow meow meow

    }
}