import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplo-guards';

  constructor(private authService: AuthService) { }

  loguearse(): void {
    this.authService.logueado = true;
  }
}
