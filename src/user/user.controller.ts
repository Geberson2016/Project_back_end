import { Body, Controller, Post } from '@nestjs/common';
import { User as UserModel, Prisma } from '@prisma/client';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }

  @Post('signup')
  async signupUser(
    @Body() userData: Prisma.UserCreateInput,
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }
}
