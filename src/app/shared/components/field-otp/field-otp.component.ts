import { Component, Input, ViewChild, Self, Optional } from '@angular/core';
import { NgControl, ControlValueAccessor } from '@angular/forms';

/*
  Documentation: https://github.com/code-farmz/ng-otp-input
 */

@Component({
  selector: 'app-field-otp',
  templateUrl: './field-otp.component.html',
  styleUrls: ['./field-otp.component.scss'],
})
export class FieldOtpComponent implements ControlValueAccessor {
  @ViewChild('ngOtpInput', { static: false }) ngOtpInputRef: any;

  @Input() placeholder = '-';

  @Input() label: string | null = null;

  @Input() showValidationErrorMessage = true;

  @Input() length = 5;

  value: any;

  isDisabled = false;

  onChange: (_: any) => void = () => {};

  onTouched: () => void = () => {};

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(@Self() @Optional() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  // FORM CONTROL FUNCTIONS
  setValue(value: number | string) {
    this.value = value;
    this.updateChanges();
  }

  updateChanges() {
    this.onChange(this.value);
  }

  writeValue(value: number | string): void {
    this.value = value;
    if (this.ngOtpInputRef) {
      this.ngOtpInputRef.setValue(value);
    }
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
}
