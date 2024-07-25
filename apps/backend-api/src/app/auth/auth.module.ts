import { Module } from '@nestjs/common'
import { AuthServices } from './services/auth.services'
import { UserService } from '../users/services/user.service'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { environment } from '../../../environments/environment'


@Module({
	imports: [
		UserService,
		PassportModule.register({defaultStrategy: 'jwt'}),
		JwtModule.register(({
			privateKey: environment.jwt.secret,
			signOptions: {expiresIn: environment.jwt.expiresIn}
		}))
	],
	exports: [],
	providers: [AuthServices]
})
export class AuthModule {

}
