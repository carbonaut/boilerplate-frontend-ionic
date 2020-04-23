import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedExampleComponent } from './components/shared-example/shared-example.component';
import { ButtonComponent } from './components/button/button.component';

// ================================================================================================
// FORM COMPONENTS
// ================================================================================================

import { AppFieldPasswordComponent } from './components/app-field-password/app-field-password.component';
import { AppFieldEmailComponent } from './components/app-field-email/app-field-email.component';
import { AppFieldErrorMessageComponent } from './components/app-field-error-message/app-field-error-message.component';
import { AppFieldNumberComponent } from './components/app-field-number/app-field-number.component';
import { AppFieldTextComponent } from './components/app-field-text/app-field-text.component';

@NgModule({
  declarations: [
    SharedExampleComponent,
    ButtonComponent,
    AppFieldErrorMessageComponent,
    AppFieldPasswordComponent,
    AppFieldEmailComponent,
    AppFieldNumberComponent,
    AppFieldTextComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, IonicModule, TranslateModule.forChild({})],
  exports: [
    SharedExampleComponent,
    TranslateModule,
    ButtonComponent,
    AppFieldErrorMessageComponent,
    AppFieldPasswordComponent,
    AppFieldEmailComponent,
    AppFieldNumberComponent,
  ],
})
export class SharedModule {}
