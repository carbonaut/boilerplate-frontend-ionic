import { Component, Input, OnInit, Self } from '@angular/core';
import { NgControl, ControlValueAccessor } from '@angular/forms';
import { FieldRadioOption } from './field-radio.interface';

const TOTAL_OPTIONS_TOGGLE_THEME = 2;

@Component({
  selector: 'app-field-radio',
  templateUrl: './field-radio.component.html',
  styleUrls: ['./field-radio.component.scss'],
})
export class FieldRadioComponent implements ControlValueAccessor, OnInit {
  @Input() label: string;
  @Input() required = false;
  @Input() disabled = false;
  @Input() theme: 'toggle' | 'default' = 'default';
  @Input() options: FieldRadioOption[] = [];
  @Input() showValidationErrorMessage = true;

  value: any;
  isDisabled = false;

  onChange: (_: any) => void = () => {};
  onTouched: () => void = () => {};

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(@Self() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  ngOnInit() {
    this.validateThemeField();

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
  private validateThemeField() {
    if (this.theme === 'toggle' && this.options.length !== TOTAL_OPTIONS_TOGGLE_THEME) {
      throw new Error('Theme "toggle" requires 2 options.');
    }
  }

  private selectDefaultOption() {
    this.value = this.options[0] !== undefined ? this.options[0].value : null;
  }
}
