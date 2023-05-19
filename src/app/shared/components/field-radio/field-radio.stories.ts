import { applicationConfig, Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { IonicModule } from '@ionic/angular';
import { FieldErrorMessageComponent } from '../field-error-message/field-error-message.component';
import { FieldRadioComponent } from './field-radio.component';
import { StorybookTranslateModule } from '../../../core/services/storybook-translations-loader/storybook-translations.module';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { importProvidersFrom } from '@angular/core';

export default {
  title: 'Shared/Field Radio',
  component: FieldRadioComponent,
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

const Template: StoryFn<FieldRadioComponent> = (args: FieldRadioComponent) => {
  const form: FormGroup = new FormGroup({
    radio1: new FormControl(''),
  });

  return {
    component: FieldRadioComponent,
    template: `
      <form [formGroup]="form">
      <app-field-radio
        formControlName="radio1"
        [label]="label"
        [options]="options"
        [required]="required"
        [disabled]="disabled"
        [showValidationErrorMessage]="showValidationErrorMessage"
      >
      </app-field-radio>
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
    {
      label: 'Burrito',
      value: 1,
    },
    {
      label: 'Pizza',
      value: 2,
    },
    {
      label: 'Lasagna',
      value: 3,
    },
    {
      label: 'Pasta',
      value: 4,
    },
  ],
};

export const MinimalConfigurationToggleTheme = Template.bind({});
MinimalConfigurationToggleTheme.args = {
  label: 'Gender',
  options: [
    {
      label: 'Female',
      value: 'female',
    },
    {
      label: 'Male',
      value: 'male',
    },
  ],
};

export const FormOptionsWithIcons = Template.bind({});
FormOptionsWithIcons.args = {
  label: 'Gender',
  options: [
    {
      label: 'Female',
      value: 'female',
      icon: 'female-outline',
    },
    {
      label: 'Male',
      value: 'male',
      icon: 'male-outline',
    },
  ],
};

export const FullConfiguration = Template.bind({});
FullConfiguration.args = {
  label: 'Gender',
  required: true,
  disabled: false,
  showValidationErrorMessage: true,
  options: [
    {
      label: 'Female',
      value: 'female',
      icon: 'female-outline',
    },
    {
      label: 'Male',
      value: 'male',
      icon: 'male-outline',
    },
  ],
};
