import { TextCommand } from '../../structure/TextCommand'

export default new TextCommand({
	name: 'ping',
	execute(msg) {
		msg.reply('pong!')
	},
})
