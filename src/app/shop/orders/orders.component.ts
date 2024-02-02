import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/orders';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private orderService: OrderService) {}
    orders: Order[] = [];
  ngOnInit(): void {
    this.orderService.fecthAll().subscribe((orders) => {
      this.orders = orders;
    });
  }
  getSeverity(status: string) {
    switch (status) {
      case "CANCELLED":
      case "ANNULE":
        return "danger";
      case "PENDING":
      case "EN_ATTENTE":
      case "A_LA_LIVRAISON":
        return "warning";
      case "EN_LIGNE":
      case "DELIVERED":
      case "PAYE":
        return "success";
    }
    return undefined;
  }
  

  markAsDelivered(id: number, order: Order) {
    this.orderService
      .update(id, {
        ...order,
        etatLivraison: "DELIVERED",
        etatPaiement: "PAYE",
      })
      .subscribe(()=>{
				const idx = this.orders.findIndex((order)=>{
					return order.id == id
				})
				this.orders[idx].etatLivraison = "DELIVERED"
				this.orders[idx].etatPaiement = "PAYE"
				this.orders = this.orders
			});
  }
}
