import { Component, OnInit } from '@angular/core';
import { Client, Command, Order, mapCommandDto } from 'src/app/models/orders';
import { OrderService } from 'src/app/service/order.service';
import { ChangeDetectorRef } from '@angular/core';
import { Delivery } from 'src/app/models/delivery';
import { DeliveryComponent } from '../delivery/delivery.component';
import { DeliveryService } from 'src/app/service/delivery.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  delivery!: Delivery[];
  public displayDeliveryPersonDialog: boolean = false;
public availableDeliveryPersons: Delivery[] = [];
public selectedDeliveryPerson: any;
public valeur!:number

constructor(private orderService: OrderService, private deliveryService: DeliveryService) {}

getDelivery() {
  this.deliveryService.getdelivery().subscribe({
    next: data => {
      this.delivery = data;
      console.log(data);
    },
    error: err => console.log(err)}
  );
}



assignDeliveryPerson(deliveryPersonId: number, orderId: number): void {
  console.log('Assigning delivery person with ID:', deliveryPersonId, 'to order with ID:', orderId);
  this.orderService.assignDelivery(deliveryPersonId,orderId).subscribe(
    (updatedOrder: Order) => {
      console.log('Assignment successful:', updatedOrder);
      // Mettez à jour votre liste d'ordres ou effectuez d'autres actions nécessaires.
    },
    (error) => {
      console.error('Assignment failed:', error);
      // Gérez l'erreur selon vos besoins.
    }
  );
}



getAvailableDeliveryPersons() {
  // Exemple de logique pour récupérer la liste des livreurs
  this.availableDeliveryPersons = this.delivery;
}

showDeliveryPersonDialog(order: number) {
  this.valeur = order;
  // Logique pour initialiser la boîte de dialogue et effectuer d'autres opérations nécessaires
  this.getAvailableDeliveryPersons();
  this.displayDeliveryPersonDialog = true;
  
}
  ngOnInit(): void {
    this.getDelivery();
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
        order.showDetails = false;
        order.showDetails2 = false;
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
  toggleDetails(order: Order): void {
    order.showDetails = !order.showDetails;
  }
  toggleDetails2(order: Order): void {
    order.showDetails2 = !order.showDetails2;
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
        status: "DELIVERED",
        etatPaiement: "PAYE",
      })
      .subscribe(()=>{
				const idx = this.orders.findIndex((order)=>{
					return order.id == id
				})
				this.orders[idx].status = "DELIVERED"
				this.orders[idx].etatPaiement = "PAYE"
				this.orders = this.orders
			});
  }
  markAsCancelled(id: number, order: Order) {
    this.orderService
      .update(id, {
        ...order,
        status: "CANCELLED",
        etatPaiement: "ANNULE",
      })
      .subscribe(()=>{
				const idx = this.orders.findIndex((order)=>{
					return order.id == id
				})
				this.orders[idx].status = "CANCELLED"
				this.orders[idx].etatPaiement = "ANNULE"
				this.orders = this.orders
			});
  }
}
