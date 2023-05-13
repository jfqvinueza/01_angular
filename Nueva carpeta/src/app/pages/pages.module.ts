import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [
        DashboardComponent,
        ProductComponent,
        CategoriesComponent,
        PagesComponent
    ],
    exports: [
        DashboardComponent,
        ProductComponent,
        CategoriesComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule
    ]
})
export class PagesModule { }
