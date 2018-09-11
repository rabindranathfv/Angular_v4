import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//Routing
import { AppRoutingModule } from './/app-routing.module';

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortfolioComponent } from './pagues/portfolio/portfolio.component';
import { AboutComponent } from './pagues/about/about.component';
import { PortfolioItemComponent } from './pagues/portfolio-item/portfolio-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortfolioComponent,
    AboutComponent,
    PortfolioItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
