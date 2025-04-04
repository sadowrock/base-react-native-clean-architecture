import { ProductResponse } from '../entities/product';

export interface IProductRepository {
  getProducts(): Promise<ProductResponse>;
}
