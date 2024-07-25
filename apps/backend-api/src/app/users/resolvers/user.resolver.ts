import { Resolver } from '@nestjs/graphql'
import { CurrentUser } from '../decorators/user.decorator'
import { UserEntitiy } from '../entities/user.entitiy'
import { UserService } from '../services/user.service'

@Resolver('User')
export class UserResolver {
	constructor(private readonly userService: UserService) {
	}

	async whoAmI(@CurrentUser() user: UserEntitiy) {
		return this.userService.findOneById(user.id)
	}
}