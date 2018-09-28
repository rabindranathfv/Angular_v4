import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//Routing
import { AppRoutingModule } from './/app-routing.module';
// Me permite realizar solicitudes http de todo tipo (get, post, put, delete)
import { HttpClientModule } from '@angular/common/http';

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortfolioComponent } from './pagues/portfolio/portfolio.component';
import { AboutComponent } from './pagues/about/about.component';
import { PortfolioItemComponent } from './pagues/portfolio-item/portfolio-item.component';
import { ContatUsComponent } from './pagues/contat-us/contat-us.component';
import { ItemDetailComponent } from './pagues/item-detail/item-detail.component';
import { HttpClient } from 'selenium-webdriver/http';
import { SearchComponent } from './pagues/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortfolioComponent,
    AboutComponent,
    PortfolioItemComponent,
    ItemDetailComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
