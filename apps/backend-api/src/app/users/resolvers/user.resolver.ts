import { Query, Resolver } from '@nestjs/graphql'
import { CurrentUser } from '../decorators/user.decorator'
import { UserEntitiy } from '../entities/user.entitiy'
import { UserService } from '../services/user.service'
import { UseGuards } from '@nestjs/common'
import { GqlAuthGuard } from '../guards/gql.auth-guard'

@Resolver('User')
export class UserResolver {
	constructor(private readonly userService: UserService) {
	}

	@Query('user')
	@UseGuards(GqlAuthGuard)
	async whoAmI(@CurrentUser() user: UserEntitiy) {
		return this.userService.findOneById(user.id)
	}
}