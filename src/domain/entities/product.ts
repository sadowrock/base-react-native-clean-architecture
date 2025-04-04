export class Product {
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

  constructor(data: Partial<Product>) {
    this.id = data.id ?? 0;
    this.title = data.title ?? '';
    this.image = data.image ?? '';
    this.price = data.price ?? 0;
    this.description = data.description ?? '';
    this.brand = data.brand ?? '';
    this.model = data.model ?? '';
    this.color = data.color ?? '';
    this.category = data.category ?? '';
    this.discount = data.discount;
    this.popular = data.popular;
    this.onSale = data.onSale;
  }
}

export interface ProductResponse {
  status: string;
  message: string;
  product: Product[];
}

export const CategoryColors: Record<string, string> = {
  audio: 'blue',
  gaming: 'red',
  mobile: 'green',
  tv: 'purple',
};
