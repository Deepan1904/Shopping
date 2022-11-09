import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../item.model';

import { ItemService } from '../item.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private itemService:ItemService,private active:ActivatedRoute,private router: Router) { }
  itm:Item=new Item();
  item:Item[]=[];
  id:string="";
  skuId!:any;
  data!:any;
  ngOnInit(): void 
  {
    this.data=sessionStorage.getItem('SiteName');
    this.itemService.getItem().subscribe(
      data=>
      {
        this.item=data;
      },
      error=>
      {
        console.log(error);
      }
    )
  
  }
get(value:any)
{
  this.id=value;
  this.itemService.getItembyId(this.id).subscribe(
    data=>
    {
      this.itm=data;
      if(this.id==this.itm.skuId)
      {
        console.log("This id is : "+this.id);
        this.router.navigate(['/userItem',this.id]);
      }
    }
  )
}



}
