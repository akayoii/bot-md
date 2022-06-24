let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
╭─「 Donasi • Dana 」
│ • Telkomsel [085156873853]
│ • Gopay  [085156873853]
│ • Dana  [085156873853]
│ • Trakteer  [https://trakteer.id/menrui]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6285156873853
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler