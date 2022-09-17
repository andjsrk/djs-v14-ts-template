import type { ClientEvents } from 'discord.js'

export type AllEventListener = // to decrease type complexity
	Omit<EventListener<keyof ClientEvents>, 'listener'> & { listener: (...args: Array<any>) => void }
export type EventListenerFn<EventName extends keyof ClientEvents> =
	(...args: ClientEvents[EventName]) => void | Promise<void>

export const createEventListenerFactory =
	<EventName extends keyof ClientEvents>(eventName: EventName) =>
		(listener: EventListenerFn<EventName>) => new EventListener(eventName, listener)

export class EventListener<EventName extends keyof ClientEvents> {
	constructor(
		public readonly eventName: EventName,
		public readonly listener: EventListenerFn<EventName>,
	) {}
}
