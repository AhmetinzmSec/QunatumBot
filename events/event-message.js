const Discord = require('discord.js'); // Discord.JS Modülü Tanımlandı
const {MessageEmbed} = require('discord.js')
const db = require('quick.db'); // Database Tanımlandı
const database = require('../database');
const ayarlar = require('../config.json'); // Prefix Dosyaya Çağrıldı
const { renk, slogan } = require("../versioninfo.json");

module.exports = async message => {

    if(message.channel.type == "dm") return;

    // Prefix Ayarları Tanımlandı
    let prefix;

    // Prefix Database'de Kontrol Edildi Ayarlanmış Prefix Varsa Onun Ana Prefix Yerine Geçilmesi Söylendi
    if (db.has(`prefix_${message.guild.id}`) === true) {

        prefix = db.fetch(`prefix_${message.guild.id}`)

    }

    // Prefix Database'de Kontrol Edildi Ayarlanmış Prefix Yoksa Ana Prefix'in Kullanılması Söylendi
    if (db.has(`prefix_${message.guild.id}`) === false) {

        prefix = ayarlar.prefix

    }

    let client = message.client;
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(' ')[0].slice(prefix.length);
    let params = message.content.split(' ').slice(1);
    let perms = client.elevation(message);
    let cmd;

    if (!client.commands.has(command)) {
        if (client.aliases.has(command)) {
            cmd = client.commands.get(client.aliases.get(command));
        }
    }

    if (client.commands.has(command)) {
        cmd = client.commands.get(command);
    } else if (client.aliases.has(command)) {
        cmd = client.commands.get(client.aliases.get(command));
    }

    if (cmd && cmd.help.name !== 'bakım-modu') {

        if (message.author.id !== '801006452416184330') {

            const neblmölçmedimikamk = await require('quick.db').fetch(client.user.id);
            if (neblmölçmedimikamk == true) {

                var DURATION = require('humanize-duration');

                const chimped = await db.fetch(client.user.id + ':)');
                var TIMESTAMP = Date.now() - chimped.time;
                message.react('<:boru:932266860194455642>');

                var RESULT = DURATION(TIMESTAMP, {language: 'tr', round: true, conjunction: ', ', serialComma: false});

                const embed = new MessageEmbed()
                    .setTitle("Üzgünüz... Bakımdayız!")
                    .setDescription(`${message.author}`)
                    .addField("Quantum Amor Şu Anda Bakımda:", `Yaklaşık ***${RESULT} önce*** bakıma alınmış`, true)
                    .addField("Bakıma Alan Kişi:", `${chimped.author.tag}`)
                    .setColor(renk)
                    .setFooter('Quantum Amor, Güvenlikte Yeni Devrim 🔒')
                return message.reply(embed);

            }

        }
    }
    ;

    if (cmd) {

        if (perms < cmd.conf.permLevel) return;
        cmd.run(client, message, params, perms);

        // Hatayı belirlenen kanala gönderme
        /* cmd.run(client, message, params, perms).catch(err => client.channels.cache.get('kanal id').send(err.toString())); */
    } else {
        const laura = [];
        client.commands.forEach(dropinnem => {
            laura.push(dropinnem.help.name);
            dropinnem.conf.aliases.forEach(abcdef => laura.push(abcdef));
        });

    }
    ;

}