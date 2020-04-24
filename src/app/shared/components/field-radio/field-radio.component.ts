import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldRadioOption } from './field-radio.interface';

const TOTAL_OPTIONS_TOGGLE_THEME = 2;

@Component({
  selector: 'app-field-radio',
  templateUrl: './field-radio.component.html',
  styleUrls: ['./field-radio.component.scss'],
})
export class FieldRadioComponent implements OnInit {
  @Input() control: FormControl;
  @Input() label: string;
  @Input() required = false;
  @Input() disabled = false;
  @Input() theme: 'toggle' | 'default' = 'default';
  @Input() options: FieldRadioOption[] = [];
  @Input() showValidationErrorMessage = true;

  ngOnInit() {
    this.validateThemeField();

    if (!this.control.value) {
      this.selectDefaultOption();
    }
  }

  trackByOptions(index: number, option: FieldRadioOption) {
    return option.value;
  }

  private validateThemeField() {
    if (this.theme === 'toggle' && this.options.length !== TOTAL_OPTIONS_TOGGLE_THEME) {
      throw new Error('Theme "toggle" requires 2 options.');
    }
  }

  private selectDefaultOption() {
    this.control.setValue(this.options[0] !== undefined ? this.options[0].value : null);
  }
}
