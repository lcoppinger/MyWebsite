import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private analytics: AnalyticsService) { }

  ngOnInit() {
  }

  scrollTo() {
    document.querySelector('#products').scrollIntoView({ 
      behavior: 'smooth' 
    });
    this.analytics.event("Jump_To_Products", "click", "jump-to-products");
  }

  contact(method) {
    this.analytics.event("Contact", "click", method);
  }
}
