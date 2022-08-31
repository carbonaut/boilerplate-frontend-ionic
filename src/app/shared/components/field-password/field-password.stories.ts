import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { IonicModule } from '@ionic/angular';
import { FieldErrorMessageComponent } from '../field-error-message/field-error-message.component';
import { FieldPasswordComponent } from './field-password.component';
import { StorybookTranslateModule } from '../../../core/services/storybook-translations-loader/storybook-translations.module';

export default {
  title: 'Shared/Field Password',
  component: FieldPasswordComponent,
  decorators: [
    moduleMetadata({
      declarations: [FieldErrorMessageComponent],
      imports: [IonicModule.forRoot(), StorybookTranslateModule],
    }),
  ],
} as Meta;

const Template: Story<FieldPasswordComponent> = (args: FieldPasswordComponent) => ({
  props: args,
});

export const MinimalConfiguration = Template.bind({});
MinimalConfiguration.args = {
  label: 'Password',
};

export const FullConfiguration = Template.bind({});
FullConfiguration.args = {
  label: 'Password',
  placeholder: 'Type your password',
  required: true,
  disabled: false,
  showValidationErrorMessage: true,
  validatePasswordStrength: true,
};
