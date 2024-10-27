import { HttpException, Injectable, Logger } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { AuthRedisRepository } from './auth.repository';
import { AuthResponseDto } from 'src/core';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthRedisRepository.name);

  constructor(private readonly authRedisRepository: AuthRedisRepository) {}

  public async auth(): Promise<AuthResponseDto> {
    const token: string = uuidv4();
    return await this.authRedisRepository.setAuthCookie(token);
  }

  public async authCheck(token: string): Promise<AuthResponseDto> {
    const authData = await this.authRedisRepository.getAuthCookie(token);
    if (!authData.token) {
      return await this.authRedisRepository.setAuthCookie(token);
    }
    return authData;
  }
}
