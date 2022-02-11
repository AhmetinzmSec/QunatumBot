const Discord = require('discord.js');
const db = require('quick.db');
const { MessageEmbed } = require('discord.js');
const { renk, slogan } = require("../versioninfo.json");

module.exports = msg => {

    if(msg.channel.type == "dm") return;

    if (!db.has(`reklam_${msg.guild.id}`)) return;
    const reklam = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".rf.gd", ".az", ".party", "discord.gg",];
    if (reklam.some(word => msg.content.includes(word))) {
        try {
            if (!msg.member.hasPermission("MANAGE_MESSAGES")) {
                msg.delete();

                const embed = new MessageEmbed()
                    .setTitle('Link Engellendi')
                    .addField('Mesajı Silinen Kişi', `${msg.author}`)
                    .addField('Silinme Nedeni', 'Mesajda link tespit edildi')
                    .addField('Yazılan mesajda link tespit ettik', 'Linkin güvenilirliğinden emin olamıyoruz. Sunucumuzun düzenini bozmamak için linkleri engelliyoruz')
                    .setColor(renk)
                    .setFooter(slogan)

                return msg.channel.send(embed);

            }
        } catch (err) {
            console.log(err);
        }
    }

}