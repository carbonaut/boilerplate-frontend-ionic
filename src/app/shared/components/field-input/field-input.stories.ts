import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { IonicModule } from '@ionic/angular';
import { FieldErrorMessageComponent } from '../field-error-message/field-error-message.component';
import { FieldInputComponent } from './field-input.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StorybookTranslateModule } from '../../../core/services/storybook-translations-loader/storybook-translations.module';

export default {
  title: 'Shared/Field Input',
  component: FieldInputComponent,
  decorators: [
    moduleMetadata({
      declarations: [FieldErrorMessageComponent],
      imports: [IonicModule.forRoot(), FormsModule, ReactiveFormsModule, StorybookTranslateModule],
    }),
  ],
} as Meta;

const Template: Story<FieldInputComponent> = (args: FieldInputComponent) => {
  const form: FormGroup = new FormGroup({
    text: new FormControl(),
  });

  return {
    component: FieldInputComponent,
    template: `
      <form [formGroup]="form">
        <app-field-input
          formControlName="text"
          [label]="label"
          [type]="type"
          [placeholder]="placeholder"
          [mask]="mask"
          [ícon]="icon"
          [required]="required"
          [disabled]="disabled"
          [showValidationErrorMessage]="showValidationErrorMessage"
        >
        </app-field-input>
      </form>
    `,
    props: {
      ...args,
      form,
    },
  };
};

export const EmailField = Template.bind({});
EmailField.args = {
  label: 'E-mail',
  type: 'email',
  placeholder: 'example@gmail.com',
};

export const NumberField = Template.bind({});
NumberField.args = {
  label: 'Age',
  type: 'number',
  placeholder: 'Type your age',
};

export const TextField = Template.bind({});
TextField.args = {
  label: 'Phone',
  type: 'text',
  placeholder: '(99) 9999-9999',
  mask: 'phone',
  icon: 'call-outline',
  required: true,
  disabled: false,
  showValidationErrorMessage: true,
};
