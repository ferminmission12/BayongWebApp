import { Categorydetail } from './categorydetail.model';

export class Productdetail {
    productId:number;
    name:string;
    price: number;
    sku:string;
    description:string;
    image:string;
    categoryId:number;
    quantity:number;
}
export class Productdetails extends Productdetail {
    categoryDetails:Categorydetail;
}