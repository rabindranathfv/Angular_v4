import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pagues/about/about.component';
import { PortfolioComponent } from './pagues/portfolio/portfolio.component';
import { PortfolioItemComponent } from './pagues/portfolio-item/portfolio-item.component';


const app_routes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portfolio-item', component: PortfolioItemComponent },
  // ruta por defecto sino cae en las anteriormente declaras
  { path: '**', pathMatch: 'full', redirectTo: '' }
];


@NgModule({
  imports: [
    CommonModule,
    // agrego el arreglo de rutas en los imports
    RouterModule.forRoot( app_routes )
  ],
  declarations: [],
  // agregando el router modulo para poder utilizarlo en los componentes
  exports: [
    RouterModule
  ],
  providers: [],
})
export class AppRoutingModule { }
