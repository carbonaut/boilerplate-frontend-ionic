/* tslint:disable:ter-indent */
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FieldEmailComponent } from './field-email.component';
import { StorybookTranslateModule } from '../../../core/services/storybook-translations-loader/storybook-translations.module';
import { FieldErrorMessageComponent } from '../field-error-message/field-error-message.component';

storiesOf('Form/E-mail field', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      declarations: [FieldErrorMessageComponent],
      imports: [StorybookTranslateModule, CommonModule, ReactiveFormsModule, IonicModule],
    })
  )
  .add('Minimal configuration', () => ({
    component: FieldEmailComponent,
    props: {
      control: new FormControl(),
    },
  }))
  .add('Full configuration', () => ({
    component: FieldEmailComponent,
    props: {
      control: new FormControl(),
      label: text('label', 'E-mail'),
      placeholder: text('placeholder', 'Type your e-mail'),
      required: boolean('required', true),
      disabled: boolean('disabled', false),
      showValidationErrorMessage: boolean('showValidationErrorMessage', true),
    },
  }));
