import {
	ApplicationCommandType as CommandType,
	type ChatInputApplicationCommandData as ChatInputCommand,
	type ChatInputCommandInteraction,
} from 'discord.js'
import { BaseSlashCommand, type BaseSlashCommandOptions } from './BaseSlashCommand'
import type { SubSlashCommand } from './SubSlashCommand'

export interface ParentSlashCommandOptions extends Pick<BaseSlashCommandOptions, 'name'> {
	readonly subCommands: Array<SubSlashCommand>
}
export class SlashCommand extends BaseSlashCommand {
	private readonly subCommands: Array<SubSlashCommand> | null = null
	constructor(options: ParentSlashCommandOptions)
	constructor(options: BaseSlashCommandOptions)
	constructor(options: BaseSlashCommandOptions | ParentSlashCommandOptions) {
		super({
			// because of ts17009 need to create unnecessary anonymous function
			execute: interaction => this.execute(interaction),
			...options,
		})
		if ('subCommands' in options) this.subCommands = options.subCommands
	}
	public override isMine(interaction: ChatInputCommandInteraction) {
		return interaction.commandName === this.name
	}
	public override execute(interaction: ChatInputCommandInteraction) {
		if (this.subCommands !== null) {
			for (const subCommand of this.subCommands) {
				if (subCommand.isMine(interaction)) subCommand.execute(interaction)
			}
		} else {
			super.execute(interaction)
		}
	}
	public override toRaw(): ChatInputCommand {
		return {
			type: CommandType.ChatInput as const,
			...super.toRaw(),
			options:
				this.subCommands?.map(subCommand => subCommand.toRaw()) ?? [
					...this.args,
					...this.optionalArgs,
				],
		}
	}
}
