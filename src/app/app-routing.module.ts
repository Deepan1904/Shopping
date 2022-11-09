import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { AdminComponent } from './admin/admin.component';
import { SiteNameComponent } from './admin/site-name/site-name.component';
import { EditItemComponent } from './admin/view-item/edit-item/edit-item.component';
import { ViewItemComponent } from './admin/view-item/view-item.component';
import { AppComponent } from './app.component';
import { CheckOutComponent } from './user/check-out/check-out.component';
import { OrderConformComponent } from './user/order-conform/order-conform.component';
import { UserComponent } from './user/user.component';
import { ViewCartComponent } from './user/view-cart/view-cart.component';
import { ViewUserItemComponent } from './user/view-user-item/view-user-item.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:"welcome",component:WelcomeComponent},
  {path:"edit/:id",component:EditItemComponent},
  {path:"view/:skuId",component:ViewItemComponent},
  {path:"adminPage",component:AdminComponent},
  {path:"adminPage/:setName",component:AdminComponent},
  {path:"user",component:UserComponent},
  {path:"add",component:AddItemComponent},
  {path:"main",component:AppComponent},
  {path:"siteName",component:SiteNameComponent},
  {path:"",redirectTo:"/welcome",pathMatch:"full"},
  {path:"userItem/:skuId",component:ViewUserItemComponent},
  {path:"viewCart",component:ViewCartComponent},
  {path:"viewCart/:skuId",component:ViewCartComponent},
  {path:"checkOut",component:CheckOutComponent},
  {path:"orderConform",component:OrderConformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
