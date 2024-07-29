import { Query, Resolver } from '@nestjs/graphql'
import {
	ISignAuthPayload,
	ISignAuthResponse
} from '@angular-nx/shared/data-access/interfaces'
import { SignIn } from '../decorators/auth.decorator'
import { AuthService } from '../services/auth.service'

@Resolver('Auth')
export class AuthResolver {
	constructor(private readonly authService: AuthService) {
	}

	@Query('login')
	async login(@SignIn() authSignInPayload: ISignAuthPayload): Promise<ISignAuthResponse> {
		return await this.authService.login(authSignInPayload)
	}

	@Query('logout')
	async logout(): Promise<boolean> {
		return true
	}
}

