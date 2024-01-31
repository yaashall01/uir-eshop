import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home-base/home/home.module';
import { ProductService } from './service/product.service';
import { ShopModule } from './shop/shop.module';




@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    AppRoutingModule,
    HomeModule,
    ShopModule
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
