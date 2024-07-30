import { Module } from '@nestjs/common'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'

import { AppController } from './app.controller'
import { environment } from '../../environments/environment'
import { resolverMap } from './app.resolver'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'
import { UserEntity } from './users/entities/user.entity'

/**
 * The main module for the backend API.
 */
@Module({
	imports: [
		/**
		 * Configures the TypeORM module with the database connection settings and
		 * the UserEntity.
		 */
		TypeOrmModule.forRoot({
			...environment.connection,
			entities: [UserEntity]
		} as TypeOrmModuleOptions),
		/**
		 * Configures the GraphQL module with the ApolloDriver, type paths, context
		 * resolver, and resolvers.
		 */
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			typePaths: ['./**/*.graphql'],
			context: ({req}) => ({req}),
			playground: true,
			resolvers: [resolverMap]
		}),
		/**
		 * Imports the UsersModule for handling user-related functionality.
		 */
		UsersModule,
		/**
		 * Imports the AuthModule for handling authentication-related functionality.
		 */
		AuthModule
	],
	/**
	 * Exports the AppController for use in other modules.
	 */
	controllers: [AppController]
})
export class AppModule {
}