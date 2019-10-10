import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  navbar;
  mainnav;
  sticky

  ngOnInit() {
    this.navbar = document.getElementById("navbar");
    this.mainnav = document.getElementById("nav-links");
    this.mainnav.classList.add("py-2");
   this.sticky = this.navbar.offsetTop;
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
  //  console.log($event);
    console.log("scrolling");
      if (window.pageYOffset >= this.sticky) {
    this.navbar.classList.add("sticky");
    this.mainnav.classList.remove("py-2");
    this.mainnav.classList.add("py-0");
  } else {
    this.navbar.classList.remove("sticky");
    this.mainnav.classList.remove("py-0");
    this.mainnav.classList.add("py-2");
  }
  } 

}
