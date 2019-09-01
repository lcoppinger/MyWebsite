import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      } else if (evt instanceof NavigationEnd && evt.url === '/home') {
        setTimeout(() => {
          document.querySelector('#click').scrollIntoView({ 
            behavior: 'smooth' 
          });
        }, 250);
      }
    });
  }

}
