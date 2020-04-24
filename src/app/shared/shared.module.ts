import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedExampleComponent } from './components/shared-example/shared-example.component';
import { ButtonComponent } from './components/button/button.component';
import { ModalExampleComponent } from './components/modal-example/modal-example.component';

// ================================================================================================
// FORM COMPONENTS
// ================================================================================================

import { FieldErrorMessageComponent } from './components/field-error-message/field-error-message.component';
import { FieldTextComponent } from './components/field-text/field-text.component';
import { FieldEmailComponent } from './components/field-email/field-email.component';
import { FieldPasswordComponent } from './components/field-password/field-password.component';
import { FieldNumberComponent } from './components/field-number/field-number.component';
import { FieldRadioComponent } from './components/field-radio/field-radio.component';
import { FieldCheckboxComponent } from './components/field-checkbox/field-checkbox.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    SharedExampleComponent,
    ModalComponent,
    ModalExampleComponent,
    ButtonComponent,
    FieldErrorMessageComponent,
    FieldPasswordComponent,
    FieldEmailComponent,
    FieldNumberComponent,
    FieldTextComponent,
    FieldRadioComponent,
    FieldCheckboxComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, IonicModule, TranslateModule.forChild({})],
  entryComponents: [ModalExampleComponent],
  exports: [
    SharedExampleComponent,
    ModalComponent,
    ModalExampleComponent,
    TranslateModule,
    ButtonComponent,
    FieldErrorMessageComponent,
    FieldPasswordComponent,
    FieldEmailComponent,
    FieldNumberComponent,
    FieldTextComponent,
    FieldRadioComponent,
    FieldCheckboxComponent,
  ],
})
export class SharedModule {}
