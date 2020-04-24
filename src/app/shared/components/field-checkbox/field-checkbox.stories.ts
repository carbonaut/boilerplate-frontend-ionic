/* tslint:disable:ter-indent */
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FieldCheckboxComponent } from './field-checkbox.component';
import { StorybookTranslateModule } from '../../../core/services/storybook-translations-loader/storybook-translations.module';
import { FieldErrorMessageComponent } from '../field-error-message/field-error-message.component';

storiesOf('Form/Checkbox field', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      declarations: [FieldErrorMessageComponent],
      imports: [StorybookTranslateModule, CommonModule, ReactiveFormsModule, IonicModule],
    })
  )
  .add('Minimal configuration', () => ({
    component: FieldCheckboxComponent,
    props: {
      control: new FormControl(),
      label: text('label', 'Terms and conditions accepted'),
    },
  }))
  .add('Full configuration', () => ({
    component: FieldCheckboxComponent,
    props: {
      control: new FormControl(),
      label: text('label', 'Terms and conditions accepted'),
      required: boolean('required', true),
      disabled: boolean('disabled', false),
      showValidationErrorMessage: boolean('showValidationErrorMessage', true),
    },
  }));
