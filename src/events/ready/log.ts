import { createReadyEventListener } from './index'

export default createReadyEventListener(() => {
	console.log('Im ready')
})
