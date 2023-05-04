import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProducts:any[]= []
  cartId:string = ""

  constructor(private _productService : ProductsService){

  }

  ngOnInit(): void {
      this._productService.getCartProductUser().subscribe((response : any)=>{
        this.cartProducts =response.data.products
        this.cartId= response.data._id
      })
  }

  

  updateProductQuantity(productId:String , count:Number){

    if (count == 0) {
      this._productService.removeItemFromCart(productId).subscribe((response : any) => {
        this.cartProducts = response.data.products
        this._productService.numOfCartItems.next(response.numOfCartItems)
     })
    }
    else{
      this._productService.updateProductQuantity(productId,count).subscribe((response : any)=>{
        this.cartProducts = response.data.products 
      })
    }
  }

  removeItemFromCart(productId : string){
    this._productService.removeItemFromCart(productId).subscribe((response : any) => {
      this.cartProducts = response.data.products
      this._productService.numOfCartItems.next(response.numOfCartItems)
      
   })
    
  }
  removeCartItems(){
    this._productService.removeCartItems().subscribe((response : any) => {
      this.cartProducts = []
      this._productService.numOfCartItems.next(response.numOfCartItems)
   })
  }

 



}
