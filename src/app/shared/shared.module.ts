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

import { AppFieldPasswordComponent } from './components/app-field-password/app-field-password.component';
import { AppFieldEmailComponent } from './components/app-field-email/app-field-email.component';
import { AppFieldErrorMessageComponent } from './components/app-field-error-message/app-field-error-message.component';
import { AppFieldNumberComponent } from './components/app-field-number/app-field-number.component';
import { AppFieldTextComponent } from './components/app-field-text/app-field-text.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    SharedExampleComponent,
    ModalComponent,
    ModalExampleComponent,
    ButtonComponent,
    AppFieldErrorMessageComponent,
    AppFieldPasswordComponent,
    AppFieldEmailComponent,
    AppFieldNumberComponent,
    AppFieldTextComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, IonicModule, TranslateModule.forChild({})],
  entryComponents: [ModalExampleComponent],
  exports: [
    SharedExampleComponent,
    ModalComponent,
    ModalExampleComponent,
    TranslateModule,
    ButtonComponent,
    AppFieldErrorMessageComponent,
    AppFieldPasswordComponent,
    AppFieldEmailComponent,
    AppFieldNumberComponent,
  ],
})
export class SharedModule {}
