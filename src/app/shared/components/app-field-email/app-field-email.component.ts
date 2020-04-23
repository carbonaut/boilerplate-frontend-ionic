import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-app-field-email',
  templateUrl: './app-field-email.component.html',
  styleUrls: ['./app-field-email.component.scss'],
})
export class AppFieldEmailComponent implements OnInit {
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
