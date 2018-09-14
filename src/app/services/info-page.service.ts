import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoPageInterface } from '../interfaces/infoPage.interface';
// import { InfoPageService } from '../../services/infoPage.service';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {
  // mala practica usar any, se declaran interfaces dentro de la app para q conozca los elementos que se usaran en el servicio
  info: infoPageInterface = {};
  load = false;
  team_load = false;
  team: any = [];

  constructor( private http: HttpClient ) {

    // console.log("using infoPage Service");
    this.loadInfo();
    this.loadTeam();

  }

  private loadInfo() {
// get data from json
    this.http.get('https://angularv6portfolio.firebaseio.com/equipo.json').subscribe( ( resp: infoPageInterface ) => {
      this.info = resp;

      this.load = true;
      console.log(resp);
    });
  }

  private loadTeam() {
    this.http.get('https://angularv6portfolio.firebaseio.com/equipo.json').subscribe( ( resp: any[] ) => {
      this.team = resp;
      this.team_load = true;
      console.log(resp);
    });
  }
}
