import {AbstractControl, ValidatorFn} from '@angular/forms';

export function lengthValidator(len: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = control.value?.length > len;
    console.log(control);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}
