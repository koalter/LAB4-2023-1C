import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  TraerUsuarios(usuario: string): Observable<[]> {
    return this.http.get('') as Observable<[]>;
  }
}
