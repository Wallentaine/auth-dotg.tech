import { IsString } from 'class-validator';

export class CheckAuthDto {
  @IsString()
  public token: string;
}
