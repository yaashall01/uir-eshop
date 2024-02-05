import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/service/stock-service/category.service';
import { ProductService } from 'src/app/service/stock-service/product.service';
import { StockService } from 'src/app/service/stock-service/stock.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  updatedproduct:any;
  categoryDto:any
  stockDtos:any

  constructor(private updateService:ProductService, private stockService:StockService, private route: ActivatedRoute, private router: Router, private categoryService:CategoryService){}

  ngOnInit():void{
    this.categoryService.getcategory().subscribe({
      next:(data)=>{
        this.categoryDto=data;
      }
    }
    )
    this.stockService.getStocks().subscribe({
      next:(data)=>{
        this.stockDtos=data;
      }
    })

    this.route.paramMap.subscribe({
      next: (params) => {
        const id:any = params.get('id');
        if (id) {
          this.updateService.getProductById(id).subscribe({
            next: (response) => {
              console.log(response);
              this.updatedproduct = response;
            }
          })
        }
      }
    })
  }

  updateProduct(){
    return this.updateService.updateProduct(this.updatedproduct).subscribe({
      next:(p)=>{
        console.log('Le produit '+p.name+' a été modifié avec succès !');
        this.router.navigate(['stock/products']);
      },
      error: (error) =>{
        console.log('Erreur lors de la mise à jour du produit', error);
      }
    })
  }
  deleteProduct(id: any) {
    this.updateService.deleteProduct(id).subscribe({
      next: (dp) => {
        console.log(dp);
        this.router.navigate(['stock/products']);
      },
    })
  }
}
