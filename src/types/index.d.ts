interface addProductsParam {
  title: string;
  description: string;
  price: string;
  category: string;
  image: string[];
  path: string;
}
interface getAllProductsParams {
  id: string;
  title: string;
  description: string;
  price: string;
  category: string;
  image: string[];
  createdAt: Date;
  updatedAt: Date;
}
