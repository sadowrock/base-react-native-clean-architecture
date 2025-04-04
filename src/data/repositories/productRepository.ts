import { ProductResponse } from '../../domain/entities/product';
import { IProductRepository } from '../../domain/repositories/IProductRepository';
import { ProductDTO, ProductApiResponse } from '../models/productDTO';
import { getApiUrl, API_CONFIG } from '../../core/config/config';


class ProductRepository implements IProductRepository {
  async getProducts(): Promise<ProductResponse> {
    const url = getApiUrl(API_CONFIG.ENDPOINTS.PRODUCTS);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json() as ProductApiResponse;
    const product = data.products.map((dto: ProductDTO) => dto.toDomain());

    return {
      status: data.status,
      message: data.message,
      product,
    };
  }
}

export default ProductRepository;
