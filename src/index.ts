import { Bot } from './structure/Bot'
import events from './events'
import { TOKEN } from './config'

const bot = new Bot({
	token: TOKEN,
})

bot.registerEvents(events)

bot.login()
