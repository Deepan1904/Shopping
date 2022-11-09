import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private itemService:ItemService,private router: Router,private active:ActivatedRoute) { }
  setName:any;
  itm:Item=new Item();
  item:Item[]=[];
  id:string="";
  skuId!:any;
   data!:any;
  ngOnInit(): void {
    
     this.data=sessionStorage.getItem('SiteName');
    
   this.active.params.subscribe(
    data=>
    {
        this.setName=data["setName"];
    }
   )
   this.itemService.getItem().subscribe(
    data=>
    {
      this.item=data;
    },
   error=>
   {
    alert("Something going wrong!!!");
   }
   )
}
get(value:any)
{
  this.id=value;
  this.itemService.getItembyId(value).subscribe(
    data=>
    {
      this.itm=data;
      if(this.id==this.itm.skuId)
      {
        console.log("This id is : "+this.id);
        this.router.navigate(['/view',this.id]);
      }
    }
  )
}
}
