import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/register/register.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { CartComponent } from './Components/cart/cart.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './Components/product/product.component'
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SearchPipe } from './Pipes/search.pipe';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { CheckoutFormComponent } from './Components/checkout-form/checkout-form.component';
import { AllordersComponent } from './Components/allorders/allorders.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ProductsComponent,
    ProductDetailsComponent,
    NotfoundComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    CategoriesComponent,
    CartComponent,
    BrandsComponent,
    ProductComponent,
    SearchPipe,
    SpinnerComponent,
    CheckoutFormComponent,
    AllordersComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
