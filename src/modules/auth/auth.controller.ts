import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CheckAuthDto } from 'src/core/RequestDto/check-auth.dto';
import { CheckAuthResponseDto } from 'src/core/ResponseDto/check-response.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthResponseDto } from 'src/core/ResponseDto/auth-response.dto';

@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @MessagePattern('auth.check')
  public authCheck(@Payload() checkPayload: CheckAuthDto): CheckAuthResponseDto {
    return this.authService.authCheck(checkPayload.sessionToken);
  }

  @MessagePattern('auth')
  public auth(): AuthResponseDto {
    return this.authService.auth();
  }
  
}
