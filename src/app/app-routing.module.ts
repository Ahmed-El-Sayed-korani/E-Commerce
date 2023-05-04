import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsComponent } from './Components/brands/brands.component';
import { CartComponent } from './Components/cart/cart.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsComponent } from './Components/products/products.component';
import { RegisterComponent } from './Components/register/register.component';
import { GuardGuard } from './Guards/guard.guard';
import { CheckoutFormComponent } from './Components/checkout-form/checkout-form.component';
import { AllordersComponent } from './Components/allorders/allorders.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',canActivate:[GuardGuard],component:HomeComponent},
  {path:'product/:id',canActivate:[GuardGuard],component:ProductDetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'cart',canActivate:[GuardGuard],component:CartComponent},
  {path:'catagories',canActivate:[GuardGuard],component:CategoriesComponent},
  {path:'products',canActivate:[GuardGuard],component:ProductsComponent},
  {path:'checkout/:cartId',canActivate:[GuardGuard],component:CheckoutFormComponent},
  {path:'brands',canActivate:[GuardGuard],component:BrandsComponent},
  {path:'allorders',canActivate:[GuardGuard],component:AllordersComponent},
  {path:'**',component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash : true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
