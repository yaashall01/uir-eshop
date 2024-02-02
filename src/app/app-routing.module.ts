import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-base/home/home.component';
import { CategoryComponent } from './shop/category/category.component';
import { VarietyComponent } from './shop/variety/variety.component';
import { ProductsComponent } from './shop/products/products.component';
import { OrdersComponent } from './shop/orders/orders.component';
import { SuppliersComponent } from './shop/suppliers/suppliers.component';


const routes: Routes = [
  { path: '', component: HomeComponent,children:[
    {path : 'category', component: CategoryComponent},
    {path : 'variety', component: VarietyComponent},
    {path : 'products', component: ProductsComponent},
    {path : 'orders', component: OrdersComponent},
    {path : 'supplier', component: SuppliersComponent},
  ]
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
