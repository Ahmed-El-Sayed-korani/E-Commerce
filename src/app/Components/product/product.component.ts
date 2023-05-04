import { Component, Input } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
 @Input() product:any;

 constructor(private _productService : ProductsService){}

 productAddToCart(productId:String){
   this._productService.productAddToCart(productId).subscribe((response)=>{
    this._productService.numOfCartItems.next(response.numOfCartItems)
   })
 }
}
