const Discord = require('discord.js')

const help = (message) => {
    const embed = new Discord.RichEmbed()
        .setTitle('Available commands')
        .setColor(0x4c4cff)
        .setDescription(`
        - !help
- !coins
- !donate (We are collecting for hosting)
        `)
        message.channel.send({ embed })
}

module.exports = help