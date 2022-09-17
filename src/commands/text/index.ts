import type { TextCommand } from '../../structure/TextCommand'

import parent from './parent'
import ping from './ping'

const commands: Array<TextCommand> = [
	parent,
	ping,
]

export default commands
