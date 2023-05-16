import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, response, Response } from 'express';
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

  @Get(':id')
  getUserById(@Req() request: Request, @Res() resonse: Response) {
    console.log(request.params);
    response.send('');
  }
}
