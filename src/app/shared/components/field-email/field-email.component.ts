import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-field-email',
  templateUrl: './field-email.component.html',
  styleUrls: ['./field-email.component.scss'],
})
export class FieldEmailComponent implements OnInit {
  @Input() control: FormControl;
  @Input() placeholder: string;
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
    this.control.setValidators([Validators.email]);
  }
}
