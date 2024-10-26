import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class AuthResponseDto {
  @IsString()
  @Expose()
  public token: string;
}
