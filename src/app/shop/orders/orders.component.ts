import { Component, OnInit } from '@angular/core';
import { Client, Command, Order, mapCommandDto } from 'src/app/models/orders';
import { OrderService } from 'src/app/service/order.service';
import { ChangeDetectorRef } from '@angular/core';
import { Delivery } from 'src/app/models/delivery';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  constructor(private orderService: OrderService) {}
    
  // ngOnInit(): void {
  //   this.orderService.getAll().subscribe((orders) => {
  //     console.log("Orders:", orders);

  //     this.orders = orders.map((order: any) => {
  //       // Parse client property
  //       order.client = JSON.parse(order.client);

  //       // Parse commandItems property
  //       order.commandItems = JSON.parse(order.commandItems);
        

  //       return order;
  //     });

  //     console.log("Parsed Orders:", this.orders);

  //     // Now you can access this.orders with parsed data
  //   });
  // }

  ngOnInit(): void {
    this.orderService.getAll().subscribe((orders) => {
      console.log("Orders:", orders);
  
      this.orders = orders.map((order: any) => {
        // Parse client property
        order.client = JSON.parse(order.client);
  
        // Parse commandItems property
        order.commandItems = JSON.parse(order.commandItems);
  
        if (Array.isArray(order.commandItems)) {
          order.commandItems = order.commandItems.map((item: any) => {
            item.produit = this.parseJSONIfDefined(item.produit);
            item.produit.categorieProduitDto = this.parseJSONIfDefined(item.produit.categorieProduitDto);
            return item;
          });
        } else {
          if (order.commandItems.produit) {
            order.commandItems.produit = this.parseJSONIfDefined(order.commandItems.produit);
            order.commandItems.produit.categorieProduitDto = this.parseJSONIfDefined(order.commandItems.produit.categorieProduitDto);
          }
        }
  
        return order;
      });
  
      console.log("Parsed Orders:", this.orders);
    });
  }
  
  private parseJSONIfDefined(value: any): any {
    try {
      // Vérifiez si la valeur est une chaîne avant de tenter de la parser
      if (typeof value === 'string') {
        return JSON.parse(value);
      } else {
        return value;
      }
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return value;
    }
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
