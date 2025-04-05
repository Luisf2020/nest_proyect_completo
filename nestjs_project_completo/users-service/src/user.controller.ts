import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserService } from './user.service';
import { User, UserRole } from './user.entity';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('CREATE_USER')
  async createUser(@Payload() data: { email: string; password: string; role?: UserRole }): Promise<User> {
    const { email, password, role } = data;
    return this.userService.createUser(email, password, role);
  }

  @MessagePattern('FIND_USER_BY_ID')
  async findUserById(@Payload() data: { id: string }): Promise<User> {
    return this.userService.findUserById(data.id);
  }
}
