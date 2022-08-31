import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { IonicModule } from '@ionic/angular';
import { FieldErrorMessageComponent } from '../field-error-message/field-error-message.component';
import { FieldOtpComponent } from './field-otp.component';
import { StorybookTranslateModule } from '../../../core/services/storybook-translations-loader/storybook-translations.module';

export default {
  title: 'Shared/Field OTP',
  component: FieldOtpComponent,
  decorators: [
    moduleMetadata({
      declarations: [FieldErrorMessageComponent],
      imports: [IonicModule.forRoot(), StorybookTranslateModule],
    }),
  ],
} as Meta;

const Template: Story<FieldOtpComponent> = (args: FieldOtpComponent) => ({
  props: args,
});

export const MinimalConfiguration = Template.bind({});
MinimalConfiguration.args = {
  label: 'Verification code',
};

export const FullConfiguration = Template.bind({});
FullConfiguration.args = {
  label: 'Verification code',
  length: 4,
  placeholder: '*',
  showValidationErrorMessage: true,
};
