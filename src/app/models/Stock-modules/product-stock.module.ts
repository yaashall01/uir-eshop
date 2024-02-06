import { Category } from "./categotry.module";


export interface ProductStock{
  id:number,
  reference:string,
  name:string,
  description:string,
  categoryDto:Category,
}