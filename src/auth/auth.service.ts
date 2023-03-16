import { HttpException, Injectable } from '@nestjs/common';
import { Users } from './auth.mock';

@Injectable()
export class AuthService {
  Users = Users;
  getUsers = () => this.Users;
  Login = (User) => {
    const UserData = this.Users.find(
      (i) => i.name === User.name && i.password === User.password,
    );
    if (UserData) {
      return UserData;
    }
    throw new HttpException('Invalid Username or Password', 404);
  };
}
