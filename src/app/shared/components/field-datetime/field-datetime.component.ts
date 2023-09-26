import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl, ValidatorFn } from '@angular/forms';
import { format, formatISO } from 'date-fns';
import { de } from 'date-fns/locale';

@Component({
  selector: 'app-field-datetime',
  templateUrl: './field-datetime.component.html',
  styleUrls: ['./field-datetime.component.scss'],
})
export class FieldDatetimeComponent implements ControlValueAccessor, OnInit {
  @Input() showValidationErrorMessage = true;

  @Input() placeholder: string | undefined;

  isModalOpen = false;

  parsedDate: string | null = null;

  value: string | null = null;

  isDisabled = false;

  get label(): string {
    if (this.ngControl.control?.value) {
      const controlDate = new Date(this.ngControl?.control?.value);
      return format(controlDate, 'p', { locale: de });
    }

    return '';
  }

  onChange: (_: any) => void = () => {};

  onTouched: () => void = () => {};

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(@Self() @Optional() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  ngOnInit() {
    const { control } = this.ngControl;

    let validators = this.getValidators();
    validators = control?.validator ? [control?.validator, ...validators] : this.getValidators();

    control?.setValidators(validators);
    control?.updateValueAndValidity();
  }

  // FORM CONTROL FUNCTIONS
  setValue($event: any) {
    this.value = formatISO(new Date($event.detail.value));
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

  handleModal(showModal: boolean) {
    if (showModal) {
      this.ngControl.control?.markAsTouched();
      this.updateChanges();
    }

    this.isModalOpen = showModal;
  }

  // PRIVATE
  private getValidators(): ValidatorFn[] {
    const validators: ValidatorFn[] | null = [];

    return validators;
  }
}
