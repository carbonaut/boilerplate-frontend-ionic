import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-field-checkbox',
  templateUrl: './field-checkbox.component.html',
  styleUrls: ['./field-checkbox.component.scss'],
})
export class FieldCheckboxComponent implements OnInit {
  @Input() control: FormControl;
  @Input() label: string;
  @Input() required = false;
  @Input() disabled = false;
  @Input() showValidationErrorMessage = true;

  ngOnInit() {
    if (this.disabled) {
      this.control.disable();
    }

    this.setupValidators();
  }

  private setupValidators() {
    if (this.required) {
      this.control.setValidators([Validators.requiredTrue]);
    }
  }
}
