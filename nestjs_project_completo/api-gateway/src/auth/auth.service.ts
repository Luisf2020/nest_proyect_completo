import { Injectable } from "@nestjs/common";

// Mismo tipo literal para asegurar compatibilidad
type Role = 'admin' | 'user';

@Injectable()
export class AuthService {
  // Ahora, register() recibe 'admin' | 'user'
  async register(email: string, password: string, role: Role) {
    // Aquí iría tu lógica de guardado en BD, encriptación, etc.
    // Por ejemplo:
    // const hashedPass = await someHashFunction(password);
    // await this.usersRepository.save({ email, password: hashedPass, role });
    // ...
    return { message: `User created with role: ${role}` };
  }

  async login(email: string, password: string) {
    // Lógica de login...
    return { token: 'JWT_EXAMPLE' };
  }
}
