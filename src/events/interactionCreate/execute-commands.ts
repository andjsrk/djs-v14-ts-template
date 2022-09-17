import { createInteractionCreateEventListener } from './index'
import commands from '../../commands/slash'

export default createInteractionCreateEventListener(interaction => {
	if (!interaction.isChatInputCommand()) return
	
	for (const command of commands) {
		if (command.isMine(interaction)) {
			command.execute(interaction)
		}
	}
})
