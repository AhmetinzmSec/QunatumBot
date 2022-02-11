const Discord = require('discord.js');
const {renk, slogan} = require("../../versioninfo.json");

exports.run = function (client, message, args) {

    const embed = new Discord.MessageEmbed()
        .addField(`Botta Bulunan Toplam Komut Sayısı;`, `${client.commands.size}`)
        .setColor(renk)
        .setFooter(slogan)
    message.channel.send(embed)

};
exports.conf = {
    enabled: true,
    usage: 'Sadece komutu yazmanız yeterlidir',
    guildOnly: true,
    aliases: ["toplam-komut", "komut-sayısı", "komutsayısı"],
    permLevel: 0
};

exports.help = {
    name: 'toplamkomut'
};