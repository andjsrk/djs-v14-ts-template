import { SlashCommand } from '../../../structure/SlashCommand'

import child from './child'

export default new SlashCommand({
	name: 'parent',
	subCommands: [
		child,
	],
})
