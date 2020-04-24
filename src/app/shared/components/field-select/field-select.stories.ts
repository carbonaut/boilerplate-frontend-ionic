/* tslint:disable:ter-indent */
import { withKnobs, text, object, boolean } from '@storybook/addon-knobs';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FieldSelectComponent } from './field-select.component';
import { StorybookTranslateModule } from '../../../core/services/storybook-translations-loader/storybook-translations.module';
import { FieldErrorMessageComponent } from '../field-error-message/field-error-message.component';

storiesOf('Form/Select field', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      declarations: [FieldErrorMessageComponent],
      imports: [StorybookTranslateModule, CommonModule, ReactiveFormsModule, IonicModule],
    })
  )
  .add('Minimal configuration', () => ({
    component: FieldSelectComponent,
    props: {
      control: new FormControl(),
      label: text('label', 'Pets'),
      options: object('options', [
        { label: 'Bird', value: 'bird' },
        { label: 'Cat', value: 'cat' },
        {
          label: 'Dog',
          value: 'dog',
        },
        { label: 'Snake', value: 'snake' },
      ]),
    },
  }))
  .add('Full configuration', () => ({
    component: FieldSelectComponent,
    props: {
      control: new FormControl(),
      multiple: boolean('multiple', false),
      label: text('label', 'Pets'),
      placeholder: text('placeholder', 'Select an option'),
      required: boolean('required', true),
      disabled: boolean('disabled', false),
      showValidationErrorMessage: boolean('showValidationErrorMessage', true),
      options: object('options', [
        { label: 'Bird', value: 'bird' },
        { label: 'Cat', value: 'cat' },
        {
          label: 'Dog',
          value: 'dog',
        },
        { label: 'Snake', value: 'snake' },
      ]),
    },
  }));
