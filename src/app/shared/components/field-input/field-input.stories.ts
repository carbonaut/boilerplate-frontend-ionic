import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { IonicModule } from '@ionic/angular';
import { FieldErrorMessageComponent } from '../field-error-message/field-error-message.component';
import { FieldInputComponent } from './field-input.component';

export default {
  title: 'Shared/Field Input',
  component: FieldInputComponent,
  decorators: [
    moduleMetadata({
      declarations: [FieldErrorMessageComponent],
      imports: [IonicModule.forRoot()],
    }),
  ],
} as Meta;

const Template: Story<FieldInputComponent> = (args: FieldInputComponent) => ({
  props: args,
});

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
