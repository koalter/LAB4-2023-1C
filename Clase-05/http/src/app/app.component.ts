import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'http';
  suscripcionComponente!: Subscription;

  constructor(private httpService: HttpService) { }
  
  ngOnInit(): void {
    this.traer();
  }
  
  ngOnDestroy(): void {
    this.suscripcionComponente.unsubscribe();
  }

  traer() {
    this.suscripcionComponente = this.httpService.traer();
  }
}
