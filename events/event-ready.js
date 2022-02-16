const Discord = require('discord.js'); // Dicord.JS Modülü Tanımlandı
const {version_name, botstatus, botstatusno, discord_js, version} = require('../versioninfo.json');

module.exports = client => {


    client.user.setStatus("online");

    // Konsola BÖRÜ Yazdırıldı
    console.log(`Quantum BÖRÜ || ${version_name}`);

    const neblmölçmedimikamk = require('quick.db').fetch(client.user.id);
    if (neblmölçmedimikamk == true) {

        console.log(`Quantum BÖRÜ || ${botstatus}`)

    } else {

        console.log(`Quantum BÖRÜ || ${botstatusno}`)

    }

    console.log(`Quantum BÖRÜ || ${version}`)

    console.log(`NODE || ${process.version}`)

    console.log(`DCJS || ${Discord.version}`)

    console.log(`TOPLAM KOMUT SAYISI : ${client.commands.size}`)

    /* var randommessages = [

        "Baybars",
        "$davet",
        "$yardım"

    ]

    // Rastgele Yazılar Her 5 Saniyede Bir Değişecek Şekilde Zamanlandı
    setInterval(function () {

        var randommessages1 = randommessages[Math.floor(Math.random() * (randommessages.length))]

        client.user.setActivity(randommessages1, { type: 'PLAYING' });

    }, 5000);
     */

    client.user.setActivity(`${version} || $yardım`, {type: 'PLAYING'});

    client.on('message', msg => {
        client.emit('checkMessage', msg);
    })
}
