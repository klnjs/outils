import browserslist from 'browserslist'
import config from '../index.js'

try {
	browserslist(config)
} catch (error) {
	console.log(error)
	process.exit(1)
}
