import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from './usuario.service';
import { confirmarClaveValidator } from './clave.validator';
import { usuarioExisteAsyncValidator } from './usuario.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'reactive-forms';
  form!: FormGroup;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.form = new FormGroup({
      usuario: new FormControl('', {
        asyncValidators: usuarioExisteAsyncValidator(this.usuarioService),
        updateOn: 'blur'
      }),
      nombre: new FormControl('', [Validators.pattern('^[a-zA-Z]+$')]),
      edad: new FormControl('', Validators.min(18)),
      mail: new FormControl('', Validators.email),
      clave: new FormControl('', Validators.minLength(4)),
      repiteClave: new FormControl('', Validators.required)
    }, [confirmarClaveValidator(), Validators.required]);
  }

  get usuario() {
    return this.form.get('usuario');
  }

  get nombre() {
    return this.form.get('nombre');
  }

  get edad() {
    return this.form.get('edad');
  }

  get mail() {
    return this.form.get('mail');
  }
}
