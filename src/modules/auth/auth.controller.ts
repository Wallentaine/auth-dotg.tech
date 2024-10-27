import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthResponseDto, CheckAuthDto } from 'src/core';

@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @MessagePattern('auth.check')
  public async authCheck(@Payload() { token }: CheckAuthDto): Promise<AuthResponseDto> {
    return await this.authService.authCheck(token);
  }

  @MessagePattern('auth')
  public async auth(): Promise<AuthResponseDto> {
    return await this.authService.auth();
  }
}
