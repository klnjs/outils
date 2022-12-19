const slack = require('@slack/webhook')

const post = async ({
	dry,
	webhook: webhookArg,
	channel: channelArg,
	header,
	context,
	content
} = {}) => {
	try {
		const webhook = new slack.IncomingWebhook(webhookArg)
		const channel = channelArg.startsWith('#')
			? channelArg
			: `#${channelArg}`
		const section = content.replaceAll('@', '@\u200B')

		if (dry) {
			console.log(`Posting to ${channel} using ${webhookArg}`)
			console.log(header)
			console.log(context)
			console.log(section)
		} else {
			await webhook.send({
				channel: channel,
				blocks: [
					{
						type: 'header',
						text: {
							type: 'plain_text',
							text: header
						}
					},
					{
						type: 'context',
						elements: [
							{
								type: 'mrkdwn',
								text: context
							}
						]
					},
					{
						type: 'divider'
					},
					{
						type: 'section',
						text: {
							type: 'mrkdwn',
							text: section
						}
					}
				]
			})
		}
	} catch (err) {
		console.log(err)
		process.exit(1)
	}
}

module.exports = {
	post
}
