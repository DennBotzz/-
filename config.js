/**
   * Create By 𝐓𝐇𝐄 𝐃𝐄𝐍𝐍 𝐁𝐎𝐓
   * Base by Dika Ardnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}


global.ownername = '𝐓𝐇𝐄 𝐃𝐄𝐍𝐍 𝐁𝐎𝐓'
global.autorecording = false //status auto merekam ( auto record )
global.autoketik = true //status auto mengetik (auto typing)
global.available = true //status online (online)
// Other
global.owner = ['6281991134619','6281991134619','6281991134619']
global.premium = ['6281991134619']
global.packname = '𝐃𝐄𝐍𝐍 𝐌𝐀𝐊𝐄𝐑𝐙'
global.author = '𝐓𝐇𝐄 𝐃𝐄𝐍𝐍 𝐁𝐎𝐓'
global.wlcm = []
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading 𝐃𝐄𝐍𝐍 𝐌𝐀𝐊𝐄𝐑𝐙...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/jo.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
