let handler = async m => m.reply(`
╭─「 Donasi • Gopay/Pulsa 」
│ •  [0857-9167-7204]
│ •  [0857-0163-9070]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
