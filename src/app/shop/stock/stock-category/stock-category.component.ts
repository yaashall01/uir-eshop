import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Category } from 'src/app/models/Stock-modules/categotry.module';
import { CategoryService } from 'src/app/service/stock-service/category.service';

@Component({
  selector: 'app-stock-category',
  templateUrl: './stock-category.component.html',
  styleUrls: ['./stock-category.component.css']
})
export class StockCategoryComponent implements OnInit{
  private id: number | undefined;
  constructor(private categoryService: CategoryService, private fb: FormBuilder) {
  }

  Category: any;
  label_update?: String;
  showCategoryModal = false;
  showCategoryModalUpdate = false;
  public ProductForm!: FormGroup;
  // public ProductFormpupdate!: FormGroup;
  ngOnInit(): void {
      this.ProductForm = this.fb.group(
          {
              id:[this.id],
              label: [this.label_update]
          }
      );
     this.getdata();


  }
  getdata(){
      this.Category = this.categoryService.getcategory().subscribe(
          {
              next: (resp) => {
                  this.Category = resp.body as Category[];
                  console.log(this.Category)

              },
              error: (err: any) => {
                  console.log(err)
              }
          }
      )
  }


  toggleCategoryModal(category?: Category) {
      this.id=category?.id;
      this.label_update =category?.label;
      this.ProductForm.patchValue({
          id:category?.id,
          label: category?.label
      });
      console.log(category)
      this.showCategoryModalUpdate =!this.showCategoryModalUpdate;
  }


  saveProduct() {
      let category: Category = this.ProductForm.value;
      console.log(category);
      this.categoryService.Savecategory(category).subscribe(
          {
              next: (data: any) => {
                  this.showCategoryModal =!this.showCategoryModal;
                  this.getdata();

              },
              error: (err: any) => {
                  console.log(err)
              }
          }
      );

  }


  UpdateCategory(id:number) {
      let category: Category = this.ProductForm.value;
      console.log(category);

      this.categoryService.Updatecategory(category).subscribe(
          {
              next: (data: any) => {
                  this.showCategoryModalUpdate =!this.showCategoryModalUpdate;
                  this.getdata();

              },
              error: (err: any) => {
                  console.log(err)
              }
          }
      );
  }

  toggleCategoryModalSave() {
      this.showCategoryModal=!this.showCategoryModal;

  }
}
