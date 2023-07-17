const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js')
//pictures
const one = new AttachmentBuilder('../discordbot/assets/pics/die/one.png');
const two = new AttachmentBuilder('../discordbot/assets/pics/die/two.png');
const three = new AttachmentBuilder('../discordbot/assets/pics/die/three.png');
const four = new AttachmentBuilder('../discordbot/assets/pics/die/four.png');
const five = new AttachmentBuilder('../discordbot/assets/pics/die/five.png');
const six = new AttachmentBuilder('../discordbot/assets/pics/die/six.png');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dice')
        .setDescription('Rolls a 6 sided die'),
    async execute(interaction) {
        //randomgen from 1-6, if statements, embeded so pretty, and yummy
        let numDieUrl = 'https://cdn.discordapp.com/attachments/1114434297319915520/1116866505594900611/ezgif.com-resize.gif'
        let desc = 'Rolling...'
        
        //die rolling
        await interaction.reply(
            {
                "content": "",
                "tts": false,
                "embeds": [
                  {
                    "id": 460565032,
                    "fields": [],
                    "image": {
                      "url": numDieUrl
                    },
                    "color": 4035583,
                    "author": {
                      "name": desc
                    }
                  }
                ],
                "components": [],
                "actions": {}
            }
        )
        
        //array of die
        const diePic = [one, two, three, four, five, six];
        const img = ['one', 'two', 'three', 'four', 'five', 'six'];

        //funtion to choose random num from 1-6
        function getRandomInRange(min, max) {
            //rounds the number down or up
            return Math.floor((Math.random() * (max - min) + min) + 0.5)
        }
        
        //uses the function
        const num = getRandomInRange(0, diePic.length-1)
        //puts the number in the array so it can generate the randum dice
        const die = diePic[num]

        //change to siwhtc statement
        setTimeout(function () { 
            //edits
            desc = 'You rolled ' + (num + 1)

            interaction.editReply(
                {
                    "content": "",
                    "tts": false,
                    "embeds": [
                      {
                        "id": 460565032,
                        "fields": [],
                        "image": {
                          "url": "attachment://" + img[num] + ".png"
                        },
                        "color": 4035583,
                        "author": {
                          "name": desc
                        }
                      }
                    ], files: [die]
                }
            ) 
        
        
        }, 3000);

        //meow meow meow meow meow meow meow meow

    }
}