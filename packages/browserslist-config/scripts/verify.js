import browserslist from 'browserslist'
import browserslistConfig from '../index.cjs'

try {
	browserslist(browserslistConfig)
} catch (error) {
	console.log(error)
	process.exit(1)
}
