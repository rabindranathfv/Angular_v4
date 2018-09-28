import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pagues/about/about.component';
import { PortfolioComponent } from './pagues/portfolio/portfolio.component';
import { PortfolioItemComponent } from './pagues/portfolio-item/portfolio-item.component';
import { ItemDetailComponent } from './pagues/item-detail/item-detail.component';
import { SearchComponent } from './pagues/search/search.component';


const app_routes: Routes = [
  { path: 'home', component: PortfolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portfolio-item', component: PortfolioItemComponent },
  { path: 'item-detail/:id', component: ItemDetailComponent },
  { path: 'search/:searchTerm', component: SearchComponent },
  // ruta por defecto sino cae en las anteriormente declaras
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];


@NgModule({
  imports: [
    CommonModule,
    // agrego el arreglo de rutas en los imports
    RouterModule.forRoot( app_routes, { useHash: true } )
  ],
  declarations: [],
  // agregando el router modulo para poder utilizarlo en los componentes
  exports: [
    RouterModule
  ],
  providers: [],
})
export class AppRoutingModule { }
