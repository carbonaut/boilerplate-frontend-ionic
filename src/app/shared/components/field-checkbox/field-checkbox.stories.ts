import { applicationConfig, Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { IonicModule } from '@ionic/angular';
import { FieldCheckboxComponent } from './field-checkbox.component';
import { FieldErrorMessageComponent } from '../field-error-message/field-error-message.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StorybookTranslateModule } from '../../../core/services/storybook-translations-loader/storybook-translations.module';
import { importProvidersFrom } from '@angular/core';

export default {
  title: 'Shared/Field Checkbox',
  component: FieldCheckboxComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [FieldErrorMessageComponent],
      imports: [IonicModule.forRoot(), FormsModule, ReactiveFormsModule, StorybookTranslateModule],
    }),
    applicationConfig({
      providers: [importProvidersFrom([IonicModule.forRoot()])],
    }),
  ],
} as Meta;

const Template: StoryFn<FieldCheckboxComponent> = (args: FieldCheckboxComponent) => {
  const form: FormGroup = new FormGroup({
    checkbox: new FormControl(),
  });

  return {
    component: FieldCheckboxComponent,
    template: `
      <form [formGroup]="form">
        <app-field-checkbox
          formControlName="checkbox"
          [required]="required"
          [disabled]="disabled"
          [label]="label"
          [showValidationErrorMessage]="showValidationErrorMessage"></app-field-checkbox>
      </form>
    `,
    props: {
      ...args,
      form: form,
    },
  };
};

export const MinimalConfiguration = Template.bind({});
MinimalConfiguration.args = {
  label: 'Terms and conditions accepted',
};

export const FullConfiguration = Template.bind({});
FullConfiguration.args = {
  label: 'Terms and conditions accepted',
  required: true,
  disabled: false,
  showValidationErrorMessage: true,
};
