import { AbstractControl, ValidatorFn } from '@angular/forms';

/*
  Password strength validation. Requires:

  - at least one lower letter
  - at least one upper letter
  - at least one number
  - at least one special char
 */

export function passwordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const passwordValue = control.value;

    const regex = /[#$-/:-?{-~!"^_@`[\]]/g;
    const lowerLetters = /[a-z]+/.test(passwordValue);
    const upperLetters = /[A-Z]+/.test(passwordValue);
    const numbers = /[0-9]+/.test(passwordValue);
    const symbols = regex.test(passwordValue);

    const flags = [lowerLetters, upperLetters, numbers, symbols];

    for (const flag of flags) {
      if (!flag) {
        return { weakPassword: { value: control.value } };
      }
    }

    return null;
  };
}
