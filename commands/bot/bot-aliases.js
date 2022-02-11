const Discord = require('discord.js');
const {renk, slogan} = require("../../versioninfo.json");

exports.run = (client, message, args) => {

    const error = (abcdef) => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Bir Hata Oluştu')
            .setDescription(abcdef)
            .setColor(renk)
            .setFooter(slogan)
        );
    };

    const aliasess = args[0];
    if (!aliasess) return error('Bir komut ismi giriniz.');

    const command = client.commands.get(aliasess) || client.commands.get(client.aliases.get(aliasess));
    if (!command) return error('Böyle bir komut bulunamadı.');

    const commandname = command.conf.aliases;

    let embed = new Discord.MessageEmbed()
        .setTitle("Okuma Başarısız")
        .setDescription("Bu komutun kullanımı okunamadı, henüz eklenmemiş gibi görünüyor")
        .setColor("3dc73d")
        .setFooter('Quantum BÖRÜ, Güvenlikte Yeni Devrim 🔒')

    if (!commandname) return message.reply(embed)

    message.channel.send(new Discord.MessageEmbed()
        .setTitle(`${aliasess} komutunun alternatif komutları`)
        .setDescription(`\`${commandname}\``)
        .setColor(renk)
        .setFooter(slogan)
    );

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['aliases', "alternatifler"],
    usage: '$kullanım [komut ismi]',
    permLevel: 0
};

exports.help = {
    name: "ek-komut"
};