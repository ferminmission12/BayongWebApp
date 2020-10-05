import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Productdetail, Productdetails } from '../models/productdetail.model';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {
  vegetableslist:Productdetails[];
  meatlist:Productdetails[];
  seafoodlist:Productdetails[];
  fruitlist:Productdetails[];
  advancedSearch=false;
  constructor(private productservice:ProductService) { }

  ngOnInit(): void {
   this.getAllVegetables();
   this.getAllMeat();
   this.getAllSeafood();
   this.getAllFruit();
  }

  getAllVegetables(){
    this.productservice.getAllProduct("vegetables").subscribe(
      res=>{
        this.vegetableslist=res as Productdetails[]
        //console.log(this.productlist)
      }
    )
  }

  getAllMeat(){
    this.productservice.getAllProduct("meat").subscribe(
      res=>{
        this.meatlist=res as Productdetails[]
        //console.log(this.productlist)
      }
    )
  }

  getAllSeafood(){
    this.productservice.getAllProduct("seafood").subscribe(
      res=>{
        this.seafoodlist=res as Productdetails[]
        //console.log(this.productlist)
      }
    )
  }

  getAllFruit(){
    this.productservice.getAllProduct("fruit").subscribe(
      res=>{
        this.fruitlist=res as Productdetails[]
        //console.log(this.productlist)
      }
    )
  }
}
