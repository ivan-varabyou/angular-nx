import { Controller, Get } from '@nestjs/common'


/**
 * Controller for handling root API requests.
 */
@Controller()
export class AppController {

	/**
	 * GET request handler for the root endpoint.
	 * Returns a welcome message.
	 */
	@Get()
	getData() {
		return {message: 'Welcome to backend-api'}
	}
}