import { applicationConfig, Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { IonicModule } from '@ionic/angular';
import { FieldErrorMessageComponent } from '../field-error-message/field-error-message.component';
import { FieldToggleComponent } from './field-toggle.component';
import { StorybookTranslateModule } from '../../../core/services/storybook-translations-loader/storybook-translations.module';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { importProvidersFrom } from '@angular/core';

export default {
  title: 'Shared/Field Toggle',
  component: FieldToggleComponent,
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

const Template: StoryFn<FieldToggleComponent> = (args: FieldToggleComponent) => {
  const form: FormGroup = new FormGroup({
    toggle: new FormControl(),
  });

  return {
    component: FieldToggleComponent,
    template: `
      <form [formGroup]="form">
        <app-field-toggle
          formControlName="toggle"
          [label]="label"
          [options]="options"
          [required]="required"
          [disabled]="disabled"
          [showValidationErrorMessage]="showValidationErrorMessage"
        >
        </app-field-toggle>
      </form>
    `,
    props: {
      ...args,
      form,
    },
  };
};

export const MinimalConfigurationDefaultTheme = Template.bind({});
MinimalConfigurationDefaultTheme.args = {
  label: 'Foods',
  options: [
    { label: 'Burrito', value: '1' },
    { label: 'Pizza', value: '2' },
    { label: 'Lasagna', value: '3' },
    { label: 'Pasta', value: '4' },
  ],
};

export const MinimalConfigurationToggleTheme = Template.bind({});
MinimalConfigurationToggleTheme.args = {
  label: 'Gender',
  options: [
    { label: 'Female', value: 'female' },
    { label: 'Male', value: 'male' },
  ],
};

export const FormOptionsWithIcons = Template.bind({});
FormOptionsWithIcons.args = {
  label: 'Gender',
  options: [
    { icon: 'female-outline', label: 'Female', value: 'female' },
    { icon: 'male-outline', label: 'Male', value: 'male' },
  ],
};

export const FullConfiguration = Template.bind({});
FullConfiguration.args = {
  label: 'Gender',
  required: true,
  disabled: false,
  showValidationErrorMessage: true,
  options: [
    { icon: 'female-outline', label: 'Female', value: 'female' },
    { icon: 'male-outline', label: 'Male', value: 'male' },
  ],
};
