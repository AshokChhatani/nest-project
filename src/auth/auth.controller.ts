import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './login.dto';
@Controller('auth')
export class AuthController {
  constructor(private AuthService: AuthService) {}

  @Get()
  getUsers() {
    return this.AuthService.getUsers();
  }

  @Post()
  Login(@Body() LoginDto: LoginDto) {
    const data = this.AuthService.Login(LoginDto);
    return data;
  }
}
