import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FieldSelectOption } from './field-select.interface';
import { FieldRadioOption } from '../field-radio/field-radio.interface';

@Component({
  selector: 'app-field-select',
  templateUrl: './field-select.component.html',
  styleUrls: ['./field-select.component.scss'],
})
export class FieldSelectComponent implements OnInit {
  @Input() control: FormControl;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() required = false;
  @Input() disabled = false;
  @Input() options: FieldSelectOption[] = [];
  @Input() showValidationErrorMessage = true;
  @Input() multiple = false;

  ngOnInit() {
    if (this.disabled) {
      this.control.disable();
    }

    this.setupValidators();
  }

  trackByOptions(index: number, option: FieldRadioOption) {
    return option.value;
  }

  private setupValidators() {
    if (this.required) {
      this.control.setValidators(Validators.required);
    }
  }
}
