// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits, Collection} = require('discord.js');
const { token } = require('./config.json');
const fs = require('node:fs')
const path = require('node:path')

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Log in to Discord with your client's token
client.login(token);
////////////////////////////////

client.commands = new Collection()
const foldersPath = path.join(__dirname, 'commands')
const commandFolders = fs.readdirSync(foldersPath)

for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder)
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'))
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file)
        const command = require(filePath)
        if ('data' in command && 'execute' in command) {
            client.commands.set(command.data.name, command)
        } else {
            console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`)
        }
    }
}

client.once(Events.ClientReady, (c) => {
    console.log(`✅ Ready! Logged in as ${c.user.tag}`)
    
    //set status
    client.user.setStatus('dnd');
    /**
    client.user.setStatus('online');
    client.user.setStatus('idle');
    client.user.setStatus('dnd');
    client.user.setStatus('invisible');
    */
})

client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return

    const command = client.commands.get(interaction.commandName)

    if (!command) return

    try {
        await command.execute(interaction)
    } catch (error) {
        console.error(error)
        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: false })
        } else {
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: false })
        }
    }
})
console.log('772317775485861969 & 359896709624758273')
////////////////////////////////
