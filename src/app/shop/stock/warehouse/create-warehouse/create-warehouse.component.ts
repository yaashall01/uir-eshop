import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Warehouse } from 'src/app/models/Stock-modules/werehouse.module';
import { WarehouseService } from 'src/app/service/stock-service/werehouse.service';

@Component({
  selector: 'app-create-warehouse',
  templateUrl: './create-warehouse.component.html',
  styleUrls: ['./create-warehouse.component.css']
})
export class CreateWarehouseComponent {
  newWarhouse : Warehouse = {id: 0, code: '', address:''};
  constructor(private service : WarehouseService, private router: Router) {}

  addNewWarehouse() {
    this.service.addNewWarehouse(this.newWarhouse).subscribe((res) => {
      this.router.navigate(['/stock/list-werehouse']) 
      console.log(res);
    }, (err) => {
      console.log(err);
    })
  }
}
