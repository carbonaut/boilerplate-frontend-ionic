import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-field-error-message',
  templateUrl: './field-error-message.component.html',
  styleUrls: ['./field-error-message.component.scss'],
})
export class FieldErrorMessageComponent implements AfterViewInit, OnDestroy {
  @Input() visible = true;
  @Input() currentControl: FormControl;

  errorMessage = null;
  private controlSubscription;

  ngAfterViewInit() {
    this.controlSubscription = this.currentControl.valueChanges.subscribe(() => {
      this.getErrorMessage();
    });
  }

  ngOnDestroy() {
    if (this.controlSubscription) {
      this.controlSubscription.unsubscribe();
    }
  }

  private getErrorMessage() {
    this.errorMessage = null;

    if (this.currentControl.errors) {
      Object.keys(this.currentControl.errors).forEach((key) => {
        this.errorMessage = this.getValidatorErrorMessage(key);
      });
    }
  }

  private getValidatorErrorMessage(validatorName: string) {
    // console.log('[getValidatorErrorMessage]', validatorName);

    switch (validatorName) {
      case 'email':
        return 'FORM_VALIDATION_MESSAGES.EMAIL';

      case 'required':
        return 'FORM_VALIDATION_MESSAGES.REQUIRED';

      case 'weakPassword':
        return 'FORM_VALIDATION_MESSAGES.WEAK_PASSWORD';

      default:
        return 'FORM_VALIDATION_MESSAGES.INVALID';
    }
  }
}
