import { TextCommand } from '../../../structure/TextCommand'

import child from './child'

export default new TextCommand({
	name: 'parent',
	subCommands: [
		child,
	],
	execute(msg) {
		msg.reply('This message has been sent because there\'s no sub command that executed')
	}
})
