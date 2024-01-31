import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { Supplier } from 'src/app/models/supplier';
import { Variety } from 'src/app/models/variety';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';
import { SupplierService } from 'src/app/service/supplier.service';
import { VarietyService } from 'src/app/service/variety.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  implements OnInit{
    products!: Product[];
    Suppliers!: Supplier[];
    Categories! : Category[];
    Varieties! : Variety[];
    visible: boolean = false;
    isEditing : boolean = false ;
    productForm!: FormGroup;

    toggleModal() {
      this.visible = !this.visible;
    }
    
    closeModal() {
      this.visible = false;
      this.isEditing = false;
    
    }

    constructor(private productService: ProductService , private supplierService : SupplierService, private  categoryService : CategoryService, private varietyService: VarietyService,
      private fb : FormBuilder) {}

    ngOnInit() {
   this.getAllProduct();
   this.getAllSupplier();
   this.getVarietys();
   this.getAllProduct();

   this.productForm = this.fb.group({
    nomProduct:['', [Validators.required]],
    reference:['', [Validators.required]],
    description:['', [Validators.required]],
    prixProduct:['', [Validators.required]],
    category:['', [Validators.required]],
    supplier:['', [Validators.required]],
    varieties:['', [Validators.required]],
    quantity:['', [Validators.required]],
    imgs:['', [Validators.required]],
  });

}
    

    getAllProduct() {
      this.productService.getAll().subscribe(
        (data)=>{
          this.products = data
          console.log(data)
      })
    }
    getAllSupplier() {
      this.supplierService.getSupplier().subscribe( {
        next: (data: Supplier[]) => {
            this.Suppliers = data;
            //console.log(data);
        },
        error: (err: any) => console.log(err)}
      );
    }
    
    getAllCategory() {
      this.categoryService.getAll().subscribe(
        (data)=>{
          this.Categories = data
      })
    }
    getVarietys(){
      this.varietyService.get().subscribe( {
       next: (data: Variety[]) => {
           this.Varieties = data;
           console.log(data);
       },
       error: (err: any) => console.log(err)}
     );
   }


   addProduct(){}
   updateProduct(){}
}