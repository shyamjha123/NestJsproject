import { Injectable } from '@nestjs/common';
import { User } from 'src/services/user.service';
import { authDto } from '../authdto/authdto.dto';
// import { constants } from 'buffer';
@Injectable()
export class authService {
    // 

    public users: authDto[] = [
        {
            name: 'User1',
            password: "12345",
            email: "sjha23234@gmail.com",
            role: "ANDROID_DEVELOPER"

        },
        {
            name: 'User2',
            password: "12345",
            email: "sjha232@gmail.com",
            role: "ANDROID_DEVELOPER"

        },
        {
            name: 'User3',
            password: "12345",
            email: "sjha23254@gmail.com",
            role: "WEB_DEVELOPER"

        }
    ];

    getUserByName(userName: string) {
        return this.users.find((user: authDto) => user.name === userName)

    }
}