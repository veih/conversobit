import { Component, OnInit } from '@angular/core';
import { faHourglass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  horas: string = '00';
  minutos: string = '00';
  segundos: string = '00';

  constructor() { }

  ngOnInit(): void {
    this.horas = this.horario();

    setInterval(() => {
      this.horas = this.horario();
    }
      , 1000);
  }

  horario() {
    const horas = new Date().getHours();
    const minutos = new Date().getMinutes();
    const segundos = new Date().getSeconds();
   return horas + ':' + minutos + ':' + segundos;
  }

}

