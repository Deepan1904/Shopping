import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from './cart.model';
import { Item } from './item.model';
import { Payment } from './user/check-out/payment.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  delete() {
    throw new Error('Method not implemented.');
  }

  siteName!:string;

  constructor(private http:HttpClient) { }

  item:Item[]=[];
  cart:Cart[]=[];
  addItem(itm:Item)
  {
   return this.http.post<Item>("http://localhost:1234/product/add",itm);
  }
  getItem()
  {
    return this.http.get<Item[]>("http://localhost:1234/product/get");
  }
  deleteItem(id:string)
  {
    return this.http.delete<Item>(`http://localhost:1234/product/delete/${id}`);
  }
  getItembyId(id:string)
  {
    return this.http.get<Item>(`http://localhost:1234/product/byId/${id}`);
  }
  updateItem(id:Item)
  {
    return this.http.put<Item>(`http://localhost:1234/product/update`,id);
  }
  addToCart(product:Item)
  {
    return this.http.post<Cart>(`http://localhost:8081/cart/add`,product);
  }
  viewItem()
  {
    return this.http.get<Cart[]>(`http://localhost:8081/cart/get`);
  }
  removeCart(id:String)
  {
    return this.http.delete<Cart>(`http://localhost:8081/cart/delete/${id}`);
  }
  checkout(value:Payment)
  {
    return this.http.post<Payment>(`http://localhost:8082/order/save`,value); 
  }

}
