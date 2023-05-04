import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})


export class CheckoutFormComponent {

  cartId : string = ""
  constructor(private _productService : ProductsService , private _ActivatedRoute :ActivatedRoute){
    _ActivatedRoute.paramMap.subscribe((params)=>{
      this.cartId = params.get("cartId")!;
    })

  }
  addressForm : FormGroup = new FormGroup({
    details: new FormControl(null, [Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    phone: new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]), 
    city: new FormControl(null, [Validators.required,Validators.minLength(3),Validators.maxLength(20)]),

  })

  checkout(addressForm:FormGroup){
    this._productService.checkout(addressForm.value,this.cartId).subscribe((response)=>{
      console.log(response);
      location.href = response.session.url
    })
  }
}
