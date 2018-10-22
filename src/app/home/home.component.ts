import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  latitude = 46.9658932;
  longitude = 32.0035416;
  zoom = 15;

  constructor() { }

  ngOnInit() {
  }

}
