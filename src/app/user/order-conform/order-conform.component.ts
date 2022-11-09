import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-conform',
  templateUrl: './order-conform.component.html',
  styleUrls: ['./order-conform.component.css']
})
export class OrderConformComponent implements OnInit {

  constructor() { }
 data!:any;
  ngOnInit(): void {
    this.data=sessionStorage.getItem('SiteName');
  }

}
