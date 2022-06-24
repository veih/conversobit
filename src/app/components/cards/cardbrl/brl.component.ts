import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brl',
  templateUrl: './brl.component.html',
  styleUrls: ['./brl.component.css']
})
export class BrlComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
