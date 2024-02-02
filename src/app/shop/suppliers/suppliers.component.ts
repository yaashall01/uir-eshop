import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { ProductObject } from 'src/app/models/productOjbect';
import { Supplier } from 'src/app/models/supplier';
import { ProductService } from 'src/app/service/product.service';
import { SupplierService } from 'src/app/service/supplier.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit{
  suppliers:Array<Supplier>=[];
  products:Array<Product>=[]
  public supplierForm!:FormGroup;

  constructor(private supplierService:SupplierService,private fb: FormBuilder, private productService:ProductService) { }

  ngOnInit(): void {
    this.supplierForm = this.fb.group({
      nomSupplier: ['', [Validators.required]],
      mail: ['', [Validators.required]],
      rib: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      products: ['', [Validators.required]]
    });
    //console.log('Initial form validity:', this.supplierForm.valid);
    this.getSupplier();
    this.getAllProduct();
  }
  getAllProduct() {
    this.productService.getAll().subscribe(
      (data)=>{
        this.products = data
        //console.log(data)
    })
  }


  
  visible: boolean = false;
  isEditing : boolean = false 
  toggleModal() {
    this.visible = !this.visible;
  }
  
  closeModal() {
    this.visible = false;
    this.isEditing = false;
    this.supplierForm.reset();
  }
  

   getSupplier() {
    this.supplierService.getSupplier().subscribe( {
      next: data => {
          this.suppliers = data;
          //console.log(data);
      },
      error: err => console.log(err)}
    );
  }


  addSupplier() {
    console.log('Form is valid:', this.supplierForm.valid);
    if (this.supplierForm.valid) {
        const newSupplier: Supplier = {
          idSupplier: 0, // Set a temporary value or handle it on the server
          nomSupplier: this.supplierForm.value.nomSupplier,
          mail: this.supplierForm.value.mail,
          rib:this.supplierForm.value.rib,
          phoneNumber:this.supplierForm.value.phoneNumber,
          products:this.supplierForm.value.products


        };

      this.supplierService.createSupplier(newSupplier).subscribe(
        (addSupplier) => {
          this.suppliers.push(addSupplier);
          // Reset the form after adding the Supplier
          this.supplierForm.reset();
          this.closeModal()
        },
        (error) => {
          console.error('Error adding Supplier:', error);
        }
      );
    }
  }

  deleteSupplier(id: number) {
    if (id !== undefined) {
      this.supplierService.deleteSupplier(id).subscribe(() => {
        this.suppliers = this.suppliers.filter(suppliers => suppliers.idSupplier !== id);
      });
    }}
    
    editSupplier(supplier: Supplier) {
      this.selectedSupplierId = supplier.idSupplier;
      this.isEditing = true;
      // Set the selected products in the form based on the supplier's products
      this.supplierForm.patchValue({
        nomSupplier: supplier.nomSupplier,
        mail: supplier.mail,
        rib: supplier.rib,
        phoneNumber: supplier.phoneNumber,
        //products: this.tOproductObject(supplier.products)
        products: this.tOproductObject(this.supplierForm.value.products)
      });
    
      this.toggleModal();
    }
    tOproductObject(list:number[]) :ProductObject[]
    {
      const newlist:ProductObject[] = [];
      for (let i = 0; i < list.length; i++) {
        const obj = {idProduct:list[i]};
        newlist.push(obj); 
      }
      return newlist;
    }

    onChangePrdSelected(event: any) {
  console.log(this.tOproductObject(this.supplierForm.value.products));
  
    }


selectedSupplierId: number | null = null; 
updateSupplier() {
  const updatedobject:Supplier = {idSupplier:this.supplierForm.value.idSupplier,
    nomSupplier: this.supplierForm.value.nomSupplier,
    mail: this.supplierForm.value.mail,
    rib:this.supplierForm.value.rib,
    phoneNumber:this.supplierForm.value.phoneNumber,
    products:this.tOproductObject(this.supplierForm.value.products)
  
  };
  console.log("string", this.selectedSupplierId, updatedobject, this.suppliers);
  
  if (this.selectedSupplierId && this.supplierForm.valid) {

    this.supplierService.updateSupplier(this.selectedSupplierId,updatedobject).subscribe(
      (res) => {
        console.log('API Response:', res);
        const idx = this.suppliers.findIndex((supplier) => supplier.idSupplier === res.idSupplier);
        this.suppliers[idx] = res;
        this.supplierForm.reset();
        this.selectedSupplierId = null; // Clear the selectedSupplierId
        this.closeModal();
      },
      (error) => {
        console.error('Error updating Supplier:', error);
      }
    );
  }
}


}
