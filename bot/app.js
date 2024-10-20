import {Telegraf, Markup} from 'telegraf'
import { ref } from 'vue'

const token = '7570028705:AAEzCZWb3rBGUhR0rj80TIpVrchiu2D-LHk'
const webAppUrl = 'https://wim-clicker.web.app'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
  ctx.reply(
    'Привет, пора тапать на свинью!', 
    Markup.inlineKeyboard([
      Markup.button.webApp('Open mini app', `${webAppUrl}?ref=${ctx.payload}
    `),
  ])
 )
})

bot.launch()