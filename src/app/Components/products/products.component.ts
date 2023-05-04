import { Component } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  
  products: any[] = []
 constructor(private _ProductsService :ProductsService){
   this._ProductsService.getProducts().subscribe((products)=>{
    this.products = products.data
   })
 }
}
