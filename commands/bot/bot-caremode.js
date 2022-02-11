const Discord = require('discord.js');
const database = require('quick.db');
const {MessageEmbed} = require('discord.js');
const {renk, slogan} = require("../../versioninfo.json");

exports.run = async (client, message, args) => {

    const yetkimyokbruh = new discord.MessageEmbed()
        .setAuthor("Yetki Reddedildi")
        .setDescription("Görünüşe göre Quantum BÖRÜ'un bu sunucuda yeterli yetkisi yok. `KANALLARI_YÖNET` yetkisini vererek veya Quantum BÖRÜ rolünü en üste taşıyarak yeniden deneyiniz")
        .setColor(renk)
        .setFooter(slogan)
    if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send(yetkimyokbruh)

    const izinyok = new MessageEmbed()
        .setTitle('Yetki Reddedildi')
        .setDescription(`${message.author} Bu komutu sadece geliştiricim kullanabilir`)
        .setColor(renk)
        .setFooter(slogan)
    if (message.author.id !== '801006452416184330') return message.channel.send(izinyok);

    function caremode(content) {
        const infoEmbed = new Discord.MessageEmbed()
            .setDescription(content)
            .setTimestamp()
            .setColor(renk)
            .setFooter(slogan)
            .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}));
        return message.channel.send(infoEmbed)
    };

    const durum = await database.fetch(client.user.id);
    if (durum == true) {

        await database.delete(client.user.id);
        return caremode('Bakım artık sona erdi. Tüm özellikler kullanılabilir hale getirildi');

    } else {

        await database.set(client.user.id, true);
        database.set(client.user.id + ':)', {
            author: message.author,
            time: Date.now()
        });

        return caremode('Bakım modu açıldı.\nArtık hiç bir kimse (Geliştiricim hariç) komutları kullanamayacak.');
    }
    ;

};
exports.conf = {
    enabled: true,
    usage: 'Bu komut geliştiriciye özeldir',
    guildOnly: false,
    aliases: ['bakım'],
    permLevel: 0
};

exports.help = {
    name: 'bakım-modu'
};
