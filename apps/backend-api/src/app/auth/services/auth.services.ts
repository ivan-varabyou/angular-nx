import {Injectable} from "@nestjs/common";
import {ISignAuthPayload, ISignAuthResponse} from "@angular-nx/shared/data-access/interfaces";
import {UserService} from "../../users/services/user.service";

@Injectable()
export class AuthServices {
    constructor(private readonly userService: UserService) {
    }

    async login(authServicesPayload: ISignAuthPayload): Promise<ISignAuthResponse> {


        return
        // {
        //     accessToken: '44444',
        //     expiresIn: 3600,
        //     id: this.userService.findOneById()
        // }
    }
}
