import { Component, OnInit } from '@angular/core';
import { GuardGuard } from 'src/app/Guards/guard.guard';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css']
})


export class AllordersComponent   {

cartDetails : any
cartProducts : any[] = []
userId : string = ""



  constructor(private _productService : ProductsService , private _GuardGuard : GuardGuard){
    this.userId = _GuardGuard.userprofile.id
    this._productService.allorders(this.userId).subscribe((response)=>{
      this.cartDetails = response 
    })
  }




}
