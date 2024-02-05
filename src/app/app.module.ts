import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home-base/home/home.module';
import { ProductService } from './service/product.service';
import { ShopModule } from './shop/shop.module';
import { TreeTableModule } from 'primeng/treetable'; // Assurez-vous d'importer TreeTableModule
import { StockComponent } from './shop/stock/stock.component';
import { FormsModule } from '@angular/forms';
import { EditProductComponent } from './shop/stock/edit-product/edit-product.component';
import { CreateWarehouseComponent } from './shop/stock/warehouse/create-warehouse/create-warehouse.component';
import { ListWarehouseComponent } from './shop/stock/warehouse/list-warehouse/list-warehouse.component';
import { RouterModule } from '@angular/router';
import { EditWarehouseComponent } from './shop/stock/warehouse/edit-warehouse/edit-warehouse.component';






@NgModule({
  declarations: [
    AppComponent,
    EditProductComponent,
    CreateWarehouseComponent,
    EditProductComponent,
    EditWarehouseComponent
  
  ],
  imports: [
    AppRoutingModule,
    TreeTableModule,
    FormsModule,
    HomeModule,
    ShopModule,
    RouterModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
