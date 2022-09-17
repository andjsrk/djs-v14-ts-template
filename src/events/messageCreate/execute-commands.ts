import { createMessageCreateEventListener } from './index'
import textCommands from '../../commands/text'
import { PREFIX } from '../../config'

export default createMessageCreateEventListener(msg => {
	if (!msg.content.startsWith(PREFIX)) return
	
	for (const command of textCommands) {
		if (command.isMine(msg)) {
			command.execute(msg)
		}
	}
})
