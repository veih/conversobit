import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eth',
  templateUrl: './eth.component.html',
  styleUrls: ['./eth.component.css']
})
export class EthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
}
