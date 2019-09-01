import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private analytics: AnalyticsService) { }

  ngOnInit() {
  }

  contact(method) {
    this.analytics.event("Contact", "click", method);
  }

}
