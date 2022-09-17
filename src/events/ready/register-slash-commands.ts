import { createReadyEventListener } from './index'
import commands from '../../commands/slash'

export default createReadyEventListener(async client => {
	client.application.commands.set(
		commands.map(command => command.toRaw())
	)
})
