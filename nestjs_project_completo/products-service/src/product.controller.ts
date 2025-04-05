import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @MessagePattern('CREATE_PRODUCT')
  async createProduct(@Payload() data: { name: string; price: number; userId: string }): Promise<Product> {
    const { name, price, userId } = data;
    return this.productService.createProduct(name, price, userId);
  }

  @MessagePattern('GET_PRODUCTS_BY_USER')
  async getProductsByUser(@Payload() data: { userId: string }): Promise<Product[]> {
    return this.productService.getProductsByUser(data.userId);
  }

  // Para el borrado lo haremos a través del gateway (de forma directa con send)
  // pero también podríamos exponerlo como un MessagePattern
}
