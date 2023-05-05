import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WebModule } from './web/web.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { WebRoutingModule } from './web/web-routing.module';
import { PagesComponent } from './pages/pages.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProductsComponent } from './pages/products/products.component';
import { NoFoundPagesComponent } from './NoFoundPages/no-found-pages.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    CategoryComponent,
    ProductsComponent,
    NoFoundPagesComponent
  ],
  imports: [
    BrowserModule,
    WebModule,
    SharedModule, 
    AppRoutingModule,
    RouterModule,
    WebRoutingModule
  ],
  exports:[WebModule, SharedModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
