import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Cargo } from 'src/app/models/Stock-modules/cargo.module';
import { Warehouse } from 'src/app/models/Stock-modules/werehouse.module';
import { CargoService } from 'src/app/service/stock-service/cargo.service';
import { WarehouseService } from 'src/app/service/stock-service/werehouse.service';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoComponent {

  warehouses: Warehouse[] = [];

  @Input() newCargo: Cargo = {
      ref: "",
      warehouseId: 0,
      quantity: 0
  };



  @Output() close = new EventEmitter();
  @Output() increment = new EventEmitter();

  ngOnInit() {
      this.warehouseService.getAllWarhouses().subscribe({
          next: (data) => {
              this.warehouses = data;
          },
          error: (err) => console.log(err)
      })
  }

  constructor(private cargoService: CargoService, private warehouseService: WarehouseService, private router: Router) {
  }

  closePopUp() {
      this.close.emit();
  }


  addNewCargo() {
      this.cargoService.newCargo(this.newCargo).subscribe({
          next: (res) => {
              this.increment.emit();
              this.closePopUp();
          }, error: (error) => {
              console.error(error);
          }
      })
  }
}
