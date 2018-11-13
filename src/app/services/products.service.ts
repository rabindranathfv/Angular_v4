import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoProductsInterface } from '../interfaces/infoProducts.interface';
import { infoTechnologiesInterface } from '../interfaces/infoTechnologies.interface';
import { timeout } from 'q';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: infoProductsInterface[] = [];
  load_products = true;
  productsFilter: infoProductsInterface[] = [];
  productExist = false;
  skillsTechnologies: infoTechnologiesInterface[] = [] ;

  constructor( private http: HttpClient ) {
    this.loadProducts();
  }

  private loadProducts() {

    // promesas ecs6
    return new Promise( (resolve,reject) => {

        this.http.get('https://angularv6portfolio.firebaseio.com/productos_idx.json')
            .subscribe ( (resp: infoProductsInterface[] ) => {

        this.products = resp;
        // console.log(resp);
        setTimeout( () => {
          this.load_products = false;
        }, 1000);
        resolve();
      });
    });
  }

  public getProducts( id: string) {
    return this.http.get('https://angularv6portfolio.firebaseio.com/productos/' +  id + '.json');
  }

  searchProduct( searchTerm: string) {

    if ( this.products.length === 0 ) {
      this.loadProducts().then( () => {
        this.getProductsFilter(searchTerm);
      });
    } else {
      this.getProductsFilter(searchTerm);
    }

    // console.log("filtro de productos");
    // console.log(this.productsFilter);
  }

  private getProductsFilter( searchTerm: string) {

    // reseteando el arreglo para evitar duplicidad
    this.productsFilter = [];

    this.products.forEach( products => {
      const tituloLower = products.titulo.toLocaleLowerCase();
      const categoriaLower = products.categoria.toLocaleLowerCase();
      if (categoriaLower.indexOf(searchTerm) >= 0 || tituloLower.indexOf(searchTerm) >= 0  ) {
        // console.log(products.categoria.indexOf(searchTerm));
        this.productsFilter.push(products);
        this.productExist = true;
      }
    });
  }
}
