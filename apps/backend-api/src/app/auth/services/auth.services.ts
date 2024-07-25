import {Injectable} from "@nestjs/common";
import {ISignAuthPayload, ISignAuthResponse} from "@angular-nx/shared/data-access/interfaces";

@Injectable()
export class AuthServices {
    async login(authServicesPayload: ISignAuthPayload): Promise<ISignAuthResponse> {
        return {
            accessToken: '44444',
            expiresIn: 3600,
            id: 1
        }
    }
}
