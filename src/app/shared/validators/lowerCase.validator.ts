import { AbstractControl, ValidationErrors } from '@angular/forms';

export const lowerCaseValidator = (control: AbstractControl) :  ValidationErrors | null => {
    if (control.value && control.value.trim() && !/^[a-z0-9_\-]+$/.test(control.value))
        return { lowerCase: true };
    return null;
}