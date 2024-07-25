import { Injectable, UnauthorizedException } from '@nestjs/common'
import {
	ISignAuthPayload,
	ISignAuthResponse
} from '@angular-nx/shared/data-access/interfaces'
import { UserService } from '../../users/services/user.service'
import { JwtService } from '@nestjs/jwt'
import { PasswordService } from './password.service'
import { UserEntitiy } from '../../users/entities/user.entitiy'
import { environment } from '../../../../environments/environment'

@Injectable()
export class AuthServices {
	constructor(
		private readonly passwordService: PasswordService,
		private readonly jwtService: JwtService,
		private readonly userService: UserService
	) {
	}

	async validateUser(username: string, pass: string): Promise<Omit<UserEntitiy, 'password'>> {
		const user = await this.userService.findOneByUserName(username)

		const isValid = user ? await this.passwordService.compareHash(pass, user.password) : false
		if (isValid) {
			delete user.password
		}

		return user ?? null
	}

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
