import { Component, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

/*
  Documentation: https://github.com/code-farmz/ng-otp-input
 */

@Component({
  selector: 'app-field-otp',
  templateUrl: './field-otp.component.html',
  styleUrls: ['./field-otp.component.scss'],
})
export class FieldOtpComponent {
  @ViewChild('ngOtpInput', { static: false }) ngOtpInputRef: any;

  @Input() control: FormControl;
  @Input() placeholder = '-';
  @Input() label: string;
  @Input() showValidationErrorMessage = true;
  @Input() length = 5;

  @Input() set value(value: number | string) {
    this.setValue(value);
  }

  onValueChange($event: number | string) {
    this.control.setValue($event);
  }

  setValue(val: number | string) {
    if (this.ngOtpInputRef) {
      this.ngOtpInputRef.setValue(val);
    }
  }
}
