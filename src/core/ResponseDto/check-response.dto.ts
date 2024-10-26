import { Expose } from "class-transformer";
import { IsString } from "class-validator";

export class CheckAuthResponseDto {
    @IsString()
    @Expose()
    public sessionToken: string
}
