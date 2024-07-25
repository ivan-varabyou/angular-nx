import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'

import { UserService } from '../users/services/user.service'
import { AuthServices } from './services/auth.services'
import { environment } from '../../../environments/environment'
import { PasswordService } from './services/password.service'
import { JwtStrategy } from './services/jwt.strategy'
import { AuthResolver } from './resolvers/auth.resolver'


@Module({
	imports: [
		UserService,
		PassportModule.register({defaultStrategy: 'jwt'}),
		JwtModule.register(({
			privateKey: environment.jwt.secret,
			signOptions: {expiresIn: environment.jwt.expiresIn}
		}))
	],
	providers: [AuthServices, PasswordService, JwtStrategy, AuthResolver],
	exports: [AuthServices, PassportModule]
})
export class AuthModule {

}
