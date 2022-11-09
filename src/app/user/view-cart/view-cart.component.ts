import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Cart } from 'src/app/cart.model';
import { Item } from 'src/app/item.model';
import { ItemService } from 'src/app/item.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {
  id: any;

  constructor(private itemService:ItemService,private router:Router,private active:ActivatedRoute) { }
  cart:Cart=new Cart();
  item:Cart[]=[];
  item1:Item=new Item();
  skuId!:any;
  data!:any;
  ngOnInit(): void 
  {
    this.data=sessionStorage.getItem('SiteName');

    this.itemService.viewItem().subscribe
    (
      data=>
      {
        this.item=data;
      }
    ),
    this.active.params.subscribe
   (
    data=>
    {
      this.skuId=data["skuId"];
      this.id=this.skuId;
      this.itemService.removeCart(this.id).subscribe(
        data=>
        {
          alert("Deleted Successfully!!!");
        }
      )
    }
   )
  }
  delete(value:any)
  {
    this.router.navigate(['/viewCart',value]);
  }


}
