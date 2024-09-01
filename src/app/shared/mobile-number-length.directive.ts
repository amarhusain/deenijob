import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appMobileNumberLength]',
  standalone: true,
  providers: [{ provide: NG_VALIDATORS, useExisting: MobileNumberLengthDirective, multi: true }],
})
export class MobileNumberLengthDirective implements Validator {
  @Input('appMobileNumberLength') mobileNumberLength: number = 10;
  validate(control: AbstractControl): ValidationErrors | null {
    return this.mobileNumberLength ? mobileNumberLengthValidator(this.mobileNumberLength)(control) : null;
  }

}

/** An actor's name can't match the given regular expression */
export function mobileNumberLengthValidator(mobileNumberLength: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    // const forbidden = nameRe.test(control.value);
    return (control.value && !isNaN(control.value) && control.value.toString().length !== mobileNumberLength) ? { mobileNumberLength: { value: control.value } } : null;
  };
}
