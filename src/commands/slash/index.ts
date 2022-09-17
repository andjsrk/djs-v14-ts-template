import type { SlashCommand } from '../../structure/SlashCommand'

import parent from './parent'
import ping from './ping'

const commands: Array<SlashCommand> = [
	parent,
	ping,
]

export default commands
