import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getUsers() {
    return this.usersService.users();
  }

  @Get(':id')
  async getUser(@Param() params: { id: string }) {
    const user = await this.usersService.user(Number(params.id));
    if (user) return user;
    throw new NotFoundException();
  }
}
