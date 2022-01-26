import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlphaVantageService {
  constructor(private httpClient: HttpClient) {}

  public get(currency: string): Observable<RealtimeCurrencyExchangeRate> {
    return this.httpClient.get<RealtimeCurrencyExchangeRate>(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=${currency}&apikey=YTQ55M6DYDOMLOCW`);
  }
}

export interface RealtimeCurrencyExchangeRate {
  "Realtime Currency Exchange Rate": RealtimeCurrencyExchangeRateResult;
}

export class RealtimeCurrencyExchangeRateResult {
'1. From_Currency Code': string;
'2. From_Currency Name': string;
'3. To_Currency Code': string;
'4. To_Currency Name': string;
'5. Exchange Rate': string;
'6. Last Refreshed': Date;
'7. Time Zone': string;
'8. Bid Price': string;
'9. Ask Price': string;
}
