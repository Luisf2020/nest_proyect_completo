import { IsEmail, IsEnum, MinLength } from 'class-validator';
import { UserRole } from '../auth/user-role.interface';

export class CreateUserDto {
  @IsEmail()
  email!: string;

  @MinLength(6)
  password!: string;

  @IsEnum(UserRole)
  role!: UserRole;
}
