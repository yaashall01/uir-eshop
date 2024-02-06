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

import { ListProductComponent } from './shop/stock/list-product/list-product.component';
import { PackageComponent } from './shop/stock/package/package.component';
import { StocksComponent } from './shop/stock/stocks/stocks.component';
import { StockCategoryComponent } from './shop/stock/stock-category/stock-category.component';
import { StockComponent } from './shop/stock/stock.component';
import { ListWarehouseComponent } from './shop/stock/warehouse/list-warehouse/list-warehouse.component';
import { EditWarehouseComponent } from './shop/stock/warehouse/edit-warehouse/edit-warehouse.component';
import { CreateWarehouseComponent } from './shop/stock/warehouse/create-warehouse/create-warehouse.component';
import { EditProductComponent } from './shop/stock/edit-product/edit-product.component';



const routes: Routes = [
  { path: '', component: HomeComponent,children:[
    {path : 'category', component: CategoryComponent},
    {path : 'variety', component: VarietyComponent},
    {path : 'products', component: ProductsComponent},
    {path : 'orders', component: OrdersComponent},
    {path : 'supplier', component: SuppliersComponent},

    {path : 'delivery', component: DeliveryComponent},
    {path :'addProduct', component:AddProductComponent},

    {path : 'stock', component: StockComponent,children:[
      {path : 'list-werehouse', component: ListWarehouseComponent},
      {path : 'edit-warehouse/:id', component: EditWarehouseComponent},
      {path : 'create-warehouse', component: CreateWarehouseComponent},
      {path : 'list-product', component: ListProductComponent , children:[
        
      ]},
      {path : 'list-product/product-edit/:id', component: EditProductComponent},
      {path : 'list-package', component: PackageComponent},
      {path : 'list-stock', component: StocksComponent},
      {path : 'list-category', component: StockCategoryComponent},

    ]},

  ]
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
