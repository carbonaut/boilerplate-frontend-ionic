import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { NgControl, ValidatorFn } from '@angular/forms';
import { IDatePickerDirectiveConfig } from 'ng2-date-picker';

/*
  https://github.com/vlio20/angular-datepicker#readme
 */

@Component({
  selector: 'app-field-calendar',
  templateUrl: './field-calendar.component.html',
  styleUrls: ['./field-calendar.component.scss'],
})
export class FieldCalendarComponent implements OnInit {
  @Input() label: string;
  @Input() placeholder: string;
  @Input() icon;
  @Input() showValidationErrorMessage = true;

  @Input() set locale(locale: string) {
    if (locale) {
      this.setLocale(locale);
    }
  }

  value: string;
  isDisabled = true;

  config: IDatePickerDirectiveConfig = {};

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

  setLocale(locale: string) {
    this.config.locale = locale;
  }

  selectDateEvent(value: string) {
    this.value = value;
  }

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

  private getValidators(): ValidatorFn[] {
    const validators = [];
    //
    // if (this.type === 'email') {
    //   validators.push(Validators.email);
    // }

    return validators;
  }
}
