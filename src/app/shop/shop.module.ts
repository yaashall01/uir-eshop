import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { TreeTableModule } from 'primeng/treetable';
import { ToolbarModule } from 'primeng/toolbar';
import { VarietyComponent } from './variety/variety.component';
import { AddProductComponent } from './add-product/add-product.component';
import { OrdersComponent } from './orders/orders.component';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { DeliveryComponent } from './delivery/delivery.component';

@NgModule({
  declarations: [  
    ProductsComponent,
    CategoryComponent,
    
    VarietyComponent,
    AddProductComponent,
    OrdersComponent,
    SuppliersComponent,
    DeliveryComponent
    ],
  imports: [
    CommonModule,
    TableModule,
    FileUploadModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    ToastModule,
    ToolbarModule,
    RatingModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    RadioButtonModule,
    InputNumberModule,
    DialogModule,
    ReactiveFormsModule,
    TreeTableModule,
    TagModule,
    BrowserModule,
    TableModule,

  ]
})
export class ShopModule { }
