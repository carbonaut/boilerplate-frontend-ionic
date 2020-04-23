import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldRadioOption } from './field-radio.interface';

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
    if (!this.control.value) {
      this.selectDefaultOption();
    }
  }

  trackByOptions(index: number, option: FieldRadioOption) {
    return option.value;
  }

  private selectDefaultOption() {
    this.control.setValue(this.options[0] !== undefined ? this.options[0].value : null);
  }
}
