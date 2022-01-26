import { Component, OnInit } from '@angular/core';
import { AlphaVantageService } from '../alpha-vantage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public currencies = ['CAD', 'JPY', 'EUR'];

  constructor() { }

  ngOnInit() {

  }

}
