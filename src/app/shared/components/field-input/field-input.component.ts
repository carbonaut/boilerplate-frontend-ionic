import { Component, Input, Self, OnInit, Optional } from '@angular/core';
import { Validators, ControlValueAccessor, NgControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-field-input',
  templateUrl: './field-input.component.html',
  styleUrls: ['./field-input.component.scss'],
})
export class FieldInputComponent implements ControlValueAccessor, OnInit {
  @Input() type: 'text' | 'number' | 'email' = 'text';

  @Input() mask: 'phone' | 'zip-code' | 'svnr' = 'phone';

  @Input() label: string | null = null;

  @Input() placeholder: string | null = null;

  @Input() validationIcon: string | null = null;

  @Input() icon: string | null = null;

  @Input() showValidationErrorMessage = true;

  value: string | null = null;

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
    validators = control?.validator ? [control.validator, ...validators] : this.getValidators();

    control?.setValidators(validators);
    control?.updateValueAndValidity();
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
  private getValidators(): ValidatorFn[] {
    const validators = [];

    if (this.type === 'email') {
      validators.push(Validators.email);
    }

    return validators;
  }
}
