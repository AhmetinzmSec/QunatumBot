const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
const db = require('quick.db');
const { renk, slogan } = require("../../versioninfo.json");

exports.run = (client, message, args) => {

    const izinyok = new MessageEmbed()
        .setTitle('Yetki Reddedildi')
        .setDescription('**Bu komutu kullanmak için `KANLLARI_YÖNET` ya da `YÖNETİCİ` yetkisine sahip olmalısın**')
        .setColor(renk)
        .setFooter(slogan)

    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(izinyok);
    if (isNaN(args)) return message.reply('Lütfen sayısal bir değer belirtiniz');
    if (args < 2 || args > 100) return message.reply('Lütfen 2-100 arası sayılar giriniz');
    message.channel.bulkDelete(Number(args))
    const embed = new MessageEmbed()
        .setTitle('Mesajlar silindi')
        .setDescription(args + ' Mesaj silindi')
        .setColor(renk)
        .setFooter(slogan)
    message.channel.send(embed).then(mesaj => {
        setTimeout(function () {
            mesaj.delete()
        }, 5000);
    })

};

exports.conf = {
    aliases: ['sil', 'clip',],
    usage: '!sil [silinecek mesaj sayısı]',
    permLevel: 0
};

exports.help = {
    name: 'clear',
    description: '',
    usage: ''
};

/*
   BAN İZNİ : 2
   ADMİN İZNİ : 3
   SADECE GELİŞTİRİCİ : 4
   ATMA İZNİ : 5
 */