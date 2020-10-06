import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Productdetails } from '../models/productdetail.model';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productlist:Productdetails[];
  navigationSubscription; 
  constructor(private productservice:ProductService,private router:Router) { 
   // subscribe to the router events. Store the subscription so we can
   // unsubscribe later.
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.getSpecificProduct(localStorage.getItem('category'));
      }
    });
  }

  ngOnInit(): void {
    if(localStorage.getItem('token')!=null){
      this.router.navigate(['/product/'], {
        queryParams: {
          category: localStorage.getItem('category')
        },
        queryParamsHandling: 'merge',
      });
    }
    else{
      this.router.navigate(['']);
    }
  }
  
  ngOnDestroy(): void{
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
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
