import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { sync } from './commands/sync.js'
import { build } from './commands/build.js'
import { publish, publishToSlack } from './commands/publish.js'
import { unpublish } from './commands/unpublish.js'

yargs(hideBin(process.argv))
	.command(
		'sync',
		'Sync packages',
		(yargs2) =>
			yargs2.option('packages', {
				alias: 'p',
				type: 'array',
				description: 'Packages to sync'
			}),
		sync
	)
	.command(
		'build',
		'Build packages',
		(yargs2) =>
			yargs2.option('packages', {
				alias: 'p',
				type: 'array',
				description: 'Packages to build'
			}),
		build
	)
	.command(
		'publish',
		'Publish packages to registry',
		(yargs3) =>
			yargs3
				.option('dry', {
					type: 'boolean'
				})
				.option('token', {
					alias: 't',
					type: 'string',
					description: 'Token to publish with',
					requiresArg: true,
					demandOption: true
				})
				.option('packages', {
					alias: 'p',
					type: 'array',
					description: 'Packages to publish',
					requiresArg: true
				})
				.option('registry', {
					alias: 'r',
					type: 'string',
					description: 'Registry to publish to',
					requiresArg: true
				}),
		publish
	)
	.command(
		'publish-to-slack',
		'Publish repository information to slack',
		(yargs3) =>
			yargs3
				.option('dry', {
					type: 'boolean'
				})
				.option('type', {
					alias: 't',
					type: 'string',
					choices: ['commit', 'changelog'],
					description: 'Type to publish',
					requiresArg: true,
					demandOption: true
				})
				.option('fields', {
					alias: 'f',
					type: 'array',
					default: [
						'author',
						'comitter',
						'date',
						'hash',
						'version',
						'repository'
					],
					description: 'Fields to publish',
					requiresArg: true,
					demandOption: true
				})
				.option('webhook', {
					alias: 'w',
					type: 'string',
					description: 'Webhook to publish with',
					requiresArg: true,
					demandOption: true
				})
				.option('channel', {
					alias: 'c',
					type: 'string',
					description: 'Channel to publish in',
					requiresArg: true,
					demandOption: true
				}),
		publishToSlack
	)
	.command(
		'unpublish',
		'Unpublish packages from registry',
		(yargs3) =>
			yargs3
				.option('dry', {
					type: 'boolean'
				})
				.option('token', {
					alias: 't',
					type: 'string',
					description: 'Token to unpublish with',
					requiresArg: true,
					demandOption: true
				})
				.option('registry', {
					alias: 'r',
					type: 'string',
					description: 'Registry to unpublish from',
					requiresArg: true
				})
				.option('packages', {
					alias: 'p',
					type: 'array',
					description: 'Packages to unpublish',
					requiresArg: true
				})
				.option('version', {
					alias: 'v',
					type: 'string',
					description: 'Version to unpublish',
					requiresArg: true,
					demandOption: true
				}),
		unpublish
	)
	.help('help')
	.hide('help')
	.wrap(null)
	.version(false)
	.scriptName('')
	.demandCommand()
	.parse()
