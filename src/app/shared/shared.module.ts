import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgOtpInputModule } from 'ng-otp-input';
import { SharedExampleComponent } from './components/shared-example/shared-example.component';
import { ButtonComponent } from './components/button/button.component';

// ================================================================================================
// FORM COMPONENTS
// ================================================================================================

import { FieldErrorMessageComponent } from './components/field-error-message/field-error-message.component';
import { FieldInputComponent } from './components/field-input/field-input.component';
import { FieldPasswordComponent } from './components/field-password/field-password.component';
import { FieldRadioComponent } from './components/field-radio/field-radio.component';
import { FieldCheckboxComponent } from './components/field-checkbox/field-checkbox.component';
import { FieldOtpComponent } from './components/field-otp/field-otp.component';
import { FieldSelectComponent } from './components/field-select/field-select.component';

@NgModule({
  declarations: [
    SharedExampleComponent,
    ButtonComponent,
    FieldErrorMessageComponent,
    FieldPasswordComponent,
    FieldInputComponent,
    FieldRadioComponent,
    FieldCheckboxComponent,
    FieldOtpComponent,
    FieldSelectComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    NgOtpInputModule,
    TranslateModule.forChild({}),
  ],
  exports: [
    SharedExampleComponent,
    TranslateModule,
    ButtonComponent,
    FieldErrorMessageComponent,
    FieldPasswordComponent,
    FieldInputComponent,
    FieldRadioComponent,
    FieldCheckboxComponent,
    FieldOtpComponent,
    FieldSelectComponent,
  ],
})
export class SharedModule {}
