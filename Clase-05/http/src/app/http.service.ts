import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  traer() {
    const consulta = this.http.get('https://restcountries.com/v3.1/all');

    const suscripcion = consulta.subscribe(res => {
      console.log(res);
    });

    return suscripcion;
  }
}
