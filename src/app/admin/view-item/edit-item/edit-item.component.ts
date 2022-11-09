import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/item.model';
import { ItemService } from 'src/app/item.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  constructor(private itemService:ItemService,private active:ActivatedRoute,private router: Router) { }
  id:string="";
  item:Item=new Item();
  ngOnInit(): void 
  {
    this.active.params.subscribe
   (
    data=>
    {
      this.id=data["id"];
      console.log(this.id);
    }
    );
    this.itemService.getItembyId(this.id).subscribe(
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
  back()
  {
    this.router.navigate(['/view',this.id]);
  }
  update()
  {
    this.itemService.updateItem(this.item).subscribe(
      data=>
      {
        alert("Product Updated !!!");
      },
      error=>
      {
        console.log(error);
      }
    )
  }
}
