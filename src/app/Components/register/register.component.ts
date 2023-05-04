import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import * as $ from "jquery";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _AuthService: AuthService , private _Router : Router){
    if (localStorage.getItem('token') != null) {
      _Router.navigate(['/home'])
    } 
  }

  registerForm: FormGroup =  new FormGroup ({
   "name" : new FormControl(null, [Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern(/^[A-Z]{1}[a-z]{0,19}$/)]),
   "email" : new FormControl(null, [Validators.required,Validators.email]),
   "password" : new FormControl(null, [Validators.required]),
   "rePassword" : new FormControl(null,[Validators.required]),
   "Phone" : new FormControl(null, [Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),

 })

 register() {

   this._AuthService.register(this.registerForm.value).subscribe({
     next:(response) => {
       if (response.message == "success") {
         this._Router.navigate(['/login'])
       }
       error: (err: any)=> {
         console.log(err.error.errors.msg);
       }  
     }
   })
 }


 
ngOnInit() {

  $('.btn').on("click",function () {
    $('.loading-icon').removeClass('hide'),
    $('.btn').attr("disabled");
    $('.txt').text(" ");
     })
    
  }
}
