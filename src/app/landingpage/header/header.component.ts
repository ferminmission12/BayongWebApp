import { Component, OnInit,HostListener } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sideBarOpen: boolean = false;
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
  }
  toggleSideBar() {
  }
}
