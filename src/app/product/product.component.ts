import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Productdetails } from '../models/productdetail.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  vegetableslist:Productdetails[]
  category:string;
  constructor(private productservice:ProductService) { }

  ngOnInit(): void {
    this.getVegetables();
    this.category=this.productservice.category;
  }
  getVegetables(){
    this.productservice.getAllProduct("vegetables").subscribe(
      res=>{
        this.vegetableslist=res as Productdetails[]
        //console.log(this.productlist)
      }
    )
  }

}
