import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'

import { environment } from '../../../environments/environment'
import { AuthService } from './services/auth.service'
import { PasswordService } from './services/password.service'
import { JwtStrategy } from './services/jwt.strategy'
import { AuthResolver } from './resolvers/auth.resolver'
import { UsersModule } from '../users/users.module'

/**
 * Authentication module containing logic for user authentication.
 */
@Module({
	imports: [
		UsersModule, // Import the UsersModule to access user-related functionality.
		PassportModule.register({
			defaultStrategy: 'jwt' // Configure the default authentication strategy.
		}),
		JwtModule.register({
			privateKey: environment.jwt.secret, // Set the JWT secret key.
			signOptions: {
				expiresIn: environment.jwt.expiresIn // Set the token expiration time.
			}
		})
	],
	providers: [AuthService, PasswordService, JwtStrategy, AuthResolver], // Provide
                                                                        // services
                                                                        // and
                                                                        // resolvers.
	exports: [AuthService, PassportModule] // Export AuthService and
	// PassportModule for use in other
	// modules.
})
export class AuthModule {
}
