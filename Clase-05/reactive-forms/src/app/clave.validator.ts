import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export function confirmarClaveValidator(): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
        const clave = formGroup.get('clave');
        const repiteClave = formGroup.get('repiteClave');
        const respuestaError = { noCoincide: 'La clave no coincide' };

        if (clave?.value !== repiteClave?.value) {
            formGroup.get('repiteClave')?.setErrors(respuestaError);
            // Si los campos de contraseña no coinciden, devolvemos un error de validación
            return respuestaError;
        } else {
            formGroup.get('repiteClave')?.setErrors(null);
            // Si los campos de contraseña coinciden, ...
            return null
        }
    }
}