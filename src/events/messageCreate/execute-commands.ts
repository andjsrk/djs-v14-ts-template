import { createMessageCreateEventListener } from './index'
import commands from '../../commands/text'
import { PREFIX } from '../../config'

export default createMessageCreateEventListener(msg => {
	if (!msg.content.startsWith(PREFIX)) return
	
	for (const command of commands) {
		if (command.isMine(msg)) {
			command.execute(msg)
		}
	}
})
