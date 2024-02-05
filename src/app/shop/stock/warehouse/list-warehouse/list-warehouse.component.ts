import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Warehouse } from 'src/app/models/Stock-modules/werehouse.module';
import { WarehouseService } from 'src/app/service/stock-service/werehouse.service';

@Component({
  selector: 'app-list-warehouse',
  templateUrl: './list-warehouse.component.html',
  styleUrls: ['./list-warehouse.component.css']
})
export class ListWarehouseComponent implements OnInit{
  warehouses: Warehouse[] = [];

  constructor(private service: WarehouseService, private router: Router) {}
  ngOnInit(): void {
      this.getAllWarehouses();
  }

  // get All Warehouses
  getAllWarehouses() {
      this.service.getAllWarhouses().subscribe(
          (data) => {
              this.warehouses = data;
              console.log("oui");
              
              console.log(this.warehouses);
          },
          (err) => {
              console.log(err);
          }
      );
  }

  // delete a warehouse
  deleteWarehouse(id: number) {
      const confirmed = window.confirm('Are you sure you want to remove this Warehouse ?');
      if (confirmed) {
          this.service.deleteWarehouse(id).subscribe((res) => {
              console.log(res);
              this.warehouses = this.warehouses.filter((w) => w.id !== id);
          });
          this.router.navigate(['/stock/list-warehouse']);
      }
  }
}
