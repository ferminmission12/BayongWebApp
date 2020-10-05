import { Component, OnInit,HostListener } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Categorydetail } from 'src/app/models/categorydetail.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sideBarOpen: boolean = false;
  categorylist:Categorydetail[];
  constructor(private productservice:ProductService) { }

  @HostListener('click', ['$event.target.id'])onClick(id: any) {
    if (id == "collapseBtn") {
      if (this.sideBarOpen) {
        document.getElementById('responsive-nav').classList.remove('showsidebar');
        this.sideBarOpen=false;
     }else{
      document.getElementById('responsive-nav').classList.add('showsidebar');
      this.sideBarOpen = true;
     }    
    } else {
    
    }
  }
 
  ngOnInit(): void {
    this.getCategories();
  }
  toggleSideBar() {
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
     console.log(name)
     this.productservice.saveCategoryname(name);
  }
}
