import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { Supplier } from 'src/app/models/supplier';
import { Variety } from 'src/app/models/variety';
import { ProductService } from 'src/app/service/product.service';
import { CategoryService } from "src/app/service/category.service";
import { VarietyService } from "src/app/service/variety.service";
import { SupplierService } from "src/app/service/supplier.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [MessageService]

})
export class ProductsComponent implements OnInit{
    isUpdated: boolean = false;
    isCreateNewProduct: boolean = false;
    products!: Product[] ;
    Categories!: Category[];
    Suppliers!: Supplier[];
    Varieties!: Variety[];
    public ProductForm!:FormGroup;
  
    visible: boolean = false;
    isEditing : boolean = false 
    toggleModal() {
      this.visible = !this.visible;
    }
    
    closeModal() {
      this.visible = false;
      this.isEditing = false;
      this.ProductForm.reset();
    }
    constructor(public productService: ProductService,private fb: FormBuilder,private CategoryService:CategoryService , private SupplierService:SupplierService , private VarietyService:VarietyService){
  
    }
    ngOnInit(): void {
      this.getAllCategory();
      this.getAllSupplier();
      this.getVarietys();
      this.getAllProduct();
      this.ProductForm = this.fb.group({
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
    toggleUpdate(){
      this.isUpdated = !this.isUpdated;
    }
    toggleCreateProduct(){
      this.isCreateNewProduct = !this.isCreateNewProduct;
    }
    getAllProduct() {
      this.productService.getAll().subscribe(
        (data)=>{
          this.products = data
          console.log(data)
      })
    }
    getAllSupplier() {
      this.SupplierService.getSupplier().subscribe( {
        next: (data: Supplier[]) => {
            this.Suppliers = data;
            //console.log(data);
        },
        error: (err: any) => console.log(err)}
      );
    }
  
    getAllCategory() {
      this.CategoryService.getAll().subscribe(
        (data)=>{
          this.Categories = data
      })
    }
    getVarietys(){
      this.VarietyService.get().subscribe( {
       next: (data: Variety[]) => {
           this.Varieties = data;
           console.log(data);
       },
       error: (err: any) => console.log(err)}
     );
   }
    deleteProduct(id: number) {
      if (id !== undefined) {
        this.productService.delete(id).subscribe(() => {
          this.products = this.products.filter(product => product.idProduct !== id);
        });
      }}
  
      editProduct(product: Product) {
        this.isEditing = true;
        this.selectedProductId=product.idProduct
  
        this.ProductForm.patchValue({
          nomProduct: product.nomProduct,
          description: product.description,
          reference: product.reference,
          prixProduct: product.prixProduct,
          category: product.category,
          supplier: product.supplier,
          varieties: product.varieties,
          quantity: product.quantity,
          imgs: product.imgs
  
          
        });
        this.toggleModal();
      }
  
  
  selectedProductId: number | null = null; 
  
  
  updateProduct() {
  console.log("string", this.selectedProductId, this.ProductForm.value, this.products)
  if (this.selectedProductId) {
    this.productService.update(this.selectedProductId, this.ProductForm.value).subscribe(
      (res) => {
        console.log('API Response:', res);
        const idx = this.products.findIndex((product)=>{
          return product.idProduct== res.idProduct
        })  
        this.products[idx]=res
        this.ProductForm.reset();
        this.closeModal(); 
      },
      (error) => {
        console.error('Error updating product:', error);
      }
    );
  }
  }
  
      
  }