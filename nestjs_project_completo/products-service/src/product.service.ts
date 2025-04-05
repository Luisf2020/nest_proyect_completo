import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from './product.entity';
import { 
  ClientProxy, 
  ClientProxyFactory, 
  Transport, 
  ClientOptions 
} from '@nestjs/microservices';
import 'dotenv/config';

@Injectable()
export class ProductService {
  private userClient: ClientProxy;

  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {
    // 1. Preparamos la configuración para NATS
    const natsConfig: ClientOptions = {
      transport: Transport.NATS,
      options: {
        // Si NATS_URL no está definido, se usa localhost por defecto
        servers: [process.env.NATS_URL ?? 'nats://localhost:4222'],
      },
    };

    // 2. Creamos el client proxy
    this.userClient = ClientProxyFactory.create(natsConfig);
  }

  async createProduct(name: string, price: number, userId: string): Promise<Product> {
    // 1. Validar que el usuario exista en el microservicio de usuarios
    const user = await this.userClient
      .send('FIND_USER_BY_ID', { id: userId })
      .toPromise(); 
      // En Nest 9+/RxJS 7+ podrías usar: 
      //   const user = await lastValueFrom(
      //     this.userClient.send('FIND_USER_BY_ID', { id: userId })
      //   );

    if (!user) {
      throw new NotFoundException('User does not exist');
    }

    // 2. Validar lógica de negocio y crear el producto
    if (price <= 0) {
      throw new BadRequestException('Price must be greater than 0');
    }

    const product = this.productRepository.create({ name, price, userId });
    return this.productRepository.save(product);
  }

  async getProductsByUser(userId: string): Promise<Product[]> {
    return this.productRepository.find({ where: { userId } });
  }

  async deleteProductById(productId: string): Promise<void> {
    const result = await this.productRepository.delete(productId);
    if (result.affected === 0) {
      throw new NotFoundException('Product not found');
    }
  }
}
