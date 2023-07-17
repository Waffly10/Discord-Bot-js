const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js')
//picstures
const Heads = new AttachmentBuilder('../discordbot/assets/pics/coinflip/heads.png');
const Tails = new AttachmentBuilder('../discordbot/assets/pics/coinflip/tails.png');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('coinflip')
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
                                "name": "Heads",
                                "url": "https://discord.com/api/oauth2/authorize?client_id=1114429673376579585&permissions=8&scope=bot%20applications.commands"
                            },
                            "color": 16754756,
                            "image": {
                                "url": "attachment://heads.png"
                            }
                            }
                        ]
                        , files: [Heads]
                    }
                ).then (function () { interaction.channel.send(`Tadaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa :D`) })

            }   else {
                //tails
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
                                "url": "attachment://tails.png"
                            }
                            }
                        ]
                        , files: [Tails]
                    }
                ).then (function () { interaction.channel.send(`Tadaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa :D`) })
            }
        
        }, 3000);
        

        //meow meow meow meow meow meow meow meow

    }
}