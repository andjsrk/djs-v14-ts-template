import {
	ApplicationCommandOptionType as CommandArgType,
	type ApplicationCommandSubCommand as SubCommand,
	type ChatInputCommandInteraction,
} from 'discord.js'
import { BaseSlashCommand } from './BaseSlashCommand'

export class SubSlashCommand extends BaseSlashCommand {
	public override isMine(interaction: ChatInputCommandInteraction) {
		return interaction.options.getSubcommand(false) === this.name
	}
	public override toRaw(): SubCommand {
		return {
			type: CommandArgType.Subcommand as const,
			...super.toRaw(),
			options: [
				...this.args,
				...this.optionalArgs,
			],
		}
	}
}
