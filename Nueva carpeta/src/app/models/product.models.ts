import { CategoryModel } from "./categoy.models";

export interface ProductModel{
    id:number;
    title:string;
    price:number;
    description:string;
    images:string;
    category:CategoryModel;
}

/*
categoria 1
productos n: fk de categoria
*/

export interface CreateProductDto extends Omit<ProductModel, 'id' | 'category'>{
    categoryId:number;
}
export interface UpdateProductDto extends Partial<ProductModel>{
    categoryId?:number;
}