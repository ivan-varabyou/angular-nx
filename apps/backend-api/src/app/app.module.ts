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

@Module({
	imports: [
		TypeOrmModule.forRoot({
			...environment.connection,
			entities: [UserEntity]
		} as TypeOrmModuleOptions),
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			typePaths: ['./**/*.graphql'],
			context: ({req}) => ({req}),
			playground: true,
			resolvers: [resolverMap]
		}),
		UsersModule,
		AuthModule
	],
	controllers: [AppController]
})
export class AppModule {
}
