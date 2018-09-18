import { Component, OnInit } from '@angular/core';
import { infoPageInterface } from '../../interfaces/infoPage.interface';
import { InfoPageService } from '../../services/info-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public infoPageInterface: InfoPageService,
               private router: Router ) { }

  ngOnInit() {
  }

  searchProduct( searchTerm: string) {
    if (searchTerm.length < 1) {
      return;
    }
    // console.log(searchTerm);
    this.router.navigate(['/search', searchTerm]);
  }

}
