import { createInteractionCreateEventListener } from './index'
import commands from '../../commands/slash'

export default createInteractionCreateEventListener(interaction => {
	if (interaction.isChatInputCommand()) {
		for (const command of commands) {
			if (!command.isMine(interaction)) continue
			
			command.execute(interaction)
		}
	}
})
