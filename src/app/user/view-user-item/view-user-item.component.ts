import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/cart.model';
import { Item } from 'src/app/item.model';
import { ItemService } from 'src/app/item.service';

@Component({
  selector: 'app-view-user-item',
  templateUrl: './view-user-item.component.html',
  styleUrls: ['./view-user-item.component.css']
})
export class ViewUserItemComponent implements OnInit {

  constructor(private itemService:ItemService,private active:ActivatedRoute,private router: Router) { }
  skuId:any="";
  id:string="";
  cart:Cart=new Cart();
  item:Item=new Item();
  data!:any;
  ngOnInit(): void 
  {
    this.data=sessionStorage.getItem('SiteName');
    this.active.params.subscribe
    (
     data=>
     {
       this.skuId=data["skuId"];
       this.id=this.skuId;
     }
    ),
   this.itemService.getItembyId(this.id).subscribe
   (
    data=>
    {
      this.item=data;
    },
    error=>
    {
      alert("Sorry Not able to show");
    }
   )
  }
  addCart(value:Item)
  {
     this.itemService.addToCart(value).subscribe(
      data=>
      {
        alert("Added Succesfully");
      }
     )
    
  }
  viewCart(x:any)
  {
    this.router.navigate(["/viewCart"]);
  }


}
