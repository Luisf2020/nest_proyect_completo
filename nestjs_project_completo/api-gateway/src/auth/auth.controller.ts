import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { LoginDto } from '../dto/login.dto';

// Definimos un tipo literal para el rol
type Role = 'admin' | 'user';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    const { email, password, role } = createUserDto;

    // Si role = 'admin', usamos 'admin'. De lo contrario, 'user'.
    // Así tenemos algo de tipo 'admin' | 'user'.
    const finalRole: Role = role === 'admin' ? 'admin' : 'user';

    // authService.register(...) espera un 'admin' | 'user'
    return this.authService.register(email, password, finalRole);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const { email, password } = loginDto;
    return this.authService.login(email, password);
  }
}
