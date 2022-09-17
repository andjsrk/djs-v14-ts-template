import { AllEventListener } from '../structure/EventListener'

import interactionCreate from './interactionCreate'
import messageCreate from './messageCreate'
import ready from './ready'

const events: Array<Array<AllEventListener>> = [
	interactionCreate,
	messageCreate,
	ready,
]

export default events
