import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoProductsInterface } from '../interfaces/infoProducts.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: infoProductsInterface[] = [];
  load_products = true;

  constructor( private http: HttpClient ) {
    this.loadProducts();
  }

  private loadProducts() {
    this.http.get('https://angularv6portfolio.firebaseio.com/productos_idx.json').subscribe ( (resp: infoProductsInterface[] ) => {
      this.products = resp;
      this.load_products = false;
      console.log(resp);
    });
  }
}
