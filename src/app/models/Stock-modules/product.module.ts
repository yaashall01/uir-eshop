import { Category } from "./categotry.module";
import { Stock } from "./stock.module";

export interface Product{
  id:number,
  reference:string,
  name:string,
  description:string,
  categoryDto:Category,
  stockDtos:Stock[],
}