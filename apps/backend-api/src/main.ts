import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'

/**
 * The bootstrap function for starting the NestJS application.
 */
async function bootstrap() {
	/**
	 * Creates a new instance of the AppModule and sets the global prefix for all
	 * API routes to 'api'.
	 */
	const app = await NestFactory.create(AppModule)
	const globalPrefix = 'api'
	app.setGlobalPrefix(globalPrefix)
	/**
	 * Gets the port number from the environment variable API_PORT, or defaults
	 * to 3000.
	 */
	const port = process.env.API_PORT || 3000
	/**
	 * Starts the application and listens for incoming requests on the specified
	 * port.
	 */
	await app.listen(port)
	/**
	 * Logs a message indicating that the application is running on the specified
	 * port and global prefix.
	 */
	Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`)
}

/**
 * Calls the bootstrap function to start the application.
 */
bootstrap()