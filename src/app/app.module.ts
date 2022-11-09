import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ProductComponent } from './product/product.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SiteNameComponent } from './admin/site-name/site-name.component';
import { DataTablesModule } from 'angular-datatables';
import { ViewItemComponent } from './admin/view-item/view-item.component';
import { EditItemComponent } from './admin/view-item/edit-item/edit-item.component';
import { ViewUserItemComponent } from './user/view-user-item/view-user-item.component';
import { ViewCartComponent } from './user/view-cart/view-cart.component';
import { CheckOutComponent } from './user/check-out/check-out.component';
import { OrderConformComponent } from './user/order-conform/order-conform.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    ViewItemComponent,
    AddItemComponent,
    ProductComponent,
    WelcomeComponent,
    SiteNameComponent,
    EditItemComponent,
    ViewUserItemComponent,
    ViewCartComponent,
    CheckOutComponent,
    OrderConformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
