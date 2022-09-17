import { ApplicationCommandOptionType } from 'discord.js'
import { SubSlashCommand } from '../../../structure/SubSlashCommand'

export default new SubSlashCommand({
	name: 'child',
	args: [
		{
			type: ApplicationCommandOptionType.String,
			name: 'content',
			description: 'content to send',
		},
	],
	execute(interaction) {
		interaction.reply('Im child command!')
	}
})
