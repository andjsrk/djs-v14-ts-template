import type {
	ApplicationCommandOptionData as CommandArg,
	ApplicationCommandSubCommandData as SubCommandArg,
	ApplicationCommandSubGroupData as SubGroupArg,
	ChatInputCommandInteraction,
} from 'discord.js'
import { Command, type CommandOptions } from './Command'

type OmitEach<T, K extends keyof T> =
	T extends any
		? Omit<T, K>
		: never

export type Arg = Exclude<
	CommandArg,
	| SubCommandArg
	| SubGroupArg
>

type TransformedArgs = [ interaction: ChatInputCommandInteraction ]

export interface BaseSlashCommandOptions extends CommandOptions<TransformedArgs> {
	readonly name: string
	readonly description?: string
	readonly args?: Array<OmitEach<Arg, 'required'>>
	readonly optionalArgs?: Array<OmitEach<Arg, 'required'>>
}
export abstract class BaseSlashCommand extends Command<ChatInputCommandInteraction, TransformedArgs> {
	public readonly name: string
	public readonly description: string
	public readonly args: Array<Arg>
	public readonly optionalArgs: Array<Arg>
	constructor(options: BaseSlashCommandOptions) {
		super(options)
		this.name = options.name
		this.description = options.description ?? '-'
		this.args = options.args?.map(arg => ({ ...arg, required: true })) ?? []
		this.optionalArgs = options.optionalArgs?.map(arg => ({ ...arg, required: false })) ?? []
	}
	protected override transform(interaction: ChatInputCommandInteraction): [ ChatInputCommandInteraction ] {
		return [ interaction ]
	}
	protected toRaw() {
		return {
			name: this.name,
			description: this.description,
		}
	}
}
