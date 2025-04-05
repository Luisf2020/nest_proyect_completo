import { Body, Controller, Post, Req, UseGuards, Delete, Param } from "@nestjs/common";


import { ProductsService } from './products.service';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { RolesGuard } from '../guards/roles.guard';
import { Roles } from '../decorators/roles.decorator';
import { UserRole } from '../auth/user-role.interface';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @UseGuards(JwtAuthGuard) // requerimos un token válido
  @Post()
  async createProduct(@Body() body: any, @Req() req: any) {
    const { name, price } = body;
    const userId = req.user.userId; // del payload del token
    return this.productsService.createProduct(name, price, userId);
  }

  // Ejemplo de borrado con rol admin
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    return this.productsService.deleteProduct(id);
  }
}
