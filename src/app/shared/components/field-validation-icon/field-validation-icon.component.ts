import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-field-validation-icon',
  templateUrl: './field-validation-icon.component.html',
  styleUrls: ['./field-validation-icon.component.scss'],
})
export class FieldValidationIconComponent {
  @Input() icon: string;

  @Input() control: FormControl;
}
