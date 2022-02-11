const Discord = require('discord.js');
const client = new Discord.Client();
const {prefix, official_ahmetinzm, token} = require('./config.json');
const {MessageEmbed} = require('discord.js');
const AsciiTable = require('ascii-table');
const fs = require('fs');
const db = require('quick.db');
const {methodSpread} = require("lodash/fp/_mapping");
require('./util/eventHandler.js')(client);
require("discord-buttons")(client);

var commandtable = new AsciiTable('Picadro Command Table')

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

commandtable.setHeading("Command", "Status", "Aliases")

fs.readdirSync('./commands').forEach(dir => {

    const commandFiles = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {

        const commands = require(`./commands/${dir}/${file}`);

        if (commands.help.name) {

            client.commands.set(commands.help.name, commands);
            commandtable.addRow(commands.help.name, "Hazır", commands.conf.aliases)

        } else {

            commandtable.addRow(commands.help.name, `Arıza -> ${file} Komut istemcileri çalıştırılırken hata oluştu`)
            continue;

        }

        commands.conf.aliases.forEach(alias => {

            client.aliases.set(alias, commands.help.name)

        });

    }

})

console.log(commandtable.toString())

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === official_ahmetinzm) permlvl = 4;
    if (message.member.hasPermission("KICK_MEMBERS")) permlvl = 5;
    return permlvl;
};


/* client.on('ready', () => {
    console.log(`${client.user.tag} adı ile giriş yapıldı! Shard ID: ${client.shard.count}`);
});
*/

client.login(token)