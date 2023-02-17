import { Controller, Req, Res} from "@nestjs/common";
import { Response, Request } from "express";
import { AuthService } from "./auth.service";


@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService
    ) {
    }


    login(@Req() req: Request, @Res() res: Response) {

    }

    logout(@Req() req: Request, @Res() res: Response) {

    }
}