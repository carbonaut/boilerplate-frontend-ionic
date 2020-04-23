import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-app-field-number',
  templateUrl: './app-field-number.component.html',
  styleUrls: ['./app-field-number.component.scss'],
})
export class AppFieldNumberComponent implements OnInit {
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
  }
}
