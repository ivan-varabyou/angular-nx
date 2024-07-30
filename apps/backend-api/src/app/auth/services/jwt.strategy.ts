import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { environment } from '../../../../environments/environment'


/**
 * JWT strategy for authentication using JSON Web Tokens.
 * This strategy is used by NestJS Passport module to handle JWT authentication.
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	/**
	 * Constructs a new JwtStrategy instance.
	 * This constructor sets up the strategy configuration.
	 */
	constructor() {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: environment.jwt.secret
		})
	}

	/**
	 * Validates the JWT payload and returns the user information.
	 * This method is called by NestJS Passport module to validate the JWT.
	 * @param payload - The JWT payload.
	 * @returns The user information extracted from the payload.
	 */
	async validate(payload: any) {
		return {userId: payload.sub, username: payload.username}
	}
}