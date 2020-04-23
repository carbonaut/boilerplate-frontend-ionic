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

import { FieldErrorMessageComponent } from './components/field-error-message/field-error-message.component';
import { FieldTextComponent } from './components/field-text/field-text.component';
import { FieldEmailComponent } from './components/field-email/field-email.component';
import { FieldPasswordComponent } from './components/field-password/field-password.component';
import { FieldNumberComponent } from './components/field-number/field-number.component';

@NgModule({
  declarations: [
    SharedExampleComponent,
    ButtonComponent,
    FieldErrorMessageComponent,
    FieldPasswordComponent,
    FieldEmailComponent,
    FieldNumberComponent,
    FieldTextComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, IonicModule, TranslateModule.forChild({})],
  exports: [
    SharedExampleComponent,
    TranslateModule,
    ButtonComponent,
    FieldErrorMessageComponent,
    FieldPasswordComponent,
    FieldEmailComponent,
    FieldNumberComponent,
    FieldTextComponent
  ],
})
export class SharedModule {}
