import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-base/home/home.component';
import { CategoryComponent } from './shop/category/category.component';
import { VarietyComponent } from './shop/variety/variety.component';
import { ProductsComponent } from './shop/products/products.component';
import { OrdersComponent } from './shop/orders/orders.component';
import { SuppliersComponent } from './shop/suppliers/suppliers.component';
import { DeliveryComponent } from './shop/delivery/delivery.component';
import { AddProductComponent } from './shop/add-product/add-product.component';


const routes: Routes = [
  { path: '', component: HomeComponent,children:[
    {path : 'category', component: CategoryComponent},
    {path : 'variety', component: VarietyComponent},
    {path : 'products', component: ProductsComponent},
    {path : 'orders', component: OrdersComponent},
    {path : 'supplier', component: SuppliersComponent},
    {path : 'delivery', component: DeliveryComponent},
    {path :'addProduct', component:AddProductComponent}
  ]
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
