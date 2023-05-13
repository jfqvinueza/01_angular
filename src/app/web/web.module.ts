import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AppComponent } from '../app.component';
import { AppModule } from '../app.module';
import { WebComponent } from './web.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ContactComponent,
    WebComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ContactComponent,
  ],
})
export class WebModule { }
