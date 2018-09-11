import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pagues/about/about.component';
import { PortfolioComponent } from './pagues/portfolio/portfolio.component';
import { PortfolioItemComponent } from './pagues/portfolio-item/portfolio-item.component';


const app_routes: Routes = [
  { path: '' , component: PortfolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portfolio-item', component: PortfolioItemComponent },
  // ruta por defecto sino cae en las anteriormente declaras
  { path: '**', pathMatch: 'full', redirecTo: '' }
];


@NgModule({
  imports: [
    CommonModule,
    //agrego el arreglo de rutas en los imports
    RouteModule.forRoot( app_routes )
  ],
  declarations: []
})
export class AppRoutingModule { }
