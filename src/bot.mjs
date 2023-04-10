import TeleBot from "telebot"

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN)


bot.setMyCommands([
  { command: '/start', description: 'Приветствие' },
  { command: '/help', description: 'Вопрос нам' }
])

bot.on('message', msg => {
  switch (text) {
    case '/start':
      "hello"
      break
    case '/help':
       "help"
      break
    case `/send`:
      if (user && admins.indexOf(user) !== -1 && (reply_video || reply || photo_id)) {
        adminService.sendToAll(reply ? reply : null, chatId, reply_video ? reply_video : null, photo_id ? photo_id : null, caption ? caption : null)
      }
      break
    default:
      user && admins.indexOf(user) == -1 ? adminService.sentToAdmin(message_id, chatId, user) : null
      break
  }
})

export default bot
