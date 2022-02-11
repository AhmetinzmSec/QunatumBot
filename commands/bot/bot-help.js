const disbut = require("discord-buttons")
const Discord = require("discord.js")
const moment = require("moment");
const {version, version_name, renk, slogan} = require('../../versioninfo.json')

exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    message.channel.send(`Veriler Getiriliyor...`).then(async msj => {
        const botPing = (msj.createdTimestamp - message.createdTimestamp);
        msj.delete();
        const btn1 = new disbut.MessageMenuOption()
            .setLabel('Bot Hakkında')
            .setDescription("Bot hakkında bilgi")
            .setValue('1')
            .setEmoji("938209604406493224")
        const btn2 = new disbut.MessageMenuOption()
            .setLabel('Bot Temel Komutları')
            .setDescription(`Temel komutları gösterir`)
            .setValue('2')
            .setEmoji("924661613993263104")
        const btn3 = new disbut.MessageMenuOption()
            .setLabel('BÖRÜ Coin Sistemi')
            .setDescription(`BÖRÜ Coin Sistemi komutlarını gösterir`)
            .setValue('3')
            .setEmoji("937859718326652929")
        const btn4 = new disbut.MessageMenuOption()
            .setLabel('Sunucu Oluştur')
            .setDescription(`Sunucu Oluştur komutlarını gösterir.`)
            .setValue('4')
            .setEmoji("932270643322441748")
        const btn5 = new disbut.MessageMenuOption()
            .setLabel('Eğlence')
            .setDescription(`Eğlence komutlarını gösterir.`)
            .setValue('5')
            .setEmoji("932712172050604102")
        const btn6 = new disbut.MessageMenuOption()
            .setLabel('Log Ayarları')
            .setDescription(`Log Ayarları komutlarını gösterir`)
            .setValue('6')
            .setEmoji("933281800321658911")
        const btn7 = new disbut.MessageMenuOption()
            .setLabel('Kullanıcı Ayarları')
            .setDescription(`Kullanıcı komutlarını gösterir`)
            .setValue('7')
            .setEmoji("933282557896839218")
        const btn8 = new disbut.MessageMenuOption()
            .setLabel('Moderasyon Komutları')
            .setDescription(`Moderasyon komutlarını gösterir`)
            .setValue('8')
            .setEmoji("933281661527949373")
        const btn9 = new disbut.MessageMenuOption()
            .setLabel('Güvenlik Komutları')
            .setDescription(`Güvenlik komutlarını gösterir`)
            .setValue('9')
            .setEmoji("933281753806815263")
        const btn10 = new disbut.MessageMenuOption()
            .setLabel('Sunucu Komutları')
            .setDescription(`Sunucu komutlarını gösterir`)
            .setValue('10')
            .setEmoji("924576023503331358")
        const btn11 = new disbut.MessageMenuOption()
            .setLabel('Kayıt Sistemi')
            .setDescription(`Kayıt Sistemi komutlarını gösterir`)
            .setValue('11')
            .setEmoji("933281838942781470")
        const btn12 = new disbut.MessageMenuOption()
            .setLabel('Doğrulama Sistemi')
            .setDescription(`Doğrulama Sistemi komutlarını gösterir`)
            .setValue('12')
            .setEmoji("932270169433202848")
        const btn13 = new disbut.MessageMenuOption()
            .setLabel('Gelişmiş Sistemler')
            .setDescription(`Gelişmiş Komutları gösterir`)
            .setValue('13')
            .setEmoji("933445438835683358")
        const btn14 = new disbut.MessageMenuOption()
            .setLabel('Bot İstatistikleri')
            .setDescription("İstatistikleri içeren sayfa")
            .setValue('14')
            .setEmoji("933281601108975656")
        const btn15 = new disbut.MessageMenuOption()
            .setLabel(`Geliştirici Bilgileri`)
            .setDescription("Geliştirici hakkında bilgiler")
            .setEmoji("933367258267385866") // arıza
            .setValue("15")
        const btn16 = new disbut.MessageMenuOption()
            .setLabel(`Sürüm Bilgisi`)
            .setDescription("Quantum BÖRÜ Sürüm Bilgisi")
            .setEmoji("932270643322441748")
            .setValue("16")

        const menu = new disbut.MessageMenu()
            .addOptions(btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn10, btn11, btn12, btn13, btn14, btn15, btn16)
            .setMaxValues(1)
            .setMinValues(1)
            .setID("menu")

        const hakkinda = new Discord.MessageEmbed()
            .setTitle('Menü')
            .setColor(renk)
            .setFooter(slogan)
            .setDescription(`Selamlar! Ben BÖRÜ. Asıl ismimle Quantum BÖRÜ. Discord bekçi botuyum. Güvenlik üzerine kuruldum. Komutlarım arasında ufak eğlence komutlarıda bulunmakta. Menüler arasında dolaşarak öğrenebilirsiniz. Sunucularınızın güvenliğini korumak adına programlandım. Geliştiricim sizlerin önerilerini göz önünde bulundurarak yeni özellikler eklemeye devam ediyor. Ayrıca geri bildirimlerinizi de dikkate alıyor. Henüz çok gelişmiş bir bot değilim. Fakat programlandığım kadarıyla sizler için en iyi hizmete her daim hazırım \n\n Quantum BÖRÜ Türkçe bir bottur. Komutlardaki istisnalar dışında herhangi bir ayrı dil desteğim yoktur. Tamamen Türkçe, hızlı, güvenli ve stabil bir bot olan BÖRÜ, her daim hizmetinizdedir. \n\n Yardım menüsü toplam 15 ayrı menü bulundurmakta. Aradığınız sistemin menüsüne bakarak aradığınız sistemin kullanımını görebilirsiniz. Fakat henüz yardım menüsüne eklenmemiş komutlar bulunabilir. Yardım menüsünü geliştiricim elinden geldiğince sık güncellemeye özen göstermekte. Ayrıca sade bir yardım menüsü sunmak içinde elinden geleni yapmaktadır. \n\n ***Quantum BÖRÜ gizliliğe ve siber güvenliğe önem veren bir bottur. Verilerini asla depolamaz, kaydetmez, göremez ve kimseyle paylaşamaz*** \n\n >>> Quantum BÖRÜ otomatik rol gibi özellikleri çalıştırmak için sunucu ID'nizi, kullanıcı ID'lerini ve rol ID'lerini veritabanına kaydeder. Endişelenmeyin! Quantum BÖRÜ veya geliştirici verilerinizi toplayamaz, okuyamaz, paylaşamaz ve asla satamaz. Verileriniz tamamen anonim ve güvenli olarak saklanır. Quantum BÖRÜ, Güvenlikte Yeni Devrim 🔒`)
            .setImage("https://cdn.discordapp.com/attachments/836225187132473364/932295115073028106/1.gif")
        const embed1 = new Discord.MessageEmbed()
            .setTitle('Bot Temel Komutları')
            .setDescription("Aşağıda botun temel komutlarının bir listesi bulunmaktadır.")
            .addFields(
                {
                    name: `<:ayar:924661613993263104> Bot Komutları`,
                    value: `>>> | **toplamkomut** \n Botta bulunan komut sayısını gösterir \n\n | **duyuru #kanal [mesaj]** \n Bota sunucunuzda etiketlidiğiniz kanala duyuru attırır \n\n | **kullanım [komut]** \n Botta bir komutun kullanılma şeklini bilmiyorsanız bu komutu kullanabilirsiniz \n\n | **davet** \n Botun Davet Linkini Verir \n\n | **ping** \n Botun gecikme süresini gösterir \n\n | **prefix [ayarla/sıfırla] [prefixiniz]** \n Botun sunucudaki önekini değiştirir \n\n | **öner [mesaj]** \n Bota bir öneri özelliğiniz mi var? Bu komutla geliştiriciye bildirebilirsiniz \n\n | **bildir [mesaj]** \n Bota bir hata mı gözlemlediniz?? Bu komutla geliştiriciye bildirebilirsiniz \n\n | **istatistik** \n Botun istatistiklerini gösterir \n\n | **sürüm** \n Botun sürümü hakkında bilgi veirir \n\n`,
                    inline: false
                },
            )

            .setColor(renk)
            .setFooter(slogan)
        const embed1_1 = new Discord.MessageEmbed()
            .setTitle('Coin Sistemi')
            .setDescription("Aşağıda BÖRÜ Coin sisteminin komutlarının bir listesi bulunmaktadır.")
            .addFields(
                {
                    name: `<:coinboru:937859718326652929> BÖRÜ Coin Sistemi`,
                    value: `>>> | **coin @kullanıcı** \n Hesabınızda bulunan toplam BÖRÜ Coin miktarını gösterir \n\n | **coin-hesap [isim]** \n Eğer yoksa isminize ait bir BÖRÜ Coin hesabı açılır \n\n | **coin-ekle @kullanıcı [miktar]** \n Etiketlediğiniz kullanıcıya belirlediğiniz miktar kadar BÖRÜ Coin yollar \n\n | **coin-sil @kullanıcı** \n Etiketlediğiniz kullanıcıdan belirlediğiniz miktar kadar BÖRÜ Coin siler`,
                    inline: false
                },
            )

            .setColor(renk)
            .setFooter(slogan)

        const embed1_2 = new Discord.MessageEmbed()
            .setTitle('Sunucu Oluştur')
            .setDescription("Aşağıda botun sunucu oluşturma komutlarının bir listesi bulunmaktadır.")
            .addFields(
                {
                    name: `<:discord:932270643322441748> Sunucu Oluşturm`,
                    value: `>>> | **sunucu-kur-minimal** \n Minimal sunucu kurarsınız \n\n | **sunucu-kur-normal** \n Normal sunucu kurarsınız \n\n | **sunucu-kur-ultra** \n Gelişmiş sunucu kurarsınız`,
                    inline: false
                },
            )
            .setColor(renk)
            .setFooter(slogan)

        const embed1_3 = new Discord.MessageEmbed()
            .setTitle('Eğlence Komutları')
            .setDescription("Aşağıda botun sahip olduğu eğlence komutlarının bir listesi bulunmaktadır.")
            .addFields(
                {
                    name: `<:funny:932712172050604102> Eğlence`,
                    value: `>>> | **anime** \n Anime tarzında logo/yazı hazırlamanızı sağlar \n\n | **napim** \n Komutu kullandığınızda rastgele dalga geçmek için sözler yazar \n\n | **boks** \n Boks makinesine vurmuş gibi rastgele sayılar söyler \n\n  | **cool** \n Havalı tarzda logo/yazı hazırlamanızı sağlar \n\n  | **drake** \n Instagram gibi platformlarda gördüğümüz drake postları tarzında post hazırlar  \n\n  | **ateş** \n Ateşli logo/yazı hazırlamanızı sağlar \n\n  | **ateş-logo** \n Ateş komutunun benzeridir \n\n  | **gold-logo** \n Altın tarzında logo hazırlar \n\n  | **google-logo** \n Google logosunu sizin yazdığınız metne uygun çevirir \n\n  | **çekiç @kullanıcı** \n Etiketlediğiniz kullanıcıya çekiç atar \n\n | **zar-at** \n Zar atmış gibi rastgele sayılar verir \n\n | **neon-logo** \n Neon tarzda logo hazırlatırsınız \n\n | **odun-logo** \n Odun tarzda logo hazırlatırsınız \n\n | **kurukafa-logo** \n Kurukafa logo hazırlatırsınız \n\n | **müzik video** \n Ses kanalında YouTube üzerinden video izlersiniz`,
                    inline: false
                },
            )
            .setColor(renk)
            .setFooter(slogan)

        const embed1_4 = new Discord.MessageEmbed()
            .setTitle('Log Ayarları')
            .setDescription("Aşağıda botun sahip olduğu log komutlarının bir listesi bulunmaktadır.")
            .addFields(
                {
                    name: `<:log:933281800321658911> Log Komutları`,
                    value: `>>> | **otorol-log #kanal** \n Eğer aktifse sunucuya bir üye katıldığında ve rol verildiğinde log tutar \n\n | **otorollog-sil** \n Ayarlanmış otorol log kanalına bir daha log mesajı atmaz \n\n | **kayıt-log #kanal** \n Kayıt sisteminiz aktifse sunucuya giren kişilerin sunucuya nasıl kayıt olacaklarını öğreten bir mesaj atar \n\n | **ban-log #kanal** \n Bot aracılığıyla bir kullanıcı sunucudan yasaklandığında log kaydı tutar \n\n | **levellog** \n Level log kaydı atmaya yarar \n\n | **log-ayarla #kanal** \n Genel log kaydının tutulacağı kanalı belirler \n\n | **log-sil** \n Ayarlanmış log kaydına bir daha log kaydı atmaz`,
                    inline: false
                },
            )
            .setColor(renk)
            .setFooter(slogan)

        const embed1_5 = new Discord.MessageEmbed()
            .setTitle('Kullanıcı Ayarları')
            .setDescription("Aşağıda kullanıcılarla ilgili komutların bir listesi bulunmaktadır.")
            .addFields(
                {
                    name: `<:user:933282557896839218> Kullanıcı Komutları`,
                    value: `>>> | **toplu-çek** \n ID'sini girdiğiniz ses kanalındaki tüm kullanıcıları sizin olduğunuz kanala çeker. Spam algılanmaması için her 0.5 saniyede bir kullanıcılar sırayla taşınır \n\n | **avatar @kullanıcı** \n Etiketlediğiniz kullanıcının profil resmini ve linkini verir \n\n | **banner @kullanıcı** \n Etiketlediğiniz kullanının varsa nitro ile eklenen afişini verir \n\n | **bağlantı @kullanıcı** \n Etiketlediğiniz kullanıcın aktifliğini gösterir \n\n | **çekiliş** \n Sunucunuzda hızlı bir çekiliş yapar \n\n | **ban-sorgula [ID]** \n ID'sini girdiğiniz kullanıcın neden sunucuda banlandığını sorgularsınız \n\n | **davet-sırası** \n Sunucunuzdaki davet oluşturanları ve davetlerin kaç kez kullanıldığını gösterir \n\n | **level** \n BÖRÜ Seviye sisteminde kastığınız rank seviyesini gösterir \n\n | **yetkilerim** \n Yetkilerinizi listeler \n\n | **profil @kullanıcı** \n Etiketlediğiniz kullanıcın profili hakkında bilgi alırsınız \n\n | **durum @kullanıcı** \n Etiketlediğiniz kullanıcının hangi modda atkif olduğunu gösterir`,
                    inline: false
                },
            )
            .setColor(renk)
            .setFooter(slogan)

        const embed1_6 = new Discord.MessageEmbed()
            .setTitle('Moderasyon Komutları')
            .setDescription("Aşağıda botun sahip olduğu moderasyon komutlarının bir listesi bulunmaktadır.")
            .addFields(
                {
                    name: `<:moderation:933281661527949373> Moderasyon Komutları`,
                    value: `>>> | **rolver @kullanıcı @rol** \n Etiketlediğiniz kullanıcıya etiketlediğiniz rolü verir \n\n | **rolal @kullanıcı @rol** \n Etiketlediğiniz kullanıcıdan etiketlediğiniz rolü alır \n\n | **otorol ayarla @rol / otorol sil** \n Otorol ayarlamanızı sağlar \n\n | **bot-otorol ayarla @rol / bot-otorol sil** \n Botlara özel otorol ayarlamanızı sağlar \n\n | **yaş @kullanıcı [isim] [yaş]** \n Etiketlediğiniz kullanıcıyı isim ve yaş olarak sunucuda görünen ismini değiştirir \n\n | **ban @kullanıcı / unban [ID]** \n Etiketlediğiniz kullanıcıyı yasaklarsınız veya yasağını kaldırırsınız \n\n | **at @kullanıcı** \n Etiketlediğiniz kullanıcıyı sunucudan atarsınız \n\n | **sustur @kullanıcı [süre]** \n Etiketlediğiniz kullanıcıyı belirlediğiniz süre boyunca susturur`,
                    inline: false
                },
            )
            .setColor(renk)
            .setFooter(slogan)

        const embed1_7 = new Discord.MessageEmbed()
            .setTitle('Güvenlik Komutları')
            .setDescription("Aşağıda botun sahip olduğu moderasyon komutlarının bir listesi bulunmaktadır.")
            .addFields(
                {
                    name: `<:security:933281753806815263> Güvenlik Komutları`,
                    value: `>>> | **reklam-engelle aç / kapat** \n Sunucunuzda link engellemeyi açar veya kapatır \n\n | **gardiyan #kanal** \n Yeni giren üyelerin test edileceği kanalı ayarlar. Kanal ayarlandığında sistem otomatik olarak aktifleşir \n\n | **sunucu-bilgi** \n Sunucu hakkında güvenlik bilgileri verir \n\n | **yavaş-mod [saniye]** \n Komutu yazdığınız kanala gecikme ekler. Spam koruması gibidir \n\n | **anti-spam aç / kapat** \n Anti-Spam sistemini açar veya kapatır`,
                    inline: false
                },
            )
            .setColor(renk)
            .setFooter(slogan)

        const embed1_8 = new Discord.MessageEmbed()
            .setTitle('Sunucu Komutları')
            .setDescription("Aşağıda botun sahip olduğu sunucu komutlarının bir listesi bulunmaktadır.")
            .addFields(
                {
                    name: `<:discord:932270643322441748> Sunucu Komutları`,
                    value: `>>> | **oylama** \n Sunucunuzda çok seçenekli oylama yaparsınız \n\n | **banlist** \n Sunucunuzun yasaklı listesini getirir \n\n | **nuke** \n Komutu yazdığınız kanalı sıfırlar \n\n | **sil [miktar]** \n Belirttiğiniz miktar kadar mesaj siler \n\n | **emojiler** \n Sunucunuzda bulunan emojileri listeler \n\n | **emojiyükle [resimlink] [emoji ismi]** \n Sunucunuza emoji yüklersiniz \n\n | **levels [aç/kapat]** \n Level sistemini açmanıza veya kapatmanıza yarar`,
                    inline: false
                },
            )
            .setColor(renk)
            .setFooter(slogan)

        const embed1_9 = new Discord.MessageEmbed()
            .setTitle('Kayıt Sistemi')
            .setDescription("Aşağıda botun sahip olduğu Kayıt komutlarının bir listesi bulunmaktadır.")
            .addFields(
                {
                    name: `Kayıt Sistemi Komutları`,
                    value: `>>> \n\n <:login:933281838942781470> **NORMAL KAYIT SİSTEMİ** \n\n | **kayıt-rol @rol** \n Normal kayıt sistemi için kayıt rolü ayarlarsınız \n\n | **kayıt [isim] [yaş]** \n Normal kayıt sistemi ile kayıt olursunuz \n\n\n\n <:login:933281838942781470> **GELİŞMİŞ KAYIT SİSTEMİ** \n\n | **erkek-rol @rol** \n Gelişmiş kayıt sistemi için erkek rolü ayarlarsınız \n\n | **kadın-rol @rol** \n Gelişmiş kayıt sistemi için kadın rolü ayarlarsınız \n\n | **kayıt-ek [isim] [yaş]** \n Gelişmiş biçimde kayıt olursunuz. İsim ve yaş girildikten sonra erkek veya kadın rollerinden birini seçmeniz gerekir \n\n`,
                    inline: false
                },
            )
            .setColor(renk)
            .setFooter(slogan)

        const embed1_10 = new Discord.MessageEmbed()
            .setTitle('Doğrulama Sistemi')
            .setDescription("Aşağıda botun sahip olduğu sunucu komutlarının bir listesi bulunmaktadır.")
            .addFields(
                {
                    name: `<:checked:932270169433202848> Doğrulama Sistemi Komutları`,
                    value: `>>> | **doğrula-rol** \n Doğrulama yapıldığında verilecek rolü ayarlar \n\n | **doğrula-kod** \n Doğrulama yapabilmeniz için kod oluşturur \n\n | **doğrulama-onay** \n Size verilen kodu bu komutla yazarak doğrulama işlemini tamamlarsınız \n\n | **doğrulama-özel** \n Doğrulama kodunu özelden alırsınız \n\n | **onay** \n Özelden gelen doğrulama kodunu bu komutla yazarsanız doğrulama işlemini tamamlarsınız`,
                    inline: false
                },
            )
            .setColor(renk)
            .setFooter(slogan)

        const embed1_11 = new Discord.MessageEmbed()
            .setTitle('Gelişmiş Komutlar')
            .setDescription("Aşağıda botun sahip olduğu gelişmiş komutlarının bir listesi bulunmaktadır.")
            .addFields(
                {
                    name: `<:developed:933445438835683358> Gelişmiş Komutlar`,
                    value: `>>> | **açılmayan-ban** \n Bu komutla üye yasakladığınızda unban komutu işe yaramaz. Sunucu ayarlarından kaldırılan yasak işe yaramaz. Bu komutun içinde bulunan unban komutu ile yasak kaldırılmalıdır \n\n | **hesapla** \n Size hesap makinesi sunar var her türlü işlemi yapabilirsiniz \n\n | **döviz** \n Gerçek zamanlı döviz kurlarını gösterir \n\n | **oy-kick** \n Oylama kararıyla kullanıcı atılır \n\n | **cinsiyet-kayıt** \n Erkek - Kadın biçiminde rol seçerek kayıt olursunuz`,
                    inline: false
                },
            )
            .setColor(renk)
            .setFooter(slogan)

        const uptime = moment.duration(client.uptime).format("D [gün],  H [saat], m [dakika], s [saniye]")
        let embed2 = new Discord.MessageEmbed()
            .setAuthor(`Bot İstatistikleri`, client.user.displayAvatarURL({dynamic: true}))
            .setDescription(`Bot İstatistikleri Aşağıda Yazmaktadır`)
            .setThumbnail(client.user.displayAvatarURL({dynmaic: true}))
            .addFields(
                {name: ":heartbeat: | Ping Durumu'", value: client.ws.ping + 'ms', inline: true},

                {
                    name: "<:quantum:938209604406493224> | Mesaj Gecikme Süresi",
                    value: `${Math.floor(message.createdAt - message.createdAt)} ms`,
                    inline: true
                },

                {
                    name: ":man_frowning: | Kullanıcı Sayısı",
                    value: `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`,
                    inline: true
                },

                {name: "<:nodejs:932270582156910642> | Node Sürümü", value: `${process.version}`, inline: true},

                {name: ":man_frowning: | Kullanıcı Sayısı", value: `${client.users.cache.size}`, inline: true},

                {name: "<:quantum:938209604406493224> Çalışma Durumu", value: uptime, inline: true}
            )
            .setColor(renk)
            .setFooter(slogan)
        let user = client.users.cache.get("849811561315827722");
        let embed3 = new Discord.MessageEmbed()
            .setAuthor(`Geliştirici Bilgileri`)
            .addFields(
                {name: `>>> Bot Sahibi ve Geliştiricisi:`, value: `[Picadro](https://discord.com/users/801006452416184330/)`, inline: false},
                {
                    name: "> Linkler",
                    value: "<:github:932270128027025408> | Picadro GitHub \n [Geliştiricimin GitHub Sayfası](https://www.github.com/Picadro/) \n\n <:discord:932270643322441748> | Kardeş Sunucular \n [SoftwareStellar's](https://discord.gg/mPxsbpv7ZA) \n\n <:quantum:938209604406493224> | BÖRÜ Destek Sunucusu \n [Quantum Team](https://discord.gg/qgYhfW93FC)"
                }
            )
            .setColor(renk)
            .setFooter(slogan)

        let embed4 = new Discord.MessageEmbed()
            .setAuthor(`Quantum BÖRÜ Sürüm Bilgisi`)
            .addFields(
                {name: `Sürüm : `, value: `***${version}***`, inline: false},
                {name: "Sürüm Kod Adı : ", value: `***${version_name}***`},
            )
            .setColor(renk)
            .setFooter(slogan)

        let msg = await message.channel.send({embed: hakkinda, component: menu})

        const filter = (menu) => menu.clicker.user.id === message.author.id; //user filter (author only)
        const collector = message.createMenuCollector(filter, {time: 120000});
        client.on("clickMenu", menu => {
            if (menu.clicker.id !== message.author.id) return;
            menu.reply.defer();
            if (menu.values[0] === '1') {
                msg.edit({
                    embed: hakkinda,
                })
            }
            if (menu.values[0] === '2') {
                msg.edit({
                    embed: embed1,
                })
            }
            if (menu.values[0] === '3') {
                msg.edit({
                    embed: embed1_1,
                })
            }

            if (menu.values[0] === '4') {
                msg.edit({
                    embed: embed1_2,
                })
            }
            if (menu.values[0] === '5') {
                msg.edit({
                    embed: embed1_3,
                })
            }
            if (menu.values[0] === '6') {
                msg.edit({
                    embed: embed1_4,
                })
            }
            if (menu.values[0] === '7') {
                msg.edit({
                    embed: embed1_5,
                })
            }
            if (menu.values[0] === '8') {
                msg.edit({
                    embed: embed1_6,
                })
            }
            if (menu.values[0] === '9') {
                msg.edit({
                    embed: embed1_7,
                })
            }
            if (menu.values[0] === '10') {
                msg.edit({
                    embed: embed1_8,
                })
            }
            if (menu.values[0] === '11') {
                msg.edit({
                    embed: embed1_9,
                })
            }
            if (menu.values[0] === '12') {
                msg.edit({
                    embed: embed1_10,
                })
            }
            if (menu.values[0] === '13') {
                msg.edit({
                    embed: embed1_11,
                })
            }
            if (menu.values[0] === "14") {
                msg.edit({
                    embed: embed2
                })
            }
            if (menu.values[0] === "15") {
                msg.edit({
                    embed: embed3
                })
            }
            if (menu.values[0] === "16") {
                msg.edit({
                    embed: embed4
                })
            }
        })
    })
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["help", "y", "h"],
    usage: 'Sadece komutun adını yazmanız yeterlidir',
    permLevel: 0
};

exports.help = {
    name: 'yardım',
    description: 'Yardım Listesini Gösterir',
    usage: '!yardım sa'
};