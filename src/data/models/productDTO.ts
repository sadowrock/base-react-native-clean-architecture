import { Product } from '../../domain/entities/product';

export class ProductDTO {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  brand: string;
  model: string;
  color: string;
  category: string;
  discount?: number;
  popular?: boolean;
  onSale?: boolean;

  constructor(data: any) {
    this.id  =  data.id;
    this.title = data.title;
    this.image = data.image;
    this.price = data.price;
    this.description = data.description;
    this.brand = data.brand;
    this.model = data.model;
    this.color = data.color;
    this.category = data.category;
    this.discount = data.discount;
    this.popular = data.popular;
    this.onSale = data.onSale;
  }

  toDomain(): Product{
    return new Product({
      id: this.id,
      title: this.title,
      image: this.image,
      price: this.price,
      description: this.description,
      brand: this.brand,
      model: this.model,
      color: this.color,
      category: this.category,
      discount: this.discount,
      popular: this.popular,
      onSale: this.onSale,
    });
  }
}

export interface ProductApiResponse {
  status: string;
  message: string;
  products: ProductDTO[];
}


