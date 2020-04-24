import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-field-input',
  templateUrl: './field-input.component.html',
  styleUrls: ['./field-input.component.scss'],
})
export class FieldInputComponent implements OnInit {
  @Input() control: FormControl;
  @Input() type: 'text' | 'number' | 'email' = 'text';
  @Input() mask: 'phone' | 'zip-code' | 'svnr';
  @Input() label: string;
  @Input() placeholder: string;
  @Input() required = false;
  @Input() disabled = false;
  @Input() showValidationErrorMessage = true;
  @Input() icon;

  ngOnInit() {
    if (this.disabled) {
      this.control.disable();
    }

    this.setupValidators();
  }

  private setupValidators() {
    const validators = [];

    if (this.required) {
      validators.push(Validators.required);
    }

    if (this.type === 'email') {
      validators.push(Validators.email);
    }

    this.control.setValidators(validators);
  }
}
