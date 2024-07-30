import { Query, Resolver } from '@nestjs/graphql'
import { CurrentUser } from '../decorators/user.decorator'
import { UserEntity } from '../entities/user.entity'
import { UserService } from '../services/user.service'
import { UseGuards } from '@nestjs/common'
import { GqlAuthGuard } from '../guards/gql.auth-guard'

/**
 * Resolver for the User entity.
 */
@Resolver('User')
export class UserResolver {
	/**
	 *  constructor
	 * @param userService
	 */
	constructor(private readonly userService: UserService) {
	}

	/**
	 * GraphQL query to retrieve information about the currently authenticated
	 * user. Requires authentication using the GqlAuthGuard.
	 * @param user - The authenticated user (provided by the decorator).
	 * @returns The UserEntity corresponding to the authenticated user.
	 */
	@Query('user')
	@UseGuards(GqlAuthGuard)
	async whoAmI(@CurrentUser() user: UserEntity): Promise<UserEntity | null> {
		return await this.userService.findOneById(user.id)
	}
}
