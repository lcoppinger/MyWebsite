import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'd3-example',
  templateUrl: './d3-example.component.html',
  styleUrls: ['./d3-example.component.scss']
})
export class D3ExampleComponent implements OnInit {
  selected: string = "Measured";
  strategy: any = {name:'Measured', risk:'medium risk'};
  strategies: any[] = [{name:'Defensive', risk:'Low risk'}, {name:'Cautious', risk:'Second lowest risk'}, {name:'Measured', risk:'Medium risk'}, {name:'Adventurous', risk:'Second highest risk'}, {name:'Aggressive', risk:'High risk'}];
  constructor(private analytics: AnalyticsService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  changeStrategy(strategy) {
    if (strategy.name !== this.selected) {
      this.selected = strategy.name;
      this.strategy = strategy;
    }
    this.analytics.event("Change_strategy", "click", strategy);
  }

  getImage(strategy) {
    const name = strategy.name.toLowerCase();
    return strategy.name===this.selected ? "assets/imgs/"+name+"-tab-active.svg" : "assets/imgs/"+name+"-tab-icon.svg";
  }

  back() {
    this.analytics.event("Back-to-Homepage", "click", 'back-to-homepage');
  }

}
