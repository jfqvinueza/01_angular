import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { ContactComponent } from "./contact/contact.component";
import { Routes,RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { WebComponent } from "./web.component";
import { NoFoundPageComponent } from "../noFoundPage/no-found-page.component";



const routes: Routes = [
    {path:'home', component:WebComponent,
        children:[
            {path:'',component:HomeComponent},
            {path:'about',component:AboutComponent},
            {path:'contact',component:ContactComponent},
            {path:'products',component:ProductsComponent},
            { path:'', redirectTo:'/home', pathMatch:'full'}
        ]},

        //{path: '**', component:NoFoundPageComponent}
]


@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ], exports:[
      RouterModule
    ]
    
  })
  export class WebRoutingModule { }