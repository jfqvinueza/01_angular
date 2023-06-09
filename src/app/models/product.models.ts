import { CategoryModel } from "./categorymodel";

export interface ProductModel
{
  id: number;
  title: string;
  price: number;
  description: string;
  images:string[]
  category:CategoryModel;
}
export interface CreateProductDto extends Omit<ProductModel, 'id' | 'category'>{
  categoryId:number;
}

//el product model debe de ser parcial
export interface UpdateProductDto extends Partial<ProductModel>{
  categoryId?:number;
}
