import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {


  }
  setMyStylenew() {
    let newstyles = {
      'background': '#0961f1',
      'background-image': 'url("assets/images/clock-img.jpg"), linear-gradient(#eb01a5, #d13531)',
      'background-repeat': 'no-repeat'

    };
    return newstyles;
  }
  setMyStyle() {
    let styles = {
      'background': '#0961f1',
      'background-image':'url("assets/images/intro-bg.jpg"),linear-gradient(to right, #0961f1 40%, #89CFF0 100%)',
      'background-repeat': 'no-repeat'
    };
    return styles;
  }
}
