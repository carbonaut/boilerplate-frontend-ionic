import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { passwordStrengthValidator } from '../../../core/validators/password-strength/password-strenght.validator';

@Component({
  selector: 'app-field-password',
  templateUrl: './field-password.component.html',
  styleUrls: ['./field-password.component.scss'],
})
export class FieldPasswordComponent implements OnInit {
  @Input() control: FormControl;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() required = false;
  @Input() disabled = false;
  @Input() showValidationErrorMessage = true;
  @Input() validatePasswordStrength = false;

  showPassword = false;

  ngOnInit() {
    if (this.disabled) {
      this.control.disable();
    }

    this.setupValidators();
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  private setupValidators() {
    const validators = [Validators.minLength(8)];

    if (this.validatePasswordStrength) {
      validators.push(passwordStrengthValidator());
    }

    this.control.setValidators(validators);
  }
}
