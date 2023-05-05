import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { WebRoutingModule } from './web/web-routing.module';
import { NoFoundPagesComponent } from './NoFoundPages/no-found-pages.component';
import { AuthRoutingModuleModule } from './auth/auth-routing.module.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


const routes :Routes =[
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:"dashboard", component:DashboardComponent},
  {path:"**", component:NoFoundPagesComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WebRoutingModule,
    AuthRoutingModuleModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
})
export class AppRoutingModule { }
