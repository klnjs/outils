import browserslist from 'browserslist'
import browserslistConfig from '../index.js'

try {
	browserslist(browserslistConfig)
} catch (error) {
	console.log(error)
	process.exit(1)
}
