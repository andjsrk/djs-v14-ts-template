import { createEventListenerFactory } from '../../structure/EventListener'

export const createReadyEventListener = createEventListenerFactory('ready')

import log from './log'
import registerSlashCommands from './register-slash-commands'

export default [
	log,
	registerSlashCommands,
]
