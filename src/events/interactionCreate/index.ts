import { createEventListenerFactory } from '../../structure/EventListener'

export const createInteractionCreateEventListener = createEventListenerFactory('interactionCreate')

import executeCommands from './execute-commands'

export default [
	executeCommands,
]
