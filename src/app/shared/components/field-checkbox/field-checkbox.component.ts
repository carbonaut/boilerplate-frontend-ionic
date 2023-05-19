import { Component, Input, Optional, Self } from '@angular/core';
import { NgControl, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-field-checkbox',
  templateUrl: './field-checkbox.component.html',
  styleUrls: ['./field-checkbox.component.scss'],
})
export class FieldCheckboxComponent implements ControlValueAccessor {
  @Input() label: string | null = null;

  @Input() required = false;

  @Input() disabled = false;

  @Input() showValidationErrorMessage = true;

  value: boolean = false;

  isDisabled = false;

  onChange: (_: any) => void = () => {};

  onTouched: () => void = () => {};

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(@Self() @Optional() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  // FORM CONTROL FUNCTIONS
  setValue($event: any) {
    this.value = $event.detail.checked;
    this.updateChanges();
  }

  updateChanges() {
    this.onChange(this.value);
  }

  writeValue(value: boolean): void {
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
}
