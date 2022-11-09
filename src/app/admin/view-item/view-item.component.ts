import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/item.model';
import { ItemService } from 'src/app/item.service';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {

  constructor(private itemService:ItemService,private active:ActivatedRoute,private router: Router) { }
  skuId:any="";
  id:string="";
  item:Item=new Item();
  ngOnInit(): void 
  {
   this.active.params.subscribe
   (
    data=>
    {
      this.skuId=data["skuId"];
      this.id=this.skuId;
      console.log(this.skuId);
    }
   ),
   this.itemService.getItembyId(this.id).subscribe
   (
    data=>
    {
      this.item=data;
    },
    error=>{alert("Sorry Not able to show");}
   )
  }
  delete()
  {
    this.itemService.deleteItem(this.id).subscribe(
      data=>{alert("Deleted");},
      error=>{
        alert("Deleted");
    }
    )
  }
  edit()
  {
    this.router.navigate(['/edit',this.id]);
  }


}
