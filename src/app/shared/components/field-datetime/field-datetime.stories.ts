import { Meta, StoryFn, applicationConfig, moduleMetadata } from '@storybook/angular';
import { FieldDatetimeComponent } from './field-datetime.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { importProvidersFrom } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FieldErrorMessageComponent } from '../field-error-message/field-error-message.component';
import { formatISO } from 'date-fns';
import { StorybookTranslateModule } from '../../../core/services/storybook-translations-loader/storybook-translations.module';

export default {
  title: 'Shared/Field Datetime',
  component: FieldDatetimeComponent,
  argTypes: {
    showValidationErrorMessage: { control: { type: 'boolean' } },
    placeholder: { control: { type: 'string' } },
  },
  decorators: [
    moduleMetadata({
      declarations: [FieldErrorMessageComponent],
      imports: [IonicModule.forRoot(), FormsModule, ReactiveFormsModule, StorybookTranslateModule],
    }),
    applicationConfig({
      providers: [importProvidersFrom([IonicModule.forRoot(), StorybookTranslateModule])],
    }),
  ],
} as Meta;

const Template: StoryFn<FieldDatetimeComponent> = (args: FieldDatetimeComponent) => {
  const form: FormGroup = new FormGroup({
    datetime: new FormControl(formatISO(new Date()), Validators.required),
  });

  return {
    component: FieldDatetimeComponent,
    template: `
      <form style="height: 300px; display: flex; align-items: flex-end;" [formGroup]="form">
        <app-field-datetime
          formControlName="datetime"
          [placeholder]="placeholder"
          [showValidationErrorMessage]="showValidationErrorMessage"
        >
        </app-field-datetime>
      </form>
    `,
    props: {
      ...args,
      form,
    },
  };
};

export const Default = Template.bind({});
Default.args = {
  showValidationErrorMessage: true,
  placeholder: '02:00',
};

export const Error: StoryFn<FieldDatetimeComponent> = (args: FieldDatetimeComponent) => {
  const form: FormGroup = new FormGroup({
    datetime: new FormControl(null, Validators.required),
  });

  return {
    component: FieldDatetimeComponent,
    template: `
      <form style="height: 300px; display: flex; align-items: flex-end;" [formGroup]="form">
        <app-field-datetime
          formControlName="datetime"
          [placeholder]="'00:20'"
          [showValidationErrorMessage]="true"
        >
        </app-field-datetime>
      </form>
    `,
    props: {
      ...args,
      form,
    },
  };
};
