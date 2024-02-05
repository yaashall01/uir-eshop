import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Stock-modules/product.module';
import { ProductService } from 'src/app/service/stock-service/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {

  products: Product[]=[];
  isShown = false;
  newCargo = {
      ref: "",
      warehouseId: 0,
      quantity: 0
  };

  constructor(private productService: ProductService, private router: Router) {
  }

  incrementStocks(){
      this.fetchProducts()
  }

  open(product:any) {
    this.isShown=true;
    this.newCargo={
        ref: product.reference,
        warehouseId: 0,
        quantity: 0
    };
  }
  close() {
      this.isShown=false;
      this.newCargo={
          ref: "",
          warehouseId: 0,
          quantity: 0
      };
  }

  ngOnInit(): void {
      this.fetchProducts()
  }

  fetchProducts(){
      this.productService.getProducts().subscribe((data) => {
          this.products = data;
      });
  }
}
