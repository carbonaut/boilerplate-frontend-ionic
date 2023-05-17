import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { formatISO } from 'date-fns';

@Component({
  selector: 'app-field-datetime',
  templateUrl: './field-datetime.component.html',
  styleUrls: ['./field-datetime.component.scss'],
})
export class FieldDatetimeComponent implements ControlValueAccessor, OnInit {
  @Input() label: string | null = null;

  @Input() optional = false;

  @Input() placeholder: string | null = null;

  @Input() showValidationErrorMessage = true;

  @Input() minDate!: string;

  @Input() maxDate!: string;

  @Input() type!: 'date' | 'time';

  isModalOpen = false;

  parsedDate: string | null = null;

  value: Date | null = null;

  isDisabled = false;

  onChange: (_: any) => void = () => {};

  onTouched: () => void = () => {};

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(@Self() @Optional() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  ngOnInit() {}

  // FORM CONTROL FUNCTIONS
  setValue($event: any) {
    this.parsedDate = $event.detail.value;
    this.value = new Date($event.detail.value);
    this.updateChanges();
  }

  updateChanges() {
    this.onChange(this.value);
  }

  writeValue(value: Date): void {
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

  showModal(val: boolean) {
    if (val) {
      this.parsedDate = formatISO(this.ngControl.value || new Date());
    }

    this.isModalOpen = val;
  }
}
