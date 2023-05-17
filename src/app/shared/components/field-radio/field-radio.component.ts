import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { NgControl, ControlValueAccessor } from '@angular/forms';
import { FieldRadioOption } from './field-radio.interface';

@Component({
  selector: 'app-field-radio',
  templateUrl: './field-radio.component.html',
  styleUrls: ['./field-radio.component.scss'],
})
export class FieldRadioComponent implements ControlValueAccessor, OnInit {
  @Input() label: string | null = null;

  @Input() required = false;

  @Input() disabled = false;

  @Input() options: FieldRadioOption[] = [];

  @Input() showValidationErrorMessage = true;

  value: any;

  isDisabled = false;

  onChange: (_: any) => void = () => {};

  onTouched: () => void = () => {};

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(@Self() @Optional() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  ngOnInit() {
    if (!this.value) {
      this.selectDefaultOption();
    }
  }

  trackByOptions(index: number, option: FieldRadioOption) {
    return option.value;
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
  private selectDefaultOption() {
    this.value = this.options[0] !== undefined ? this.options[0].value : null;
  }
}
