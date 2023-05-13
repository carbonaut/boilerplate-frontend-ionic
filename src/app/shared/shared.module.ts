import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgOtpInputModule } from 'ng-otp-input';
import { DpDatePickerModule } from 'ng2-date-picker';

// ================================================================================================
// DIRECTIVES
// ================================================================================================

import { DndDirective } from './directives/drag-and-drop.directive';

// ================================================================================================
// COMPONENTS
// ================================================================================================

import { FieldErrorMessageComponent } from './components/field-error-message/field-error-message.component';
import { FieldInputComponent } from './components/field-input/field-input.component';
import { FieldPasswordComponent } from './components/field-password/field-password.component';
import { FieldRadioComponent } from './components/field-radio/field-radio.component';
import { FieldCheckboxComponent } from './components/field-checkbox/field-checkbox.component';
import { ModalComponent } from './components/modal/modal.component';
import { FieldOtpComponent } from './components/field-otp/field-otp.component';
import { FieldSelectComponent } from './components/field-select/field-select.component';
import { FieldFileComponent } from './components/field-file/field-file.component';
import { FieldValidationIconComponent } from './components/field-validation-icon/field-validation-icon.component';
import { FieldToggleComponent } from './components/field-toggle/field-toggle.component';
import { FieldCalendarComponent } from './components/field-calendar/field-calendar.component';

import { ButtonComponent } from './components/button/button.component';
import { SharedExampleComponent } from './components/shared-example/shared-example.component';
import { ModalExampleComponent } from './components/modal-example/modal-example.component';

@NgModule({
    declarations: [
        SharedExampleComponent,
        ModalComponent,
        ModalExampleComponent,
        ButtonComponent,
        FieldErrorMessageComponent,
        FieldPasswordComponent,
        FieldInputComponent,
        FieldRadioComponent,
        FieldToggleComponent,
        FieldCheckboxComponent,
        FieldOtpComponent,
        FieldSelectComponent,
        DndDirective,
        FieldFileComponent,
        FieldValidationIconComponent,
        FieldCalendarComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        NgOtpInputModule,
        DpDatePickerModule,
        TranslateModule.forChild({}),
    ],
    exports: [
        SharedExampleComponent,
        ModalComponent,
        ModalExampleComponent,
        TranslateModule,
        ButtonComponent,
        FieldErrorMessageComponent,
        FieldPasswordComponent,
        FieldInputComponent,
        FieldRadioComponent,
        FieldToggleComponent,
        FieldCheckboxComponent,
        FieldOtpComponent,
        FieldSelectComponent,
        DndDirective,
        FieldFileComponent,
        FieldValidationIconComponent,
        FieldCalendarComponent,
    ]
})
export class SharedModule {}
