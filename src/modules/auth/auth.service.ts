import { Injectable } from '@nestjs/common';
import { CheckAuthDto } from 'src/core/RequestDto/check-auth.dto';
import { AuthResponseDto } from 'src/core/ResponseDto/auth-response.dto';
import { v4 as uuidv4 } from 'uuid';
import { AuthRepository } from './auth.repository';

@Injectable()
export class AuthService {
    constructor(
        private readonly authRepository: AuthRepository
    ) {}
    public auth(): AuthResponseDto {
        const token: string = uuidv4()
        const newSessionData: any = this.authRepository.create(token)
        return Object.assign(newSessionData, AuthResponseDto)
    }

    public authCheck(token: string): CheckAuthDto {
        return this.authRepository.getOne(token)
    }
}
