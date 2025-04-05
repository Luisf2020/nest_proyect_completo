import { Injectable, Inject, NotFoundException } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCTS_SERVICE') private productsClient: ClientProxy,
  ) {}

  createProduct(name: string, price: number, userId: string) {
    return this.productsClient.send('CREATE_PRODUCT', { name, price, userId }).toPromise();
  }

  getProductsByUser(userId: string) {
    return this.productsClient.send('GET_PRODUCTS_BY_USER', { userId }).toPromise();
  }

  async deleteProduct(productId: string) {
    // Aquí no tenemos un MessagePattern explicitado, pero podríamos crear uno
    // o directamente hacer un endpoint en products-service. Para ejemplo:
    // Lo haremos con un pattern 'DELETE_PRODUCT'
    return this.productsClient.send('DELETE_PRODUCT', { productId }).toPromise();
  }
}
