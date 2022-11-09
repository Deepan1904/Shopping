import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private itemService:ItemService) { }
  itemToAdd:Item=new Item();
  add()
  {
    this.itemService.addItem(this.itemToAdd).subscribe(
      data=>
      {
         alert("Added Successfully");
      },
      error=>
      {
        alert("Product not added ! already exists");
      }
    )
  }

  ngOnInit(): void {
  }

}
