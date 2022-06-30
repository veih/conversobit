import { timeout } from 'rxjs';
import { Component, OnInit, OnChanges } from '@angular/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    let refresh = sessionStorage['refresh'];
    this.load();
  }

  load() {
    this.dolar1();
    this.bitcon1();
    this.etherio1();
    setInterval(() => {
      this.dolar1();
      this.bitcon1();
      this.etherio1();
    }, 1000 * 60 * 10);
  }

  dolar1() {
    let us = document.querySelectorAll('.brls');
    const urlReal = 'https://economia.awesomeapi.com.br/last/USD-BRL';
    fetch(urlReal)
      .then(response => response.json())
      .then(data => {
        us.forEach(element => {
          element.innerHTML = data.USDBRL.bid;
        });
      });
  }
  bitcon1() {
    let btc = document.querySelectorAll('.btcs') as NodeListOf<HTMLElement>;
    const urlBitcoin = 'https://data.messari.io/api/v1/assets/btc/metrics';
    fetch(urlBitcoin)
      .then(response => response.json())
      .then(data => {
        btc.forEach(element => {
          element.innerHTML = data.data.market_data.price_usd;
        });
      }
      );
  }
  etherio1() {
    let eth = document.querySelectorAll('.eths');
    const urlEtheruim = 'https://data.messari.io/api/v1/assets/eth/metrics';
    fetch(urlEtheruim)
      .then(response => response.json())
      .then(data => {
        eth.forEach(element => {
          element.innerHTML = data.data.market_data.price_usd;
        });
      });
  }

}
