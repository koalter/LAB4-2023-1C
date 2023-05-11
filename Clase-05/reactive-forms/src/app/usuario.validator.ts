import { AbstractControl, ValidationErrors, AsyncValidatorFn } from "@angular/forms";
import { UsuarioService } from "./usuario.service";
import { Observable, map } from "rxjs";


export function usuarioExisteAsyncValidator(service: UsuarioService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
        const usuario = control.value;
        return service.TraerUsuarios(usuario).pipe(
            map(usuarios => {
                if (usuarios.length > 0) {
                    return { usuarioExiste: 'El usuario ya existe' };
                }
                return null;
            })
        )
    }
}