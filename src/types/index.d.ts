interface addProductsParam {
  title: string;
  description: string;
  price: number;
  category: string;
  image: string[];
  path: string;
}
interface getAllProductsParams {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string[];
  createdAt: Date;
  updatedAt: Date;
}
