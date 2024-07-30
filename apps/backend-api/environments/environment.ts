/**
 * This file contains the configuration for the application environment.
 * It includes settings for the JWT secret, database connection details, and
 * other environment-specific settings.
 */

import * as process from 'node:process'

/**
 * The environment configuration object.
 * @property {boolean} production - Indicates whether the application is
 *   running in production mode.
 * @property {object} jwt - Configuration settings for JWT authentication.
 * @property {string} jwt.secret - The secret key used for signing JWT tokens.
 * @property {number} jwt.expiresIn - The expiration time for JWT tokens in
 *   seconds.
 * @property {object} connection - Configuration settings for the database
 *   connection.
 * @property {string} connection.type - The type of database connection
 *   (currently only 'postgres' is supported).
 * @property {string} connection.host - The hostname of the database server.
 * @property {number} connection.port - The port number of the database server.
 * @property {string} connection.username - The username for connecting to the
 *   database.
 * @property {string} connection.password - The password for connecting to the
 *   database.
 * @property {string} connection.database - The name of the database to connect
 *   to.
 * @property {boolean} connection.dropSchema - Indicates whether to drop the
 *   database schema on application startup.
 * @property {boolean} connection.synchronize - Indicates whether to
 *   synchronize the database schema with the application models.
 * @property {boolean} connection.logging - Indicates whether to log database
 *   queries in the console.
 */
export const environment = {
	production: false,
	jwt: {
		secret: process.env.JWT_SECRET,
		expiresIn: Number(process.env.JWT_EXPIRES_IN)
	},
	connection: {
		type: process.env.DB_TYPE as 'postgres',
		host: process.env.DB_HOST,
		port: Number(process.env.DB_PORT),
		username: process.env.DB_USER_NAME,
		password: process.env.DB_USER_PASSWORD,
		database: process.env.DB_NAME,
		dropSchema: false,
		synchronize: true,
		logging: false // log db in console
	}
}