import { SlashCommand } from '../../structure/SlashCommand'

export default new SlashCommand({
	name: 'ping',
	execute(interaction) {
		interaction.reply('pong!')
	},
})
