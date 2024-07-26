import * as process from 'node:process'

export const environment = {
	production: false,
	jwt: {
		secret: process.env.JWT_SECRET,
		expiresIn: process.env.JWT_EXPIRES_IN
	},
	connection: {
		type: process.env.DB_TYPE,
		host: process.env.DB_HOST,
		port: Number(process.env.DB_PORT),
		username: process.env.DB_USER_NAME,
		password: process.env.DB_USER_PASSWORD,
		database: process.env.DB_NAME,
		dropSchema: false,
		synchronize: true,
		logging: true, // log db in console
		entities: [
			'dist/apps/backend/api/src/**/*.entity{.ts, .js}'
		],
		migrations: [
			'dist/apps/backend/api/src/migrations/*{.ts, .js}'
		],
		cli: {
			'migrationsDir': 'migrations'
		}
	}
}
