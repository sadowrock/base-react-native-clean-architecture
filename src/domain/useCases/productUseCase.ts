import { ProductResponse } from '../entities/product';
import { IProductRepository } from '../repositories/IProductRepository';

class ProductUseCase {
  private productRepository: IProductRepository;

  constructor(productRepository: IProductRepository) {
    this.productRepository = productRepository;
  }

  async execute(): Promise<ProductResponse> {
    try {
      return await this.productRepository.getProducts();
    } catch {
      return {
        status: 'ERROR',
        message: 'Failed to fetch products',
        product: [],
      };
    }
  }
}

export default ProductUseCase;
