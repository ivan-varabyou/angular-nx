import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { UserEntitiy } from './entities/user.entitiy'
import { UserResolver } from './resolvers/user.resolver'
import { UserService } from './services/user.service'

@Module({
	imports: [TypeOrmModule.forFeature([UserEntitiy])],
	providers: [UserResolver, UserService],
	exports: [UserService]
})
export class UsersModule {
}
