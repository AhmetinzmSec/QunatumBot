const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
const db = require('quick.db');
const {MessageButton} = require('discord-buttons');
const { renk, slogan } = require("../../versioninfo.json");

exports.run = (client, message, args) => {

    if (message.mentions.users.first()) message.author = message.mentions.users.first();

    const embed = new Discord.MessageEmbed()
        .setImage(message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}))
        .setColor(renk)
        .setFooter(slogan)
        .setTitle("Avatarınız;");

    const button = new MessageButton()
        .setLabel('Avatar URL')
        .setStyle('url')
        .setURL(message.author.displayAvatarURL({dynamic: true, size: 4096, format: 'png'}));

    return message.channel.send({
        embed: embed, component: button
    });

};

exports.conf = {
    aliases: ['pp', 'profile-pic',],
    usage: '!avatar [kullanıcı etiketi] \n\n (Etiket yapmazsanız sizin profil fotoğrafınız görüntülenir)',
    permLevel: 0
};

exports.help = {
    name: 'avatar',
    description: '',
    usage: ''
};

/*
   BAN İZNİ : 2
   ADMİN İZNİ : 3
   SADECE GELİŞTİRİCİ : 4
   ATMA İZNİ : 5
 */