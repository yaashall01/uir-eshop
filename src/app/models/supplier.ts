import { ProductObject } from "./productOjbect";
import { Product } from "./product";

export interface Supplier{
idSupplier:	number;
nomSupplier: string;
mail: string;
rib: string;
phoneNumber: string;
products: ProductObject[];

}