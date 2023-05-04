import { Component } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent {
  brands: any[] = []
  constructor(private _ProductsService :ProductsService){
    this._ProductsService.getBrands().subscribe((brands)=>{
     this.brands = brands.data
    })
  }

}
