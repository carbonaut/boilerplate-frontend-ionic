/* tslint:disable:ter-indent */
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FieldInputComponent } from './field-input.component';
import { StorybookTranslateModule } from '../../../core/services/storybook-translations-loader/storybook-translations.module';
import { FieldErrorMessageComponent } from '../field-error-message/field-error-message.component';

storiesOf('Form/Input field', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      declarations: [FieldErrorMessageComponent],
      imports: [StorybookTranslateModule, CommonModule, ReactiveFormsModule, IonicModule],
    })
  )
  .add('E-mail field configuration', () => ({
    component: FieldInputComponent,
    props: {
      control: new FormControl(),
      type: text('type', 'email'),
      label: text('label', 'E-mail'),
      placeholder: text('placeholder', 'example@gmail.com'),
    },
  }))
  .add('Number field configuration', () => ({
    component: FieldInputComponent,
    props: {
      control: new FormControl(),
      type: text('type', 'number'),
      label: text('label', 'Age'),
      placeholder: text('placeholder', 'Type your age'),
    },
  }))
  .add('Text field configuration', () => ({
    component: FieldInputComponent,
    props: {
      control: new FormControl(),
      type: text('type', 'text'),
      label: text('label', 'Full name'),
      placeholder: text('placeholder', 'Type your full name'),
    },
  }))
  .add('Full configuration', () => ({
    component: FieldInputComponent,
    props: {
      control: new FormControl(),
      type: text('type', 'text'),
      mask: text('mask', 'phone'),
      label: text('label', 'Phone'),
      icon: text('icon', 'call-outline'),
      placeholder: text('placeholder', '(99) 9999-9999'),
      required: boolean('required', true),
      disabled: boolean('disabled', false),
      showValidationErrorMessage: boolean('showValidationErrorMessage', true),
    },
  }));
