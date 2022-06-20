import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

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

  etherio() {
    let eth = document.querySelectorAll('.brl');
    const urlEtheruim = 'https://data.messari.io/api/v1/assets/eth/metrics';
    fetch(urlEtheruim)
      .then(response => response.json())
      .then(data => {
        eth.forEach(element => {
          element.innerHTML = 'Valor atual US$: ' + data.data.market_data.price_usd;
        });
      });
  }

  dolar() {
    let us = document.querySelectorAll('.brl');
    const urlReal = 'https://economia.awesomeapi.com.br/last/USD-BRL';
    fetch(urlReal)
      .then(response => response.json())
      .then(data => {
        us.forEach(element => {
          element.innerHTML ="Valor atual R$: " + data.USDBRL.bid;
        });
      });
  }

}

