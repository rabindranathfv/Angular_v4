import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { infoProductsInterface } from '../../interfaces/infoProducts.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private route: ActivatedRoute,
               public infoProductsInterface: ProductsService ) { }

  ngOnInit() {

    this.route.params.subscribe( params => {
      // console.log(params['searchTerm']);
      this.infoProductsInterface.searchProduct(params['searchTerm']);
    });
  }

}
