import { ConfigSchema } from '@libs/config';
import { Injectable } from '@nestjs/common';
import { CheckAuthDto } from 'src/core/RequestDto/check-auth.dto';

@Injectable()
export class AuthRepository {
    constructor(
        private readonly config: ConfigSchema
    ) {}
    public create(token: string) {}

    public getOne(sessionId: string): CheckAuthDto {
        return
    }
}
