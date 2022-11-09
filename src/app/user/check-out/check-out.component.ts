import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/cart.model';
import { ItemService } from 'src/app/item.service';
import { Payment } from './payment.model';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  constructor(private itemService:ItemService,private route:Router) { }

  cart1:Cart=new Cart();
  cart:Cart[]=[];
  data!:any;
  quantity!:number;
  price!:number;
  total=this.quantity*this.price;
  payment:Payment=new Payment();
  ngOnInit(): void 
  {
    this.data=sessionStorage.getItem('SiteName');

     this.itemService.viewItem().subscribe
     (
      data=>
      {
        this.cart=data;
      }
     )
  }
  checkout()
  {
    this.itemService.checkout(this.payment).subscribe(
      data=>
      {
        alert("Checkout");
      },
      error=>
      {
        alert(error);
      }
    )
  }


}
