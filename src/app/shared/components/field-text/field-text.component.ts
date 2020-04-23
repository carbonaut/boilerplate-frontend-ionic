import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-field-text',
  templateUrl: './field-text.component.html',
  styleUrls: ['./field-text.component.scss'],
})
export class FieldTextComponent implements OnInit {
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
