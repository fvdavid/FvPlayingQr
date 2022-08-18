export class Menu {
  id?: string;
  title?: string;
  description?: string;
  published?: boolean;
  category?: string;
  imgUrlCategory?: string;
  categoryList?: Product[];
}

export class Product {
  id!: number;
  name?: string;
  price!: number;
  imgUrl?: string;
  description?: string;
  isOnCart?: boolean;
  amount!: number;
}

// export interface Product {
//   id: number;
//   name: string;
//   price: number;
//   amount: number;
// }