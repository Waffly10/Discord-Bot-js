const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js')
//funny cat gif
const cat = new AttachmentBuilder ('./assets/pics/randomNumGen/cat_number.gif')


module.exports = {
    data: new SlashCommandBuilder()
        .setName('randomnumber')
        .setDescription('Generates a random number between 0 and the input number.')
        .addNumberOption(option =>
            option.setName('inputmax')
                .setDescription('Max number to generate')
                ),
    async execute(interaction) {

        await interaction.reply(
            {
                "content": "",
                "tts": false,
                "embeds": [
                  {
                    "id": 460565032,
                    "fields": [],
                    "color": 8185755,
                    "author": {
                      "name": "random number"
                    },
                    "title": "Generating...",
                    "image": {
                      "url": "attachment://cat_number.gif"
                    }
                  }
                ], files: [cat]

            }

        )
        //generates random number
        function generateRandomNumber(min, max) {
            //rounds the number 
            //math.round() 0-1
            return Math.floor((Math.random() * (max - min) + min) + 0.5)
        }

        //uses the function generateRandomNumber
        const num = generateRandomNumber(0, interaction.options.getNumber('inputmax'))

        //prints the number in 
        console.log(num)


        setTimeout(function () {
            interaction.editReply(
                {
                    "content": "",
                    "tts": false,
                    "embeds": [
                      {
                        "id": 460565032,
                        "fields": [],
                        "color": 8185755,
                        "footer": {
                          "text": "your number is"
                        },
                        "image": {
                          "url": "attachment://cat_number.gif"
                        }
                      }
                    ], files: [cat]
    
                }
            )
        }, 2500);
        
        setTimeout(function () { 

            interaction.channel.send(
                {
                    "content": "# " + num 
                }
            ) 
        
        }, 3000);

    }



}