import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { UserEntity } from './entities/user.entity'
import { UserResolver } from './resolvers/user.resolver'
import { UserService } from './services/user.service'


/**
 * Users module contain logic of users
 */
@Module({
	// Import the TypeORM module and specify the UserEntity as a feature.
	imports: [TypeOrmModule.forFeature([UserEntity])],
	// Provide the UserResolver and UserService as providers within this module.
	providers: [UserResolver, UserService],
	// Export the UserService so that it can be used in other modules.
	exports: [UserService]
})
export class UsersModule {
}