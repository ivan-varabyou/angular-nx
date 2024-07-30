import { Query, Resolver } from '@nestjs/graphql'
import {
	ISignAuthPayload,
	ISignAuthResponse
} from '@angular-nx/shared/data-access/interfaces'
import { SignIn } from '../decorators/auth.decorator'
import { AuthService } from '../services/auth.service'

/**
 * Resolver for authentication-related GraphQL queries.
 */
@Resolver('Auth')
export class AuthResolver {
	/**
	 * Constructs a new `AuthResolver` instance.
	 * @param authService - The authentication service to use for
	 *   authentication-related operations.
	 */
	constructor(private readonly authService: AuthService) {
	}

	/**
	 * Logs in a user and generates an access token.
	 * This resolver method is used by the `login` GraphQL query.
	 * @param authSignInPayload - The sign-in payload containing username and
	 *   password.
	 * @returns A promise resolving to the sign-in response.
	 * @throws UnauthorizedException if authentication fails.
	 */
	@Query('login')
	async login(@SignIn() authSignInPayload: ISignAuthPayload): Promise<ISignAuthResponse> {
		return await this.authService.login(authSignInPayload)
	}

	/**
	 * Logs out a user.
	 * This resolver method is used by the `logout` GraphQL query.
	 * @returns A promise resolving to a boolean indicating success.
	 */
	@Query('logout')
	async logout(): Promise<boolean> {
		return true
	}
}

