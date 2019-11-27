import { AbstractControl, ValidationErrors, ValidatorFn, FormGroup } from '@angular/forms';

// export function passwordsMatch(control: AbstractControl): {[key: string]: any} | null {
//   const password: string = control.value

//   return { confirmPassword: true }
// }

export const passwordsMatch: ValidatorFn = (formGroup: FormGroup) => {
  return {
    passwordsMatch: formGroup.get('password').value !== formGroup.get('confirmPassword').value
  }
}
