import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-app-field-text',
  templateUrl: './app-field-text.component.html',
  styleUrls: ['./app-field-text.component.scss'],
})
export class AppFieldTextComponent implements OnInit {
  @Input() control: FormControl;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() required = false;
  @Input() disabled = false;
  @Input() showValidationErrorMessage = true;

  ngOnInit() {
    if (this.disabled) {
      this.control.disable();
    }
  }
}
