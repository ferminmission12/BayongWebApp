import { Component, OnInit } from '@angular/core';
import { Categorydetail } from 'src/app/models/categorydetail.model';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  yeartoday:number = new Date().getFullYear();
  categorylist:Categorydetail[];
  constructor(private productservice:ProductService, private router:Router) { }

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(){
    this.productservice.getAllCategory().subscribe(
      res=>{
        this.categorylist=res as Categorydetail[]
        //console.log(this.productlist)
      }
    )
  }
  getCategory(name){
    this.productservice.saveCategoryname(name);
    localStorage.setItem('category', name); 
    this.router.navigate(['/product/'], {
     queryParams: {
       category: localStorage.getItem('category')
     },
     queryParamsHandling: 'merge',
   });
 }
}
