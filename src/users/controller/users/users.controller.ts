import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from '../../dtos/CreateUser.dto';
@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return { username: 'Marat', email: 'sahakyanmarat747@mail.ru' };
  }

  @Post('create')
  createUser(@Body() userData: CreateUserDto) {
    console.log('userData', userData);
    return {};
  }
}
