import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

numOfCartItems : BehaviorSubject<number>=new BehaviorSubject(0)

  baseUrl: string = 'https://route-ecommerce-app.vercel.app'
  
  constructor(private _HttpClient : HttpClient, private _Router: Router) { 
    if (localStorage.getItem('token') != null) {
      this.getCartProductUser().subscribe((res)=>{
        console.log(res);
        
        this.numOfCartItems.next(res.numOfCartItems)
      })
    }
    }

    getProduct():Observable<any>{
      return this._HttpClient.get(this.baseUrl +'/api/v1/products')
    }

    getSpecificProduct(productId: string):Observable<any>{
      return this._HttpClient.get(this.baseUrl +`/api/v1/products/${productId}`)
    }

    getCategories():Observable<any>{
      return this._HttpClient.get(this.baseUrl +`/api/v1/categories`)
    }

    getProducts():Observable<any>{
      return this._HttpClient.get(this.baseUrl +`/api/v1/products`)
    }

    getBrands():Observable<any>{
      return this._HttpClient.get(this.baseUrl +`/api/v1/brands`)
    }

    productAddToCart(productId : String):Observable<any>{
      return this._HttpClient.post(this.baseUrl + '/api/v1/cart',{productId : productId },{
        headers : {
          token:localStorage.getItem('token') || ""
        }
      })
    }

    getCartProductUser():Observable<any>{
      return this._HttpClient.get(this.baseUrl + '/api/v1/cart',{
        headers : {
          token:localStorage.getItem('token') || ""
        }
      })
    }

    updateProductQuantity(productId : String,productCount:Number):Observable<any>{
      return this._HttpClient.put(this.baseUrl + `/api/v1/cart/${productId}`,{
        count:productCount
      },{
        headers : {
          token:localStorage.getItem('token') || ""
        }
      })
    }

    removeItemFromCart(productId : String):Observable<any>{
      return this._HttpClient.delete(this.baseUrl + `/api/v1/cart/${productId}`,{
        headers : {
          token:localStorage.getItem('token') || ""
        }
      })
    }

    removeCartItems():Observable<any>{
      return this._HttpClient.delete(this.baseUrl + '/api/v1/cart',{
        headers : {
          token:localStorage.getItem('token') || ""
        }
      })
    }

    checkout(shippingAddress:any,cartId:String): Observable<any>{

    return this._HttpClient.post(this.baseUrl + `/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,{
    "shippingAddress":shippingAddress
    },{
      headers : {
        token:localStorage.getItem('token') || ""
      }
    })
    }


    allorders( cartOwner : string ):Observable<any>{
      return this._HttpClient.get(this.baseUrl + `/api/v1/orders/user/${cartOwner}`)
    }

  }

