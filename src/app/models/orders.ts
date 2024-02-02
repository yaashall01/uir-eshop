import { Delivery } from "./delivery";

export interface Command {
  id: number;
  quantity: number;
  prix: number;
  produit: string | Product;
}
export interface Product {
  id: number;
  reference: string;
  libelle: string;
  categorieProduitDto: ProductCategory | string;
}

export interface ProductCategory {
  id: number;
  libele: string;
}
export interface Client {
  fullName: string;
  email: string;
  address: string;
  phoneNumber: string;
}

export interface Order {
  id?: number;
  totalPaye: number;
  client: Client | string;
  deliveryPerson: Delivery | string | undefined;
  etatLivraison: "PENDING" | "DELIVERED" | "CANCELLED";
  methodDePaiement: "EN_LIGNE" | "A_LA_LIVRAISON";
  etatPaiement: "PAYE" | "ANNULE" | "EN_ATTENTE";
  commandeItemDtos: Array<Command> | string;
}
export function mapCommandDto(order: Order, stringify = false) {
  if (stringify) {
    // Stringdying
    order.commandeItemDtos = (order.commandeItemDtos as Command[]).map(
      (commandItem) => {
        commandItem.produit = JSON.stringify(commandItem.produit);
        return commandItem;
      }
    );
    order.commandeItemDtos = JSON.stringify(order.commandeItemDtos);
    order.client = JSON.stringify(order.client);
  } else {
    // Parseing
    order.client = JSON.parse(order.client as string);
    order.commandeItemDtos = JSON.parse(
      order.commandeItemDtos as string
    ) as Command[];
    order.commandeItemDtos = order.commandeItemDtos.map((commandItem) => {
      commandItem.produit = JSON.parse(
        commandItem.produit as string
      ) as Product;
      return commandItem;
    });
  }
  return order;
}
export function mapCommandDtos(orders: Array<Order>): Array<Order> {
  return orders
    .map((order) => {
      try {
        return mapCommandDto(order);
      } catch {
        console.log("falid",order);
        return false;
      }
    })
    .filter((order) => {
      if (order == false) {
        return false;
      } else {
        return true;
      }
    }) as Order[];
}
