import { Component } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

 categories : any[] = []

  constructor(private _ProductsService :ProductsService ){
    this._ProductsService.getCategories().subscribe((categories)=>{
      this.categories = categories.data
    })
  }

}
