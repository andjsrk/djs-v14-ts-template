import {
	Client, GatewayIntentBits as Intents,
	type ClientOptions,
} from 'discord.js'
import type { AllEventListener } from './EventListener'

export interface BotOptions extends Omit<ClientOptions, 'intents'> {
	readonly token: string
	readonly prefix?: string
	readonly intents?: Array<Intents>
}
export class Bot extends Client {
	public readonly token: string
	public readonly prefix: string | null
	constructor(options: BotOptions) {
		super({
			...options,
			allowedMentions: options.allowedMentions ?? {
				repliedUser: false,
			},
			intents: options.intents ?? [
				Intents.Guilds,
				Intents.GuildMessages,
				Intents.MessageContent,
			],
		})
		this.token = options.token
		this.prefix = options.prefix ?? null
	}
	public async registerEvents(events: Array<Array<AllEventListener>>) {
		for (const event of events) {
			for (const eventListener of event) {
				super.on(eventListener.eventName, eventListener.listener)
			}
		}
	}
	public login() {
		return super.login(this.token)
	}
}
