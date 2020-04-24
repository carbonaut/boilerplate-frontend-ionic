/* tslint:disable:ter-indent */
import { withKnobs, text, object, boolean } from '@storybook/addon-knobs';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FieldRadioComponent } from './field-radio.component';
import { StorybookTranslateModule } from '../../../core/services/storybook-translations-loader/storybook-translations.module';
import { FieldErrorMessageComponent } from '../field-error-message/field-error-message.component';

storiesOf('Form/Radio field', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      declarations: [FieldErrorMessageComponent],
      imports: [StorybookTranslateModule, CommonModule, ReactiveFormsModule, IonicModule],
    })
  )
  .add('Minimal configuration (default theme)', () => ({
    component: FieldRadioComponent,
    props: {
      control: new FormControl(),
      label: text('label', 'Foods'),
      options: object('options', [
        { label: 'Burrito', value: '1' },
        { label: 'Pizza', value: '2' },
        {
          label: 'Lasagna',
          value: '3',
        },
        { label: 'Pasta', value: '4' },
      ]),
    },
  }))
  .add('Minimal configuration (toggle theme)', () => ({
    component: FieldRadioComponent,
    props: {
      control: new FormControl(),
      theme: text('theme', 'toggle'),
      label: text('label', 'Sex'),
      options: object('options', [
        { label: 'Female', value: 'female' },
        { label: 'Male', value: 'male' },
      ]),
    },
  }))
  .add('Form options with icons', () => ({
    component: FieldRadioComponent,
    props: {
      control: new FormControl(),
      theme: text('theme', 'toggle'),
      label: text('label', 'Sex'),
      options: object('options', [
        { icon: 'female-outline', label: 'Female', value: 'female' },
        {
          icon: 'male-outline',
          label: 'Male',
          value: 'male',
        },
      ]),
    },
  }))
  .add('Full configuration', () => ({
    component: FieldRadioComponent,
    props: {
      control: new FormControl(),
      theme: text('theme', 'default'),
      label: text('label', 'Sex'),
      required: boolean('required', true),
      disabled: boolean('disabled', false),
      showValidationErrorMessage: boolean('showValidationErrorMessage', true),
      options: object('options', [
        { icon: 'female-outline', label: 'Female', value: 'female' },
        {
          icon: 'male-outline',
          label: 'Male',
          value: 'male',
        },
      ]),
    },
  }));
