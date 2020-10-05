import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Productdetails } from '../models/productdetail.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productlist:Productdetails[];
  
  constructor(private productservice:ProductService) { }

  ngOnInit(): void {
  this.getSpecificProduct(this.productservice.category);
  }
  ngOnDestroy(): void{
 }
  getSpecificProduct(category){
    this.productservice.getAllProduct(category).subscribe(
      res=>{
        this.productlist=res as Productdetails[]
        //console.log(this.productlist)
      }
    )
  }



}
