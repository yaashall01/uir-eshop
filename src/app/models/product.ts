import { Variety } from "./variety"
import { Category } from "./category"
import { Etiquette } from "./etiquette"
import { Supplier } from "./supplier"

export interface Product{
    idProduct:	number;
    nomProduct:	string;
    name:string
    description:	string;
    reference	:string;
    prixProduct:	number;
    category:	Category ;
    supplier: Supplier;
    //etiquettes	: Etiquette[];
    varieties :	Variety[];
    imgs	:string[];
    quantity: number;
    //colors	:string;
    }