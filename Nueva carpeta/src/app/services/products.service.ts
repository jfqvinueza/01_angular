import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CreateProductDto, ProductModel, UpdateProductDto } from '../models/product.models';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {

  readonly API_URL: string = "https://api.escuelajs.co/api/v1/products";

  constructor(private httpClient: HttpClient) { }

  getAll():Observable<ProductModel[]> {
    const url = ${this.API_URL}; 
    return this.httpClient.get<ProductModel[]>(url);
  }
  getOne(id: ProductModel['id']):Observable<ProductModel> {
    const url = ${this.API_URL}/${id};
    return this.httpClient.get<ProductModel>(url);
  }
  //store almacenar, guardar, server, enviar dartos al server
  store(product: CreateProductDto):Observable<ProductModel> {
    const url = ${this.API_URL}; 
    return this.httpClient.post<ProductModel>(url, product)
  }

  update(id: ProductModel['id'], product: UpdateProductDto):Observable<ProductModel> {
    const url = ${this.API_URL}/${id};
    return this.httpClient.put<ProductModel>(url, product);
    //swaguer del server consultar push o put
  }
  //postman verificar el tipo de dato que nos debuelve
  destroy(id: ProductModel['id']):Observable<any> {
    const url = ${this.API_URL}/${id};
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean; }) => {
        return response.rta;
      })
      );
  }
}