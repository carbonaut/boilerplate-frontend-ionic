import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { IonicModule } from '@ionic/angular';
import { FieldErrorMessageComponent } from '../field-error-message/field-error-message.component';
import { FieldSelectComponent } from './field-select.component';
import { StorybookTranslateModule } from '../../../core/services/storybook-translations-loader/storybook-translations.module';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

export default {
  title: 'Shared/Field Select',
  component: FieldSelectComponent,
  decorators: [
    moduleMetadata({
      declarations: [FieldErrorMessageComponent],
      imports: [IonicModule.forRoot(), FormsModule, ReactiveFormsModule, StorybookTranslateModule],
    }),
  ],
} as Meta;

const Template: Story<FieldSelectComponent> = (args: FieldSelectComponent) => {
  const form: FormGroup = new FormGroup({
    select: new FormControl(''),
  });

  return {
    component: FieldSelectComponent,
    template: `
      <form [formGroup]="form">
        <app-field-select
          formControlName="select"
          [label]="label"
          [options]="options"
          [placeholder]="placeholder"
          [multiple]="multiple"
          [required]="required"
          [disabled]="disabled"
          [showValidationErrorMessage]="showValidationErrorMessage"
        >
        </app-field-select>
      </form>
    `,
    props: {
      ...args,
      form,
    },
  };
};

export const MinimalConfiguration = Template.bind({});
MinimalConfiguration.args = {
  label: 'Pets',
  options: [
    {
      label: 'Bird',
      value: 'bird',
    },
    {
      label: 'Cat',
      value: 'cat',
    },
    {
      label: 'Dog',
      value: 'dog',
    },
    {
      label: 'Snake',
      value: 'snake',
    },
  ],
};

export const FullConfiguration = Template.bind({});
FullConfiguration.args = {
  label: 'Pets',
  required: true,
  disabled: false,
  multiple: true,
  placeholder: 'Select an option',
  showValidationErrorMessage: true,
  options: [
    {
      label: 'Bird',
      value: 'bird',
    },
    {
      label: 'Cat',
      value: 'cat',
    },
    {
      label: 'Dog',
      value: 'dog',
    },
    {
      label: 'Snake',
      value: 'snake',
    },
  ],
};
