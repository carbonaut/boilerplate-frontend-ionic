/* tslint:disable:ter-indent */
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FieldPasswordComponent } from './field-password.component';
import { StorybookTranslateModule } from '../../../core/services/storybook-translations-loader/storybook-translations.module';
import { FieldErrorMessageComponent } from '../field-error-message/field-error-message.component';

storiesOf('Form/Password field', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      declarations: [FieldErrorMessageComponent],
      imports: [StorybookTranslateModule, CommonModule, ReactiveFormsModule, IonicModule],
    })
  )
  .add('Minimal configuration', () => ({
    component: FieldPasswordComponent,
    props: {
      control: new FormControl(),
    },
  }))
  .add('Full configuration', () => ({
    component: FieldPasswordComponent,
    props: {
      control: new FormControl(),
      label: text('label', 'Password'),
      placeholder: text('placeholder', 'Type your password'),
      required: boolean('required', true),
      disabled: boolean('disabled', false),
      showValidationErrorMessage: boolean('showValidationErrorMessage', true),
      validatePasswordStrength: boolean('validatePasswordStrength', true),
    },
  }));
