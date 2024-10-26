import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthResponseDto, CheckAuthDto, CheckAuthResponseDto } from 'src/core';

@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @MessagePattern('auth.check')
  public async authCheck(@Payload() { uid }: CheckAuthDto): Promise<CheckAuthResponseDto | null> {
    return await this.authService.authCheck(uid);
  }

  @MessagePattern('auth')
  public async auth(): Promise<AuthResponseDto> {
    return await this.authService.auth();
  }
}
