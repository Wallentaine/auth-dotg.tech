import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { AuthRedisRepository } from './auth.repository';
import { AuthResponseDto, CheckAuthResponseDto } from 'src/core';

@Injectable()
export class AuthService {
    constructor(
        private readonly authRedisRepository: AuthRedisRepository
    ) {}
    
    public async auth(): Promise<AuthResponseDto> {
        const uid: string = uuidv4()
        return this.authRedisRepository.setAuthCookie(uid)
    }

    public async authCheck(uid: string): Promise<CheckAuthResponseDto | null> {
        return await this.authRedisRepository.getAuthCookie(uid)
    }
}
