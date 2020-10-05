import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Productdetail } from '../models/productdetail.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  category:string;
 readonly SERVER_URL=environment.serverurl;

  constructor(private http:HttpClient, private router:Router) { }

  /*This method is allow you to fecth data from the backend*/ 
  getAllProduct(categoryname){
   return this.http.get(this.SERVER_URL+"/ProductDetails/byCategory/"+ categoryname);
  }
  getCategoryname(categoryname){
    this.category=categoryname;
  }

}
