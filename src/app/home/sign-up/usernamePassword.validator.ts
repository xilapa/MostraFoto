import { FormGroup, ValidationErrors } from '@angular/forms';

export const usernamePasswordValidator = (formGroup: FormGroup) : ValidationErrors | null  => {
    const userName = formGroup.get('userName').value as string;
    const password = formGroup.get('password').value as string;

    // se não for vazio ele valida
    if (userName.trim() + password.trim())        
        return userName != password ? null : { usernamePassword : true };
     else 
        return null;
}