import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  constructor( private route: ActivatedRoute,
               public productsService: ProductsService ) { }

  ngOnInit() {
    // para tomar los parametros de las interfaces de usuario
    this.route.params.subscribe( parameters => {
      console.log(parameters);

      this.productsService.getProducts(parameters.id)
          .subscribe( product => {
            console.log(product);
          });
      });
  }

}
