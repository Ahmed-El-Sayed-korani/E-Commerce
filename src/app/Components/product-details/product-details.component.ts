import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      
    },
    nav: false
  }

  productId : string = ""

  productDetails : any;



  constructor(private _ActivatedRoute:ActivatedRoute, private _productServices : ProductsService){
    _ActivatedRoute.paramMap.subscribe((params)=>{
      this.productId = params.get('id') || ""
      
      

      _productServices.getSpecificProduct(this.productId).subscribe((product)=>{
        this.productDetails = product.data
      })
    })


  }

  productAddToCart(productId:String){
    this._productServices.productAddToCart(productId).subscribe((response)=>{
      this._productServices.numOfCartItems.next(response.numOfCartItems)

    })
  }



}
