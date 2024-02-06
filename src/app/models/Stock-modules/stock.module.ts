import { ProductStock } from "./product-stock.module";
import { Warehouse } from "./werehouse.module";

export interface Stock{
  id:number,
  quantity:number,
  productDto:ProductStock,
  warehouseDto:Warehouse
}