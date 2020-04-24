/* tslint:disable:ter-indent */
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgOtpInputModule } from 'ng-otp-input';
import { FieldOtpComponent } from './field-otp.component';
import { StorybookTranslateModule } from '../../../core/services/storybook-translations-loader/storybook-translations.module';
import { FieldErrorMessageComponent } from '../field-error-message/field-error-message.component';

storiesOf('Form/OTP field', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      declarations: [FieldErrorMessageComponent],
      imports: [
        StorybookTranslateModule,
        CommonModule,
        ReactiveFormsModule,
        IonicModule,
        NgOtpInputModule,
      ],
    })
  )
  .add('Minimal configuration', () => ({
    component: FieldOtpComponent,
    props: {
      control: new FormControl(),
      label: text('label', 'Verification code'),
    },
  }))
  .add('Full configuration', () => ({
    component: FieldOtpComponent,
    props: {
      control: new FormControl(),
      label: text('label', 'Verification code'),
      length: number('length', 4),
      placeholder: text('placeholder', '*'),
      showValidationErrorMessage: boolean('showValidationErrorMessage', true),
    },
  }));
