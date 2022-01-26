import { Component, OnInit, Input } from '@angular/core';
import { AlphaVantageService } from '../alpha-vantage.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  public currency: string;

  public rate: string;

  constructor(private alphaVantageService: AlphaVantageService) { }

  ngOnInit() {
    this.alphaVantageService.get(this.currency).subscribe(result => {
      this.rate = result['Realtime Currency Exchange Rate']['5. Exchange Rate'];
    });
  }

}
