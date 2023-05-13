import { Component, OnInit } from '@angular/core';
import { CreateProductDto, ProductModel, UpdateProductDto } from 'src/app/models/product.models';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
   products:ProductModel[] = [];  //estamos declarando un arreglo vacio 
   selectedProduct: UpdateProductDto = {title:'', price:0, description:''};

  constructor(private productService:ProductService) {
   this.editProduct();
  }

  ngOnInit(): void {
    this.getProducts();
    //this.getProduct();
    //this.createProduct();
    //this.updateProduct();
    //this.deleteProduct();
  }

  getProducts(){
    const url = "https://api.escuelajs.co/api/v1/products";
    //esta invocando al metodo getAll que esta en productservice  el metodo getAll nos esta dando un obserbable
    this.productService.getAll().subscribe(
      response =>{
        this.products = response;
        console.log(response);
      }
    )
  }
  //get Product tiene unos parametros  de tipo Product
  getProduct(id: ProductModel['id'] ){
    const url = "https://api.escuelajs.co/api/v1/products/id";
    return this.productService.getOne(id).subscribe(   //se esta invocando al objeto
      response =>{
        console.log(response);
      }
    )
  }
  //se esta declarando un parametro es lo que esta dentro de las funciones  
  createProduct(product: CreateProductDto){

    this.productService.store(product).subscribe(
      response =>{
        console.log(response);
      }
    )
  }
  // esta declarado dos parametros el primero es el id de tipo productmodel y el otro es parametro product de metodo update
  updateProduct(id: ProductModel['id'], product:UpdateProductDto){
    //esta invocando al metodo de servicio 
    this.productService.update(id, product).subscribe(
      response =>{
        console.log(response);
      }
    )
  }
  //seleccionando el producto para editar
  editProduct(){
    this.selectedProduct = {title:'', price:0, description:''};
  }

  deleteProduct(id: ProductModel['id']){
    //estamos invocando el metodo destroy
    this.productService.destroy(id).subscribe(
      response =>{
        //el metodo filter es filtrar los productos que son diferentes al id que se asigne a poduct y se los muestre en product
        this.products = this.products.filter(product => product.id != id);
        // if (product.id)
        console.log(response);
      }
    )
  }
}
