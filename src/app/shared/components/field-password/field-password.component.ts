import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { Validators, ControlValueAccessor, NgControl } from '@angular/forms';

import { passwordStrengthValidator } from '../../../core/validators/password-strength/password-strenght.validator';

@Component({
  selector: 'app-field-password',
  templateUrl: './field-password.component.html',
  styleUrls: ['./field-password.component.scss'],
})
export class FieldPasswordComponent implements ControlValueAccessor, OnInit {
  @Input() label: string;

  @Input() placeholder: string;

  @Input() required = false;

  @Input() disabled = false;

  @Input() showValidationErrorMessage = true;

  @Input() validatePasswordStrength = false;

  showPassword = false;

  value: string;

  isDisabled = false;

  onChange: (_: any) => void = () => {};

  onTouched: () => void = () => {};

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(@Self() @Optional() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  ngOnInit() {
    const { control } = this.ngControl;

    let validators = this.getValidators();
    validators = control.validator ? [control.validator, ...validators] : this.getValidators();

    control.setValidators(validators);
    control.updateValueAndValidity();
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  // FORM CONTROL FUNCTIONS
  setValue($event: any) {
    this.value = $event.detail.value;
    this.updateChanges();
  }

  updateChanges() {
    this.onChange(this.value);
  }

  writeValue(value: string): void {
    this.value = value;
    this.updateChanges();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }

  // PRIVATE
  private getValidators() {
    const validators = [Validators.minLength(8)];

    if (this.validatePasswordStrength) {
      validators.push(passwordStrengthValidator());
    }

    return validators;
  }
}
