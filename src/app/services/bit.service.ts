import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BitService {
  bit = 'https://data.messari.io/api/v1/assets/btc/metrics';
  constructor(private http: HttpClient) { }
  bitcon() {
    return this.http.get(this.bit);
  }
}
