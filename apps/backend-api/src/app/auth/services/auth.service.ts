import { Injectable, UnauthorizedException } from '@nestjs/common'
import {
	ISignAuthPayload,
	ISignAuthResponse
} from '@angular-nx/shared/data-access/interfaces'
import { UserService } from '../../users/services/user.service'
import { JwtService } from '@nestjs/jwt'
import { PasswordService } from './password.service'
import { UserEntity } from '../../users/entities/user.entity'
import { environment } from '../../../../environments/environment'

/**
 * Service responsible for authentication-related functionality.
 */
@Injectable()
export class AuthService {
	constructor(
		private readonly passwordService: PasswordService,
		private readonly jwtService: JwtService,
		private readonly userService: UserService
	) {
	}

	/**
	 * Validates a user's credentials.
	 * @param username - The username to validate.
	 * @param pass - The password to validate.
	 * @returns A promise resolving to the validated user (with password omitted)
	 *   or null if validation fails.
	 */
	async validateUser(username: string, pass: string): Promise<Omit<UserEntity, 'password'>> {
		const user = await this.userService.findOneByUserName(username)

		const isValid = user ? await this.passwordService.compareHash(pass, user.password) : false
		if (isValid) {
			delete user.password
		}

		return user ?? null
	}

	/**
	 * Logs in a user and generates an access token.
	 * @param signInPayload - The sign-in payload containing username and
	 *   password.
	 * @returns A promise resolving to the sign-in response.
	 * @throws UnauthorizedException if authentication fails.
	 */
	async login(signInPayload: ISignAuthPayload): Promise<ISignAuthResponse> {
		const user = await this.validateUser(signInPayload.username, signInPayload.password)
		if (!user) {
			throw new UnauthorizedException()
		}
		const payload = {username: user.username, userid: user.id}

		return {
			accessToken: this.jwtService.sign(payload),
			expiresIn: new Date(environment.jwt.expiresIn).getDate(),
			id: user.id
		}
	}
}
