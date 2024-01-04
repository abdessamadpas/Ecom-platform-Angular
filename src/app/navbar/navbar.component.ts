import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  currentSetion : any;
  isNavbarContentOpen : any;
  openNavbarContent(section:any){
    this.isNavbarContentOpen = true;
    this.currentSetion = section;
  }
  closeNavbarContent(){
    this.isNavbarContentOpen = false;
  }
  

  navigateTo(path:any){}
}
