import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-base/home/home.component';
import { ProductComponent } from './shop/product/product.component';
import { CategoryComponent } from './shop/category/category.component';
import { VarietyComponent } from './shop/variety/variety.component';
import { ProductsComponent } from './shop/products/products.component';


const routes: Routes = [
  { path: '', component: HomeComponent,children:[
    {path : 'product', component: ProductComponent},
    {path : 'category', component: CategoryComponent},
    {path : 'variety', component: VarietyComponent},
    {path : 'products', component: ProductsComponent},
  ]
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
