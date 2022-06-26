let handler = async m => m.reply(`
╭─「 Donasi • Gopay 」
│ •  [0857-9167-7204]
╰──── FauzyBOT - MD ─────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
