import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bit',
  templateUrl: './bit.component.html',
  styleUrls: ['./bit.component.css']
})
export class BitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bitcon() {
    let btc = document.querySelectorAll('.brl');
    const urlBitcoin = 'https://data.messari.io/api/v1/assets/btc/metrics';
    fetch(urlBitcoin)
      .then(response => response.json())
      .then(data => {
        btc.forEach(element => {
          element.innerHTML ='Valor atual US$: ' + data.data.market_data.price_usd;
        });
      }
      );
  }

}
