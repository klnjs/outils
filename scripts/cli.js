import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { bump } from './commands/bump.js'
import { sync } from './commands/sync.js'
import { publish } from './commands/publish.js'
import { validate } from './commands/verify.js'

yargs(hideBin(process.argv))
	.command(
		'bump',
		'Bump package',
		(yargs2) =>
			yargs2
				.option('type', {
					alias: 't',
					choices: ['major', 'minor', 'patch'],
					description: 'Semver type to increment'
				})
				.option('version', {
					alias: 'v',
					description: 'Version to set',
					optional: true
				}),
		bump
	)
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
		'verify',
		'Verify packages',
		(yargs2) =>
			yargs2.option('packages', {
				alias: 'p',
				type: 'array',
				description: 'Packages to build'
			}),
		validate
	)
	.command(
		'publish',
		'Publish packages',
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
	.help('help')
	.hide('help')
	.wrap(null)
	.version(false)
	.scriptName('')
	.demandCommand()
	.parse()
