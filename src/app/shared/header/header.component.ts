import { Component, OnInit } from '@angular/core';
import { infoPageInterface } from '../../interfaces/infoPage.interface';
import { InfoPageService } from '../../services/info-page.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public infoPageInterface: InfoPageService ) { }

  ngOnInit() {
  }

}
