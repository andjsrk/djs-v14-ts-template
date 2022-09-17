import { TextCommand } from '../../../structure/TextCommand'

export default new TextCommand({
	name: 'child',
	execute(msg, args) {
		msg.reply(args.join(' ') || 'no args provided!')
	},
})
