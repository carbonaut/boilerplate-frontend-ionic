import { Component, Input, Optional, Self, OnInit } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { FieldSelectOption } from './field-select.interface';
import { FieldRadioOption } from '../field-radio/field-radio.interface';

@Component({
  selector: 'app-field-select',
  templateUrl: './field-select.component.html',
  styleUrls: ['./field-select.component.scss'],
})
export class FieldSelectComponent implements ControlValueAccessor, OnInit {
  @Input() label: string | null = null;

  @Input() placeholder: string | null = null;

  @Input() required = false;

  @Input() disabled = false;

  @Input() options: FieldSelectOption[] = [];

  @Input() showValidationErrorMessage = true;

  @Input() multiple = false;

  value: string | null = null;

  isDisabled = false;

  interfaceOptions = {};

  onChange: (_: any) => void = () => {};

  onTouched: () => void = () => {};

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(@Self() @Optional() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  ngOnInit() {
    this.setInterfaceOptions();
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
  setInterfaceOptions() {
    this.interfaceOptions = {
      header: this.label,
    };
  }
}
