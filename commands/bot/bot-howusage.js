const Discord = require('discord.js');
const {renk, slogan} = require("../../versioninfo.json");

exports.run = (client, message, args) => {

    const error = (abcdef) => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Bir Hata Oluştu')
            .setDescription(abcdef)
            .setColor("3dc73d")
            .setFooter('Quantum BÖRÜ, Güvenlikte Yeni Devrim 🔒')
        );
    };

    const commandname = args[0];
    if (!commandname) return error('Bir komut ismi giriniz.');

    const command = client.commands.get(commandname) || client.commands.get(client.aliases.get(commandname));
    if (!command) return error('Böyle bir komut bulunamadı.');

    const usage = command.conf.usage;

    let embed = new Discord.MessageEmbed()
        .setTitle("Okuma Başarısız")
        .setDescription("Bu komutun kullanımı okunamadı, henüz eklenmemiş gibi görünüyor")
        .setColor(renk)
        .setFooter(slogan)

    if (!usage) return message.reply(embed)

    message.channel.send(new Discord.MessageEmbed().setTitle(`${commandname} komutunun kullanım şekli`).setDescription(`\`${usage}\``).setColor("3dc73d").setFooter('Quantum BÖRÜ, Güvenlikte Yeni Devrim 🔒'));

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['usage'],
    usage: '$kullanım [komut ismi]',
    permLevel: 0
};

exports.help = {
    name: "kullanım"
};