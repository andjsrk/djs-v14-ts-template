import { createEventListenerFactory } from '../../structure/EventListener'

export const createMessageCreateEventListener = createEventListenerFactory('messageCreate')

import executeCommands from './execute-commands'

export default [
	executeCommands,
]
