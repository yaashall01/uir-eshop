import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from 'src/app/models/Stock-modules/stock.module';
import { StockService } from 'src/app/service/stock-service/stock.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit{
  listStocks: Stock[] = [];
  constructor(private service: StockService, private router: Router) {}

  ngOnInit(): void {
      this.getAllStocks();
  }

  getAllStocks() {
      this.service.getStocks().subscribe((data) => {
          this.listStocks = data;
      });
  }

  deleteStock(id : number) {
    const confirmed = window.confirm('Are you sure you want to remove this Stock ?');
    if(confirmed) {
      this.service.deleteStock(id).subscribe((data) => {
        console.log(data);
      })
      this.listStocks = this.listStocks.filter((stock) => stock.id !== id)

      this.router.navigate(["/stock/list-stock"])
    }

  }
}
