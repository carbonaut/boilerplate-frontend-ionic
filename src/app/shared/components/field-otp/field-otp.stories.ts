import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { IonicModule } from '@ionic/angular';
import { FieldErrorMessageComponent } from '../field-error-message/field-error-message.component';
import { FieldOtpComponent } from './field-otp.component';
import { StorybookTranslateModule } from '../../../core/services/storybook-translations-loader/storybook-translations.module';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgOtpInputModule } from 'ng-otp-input';

export default {
  title: 'Shared/Field OTP',
  component: FieldOtpComponent,
  decorators: [
    moduleMetadata({
      declarations: [FieldErrorMessageComponent],
      imports: [
        IonicModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        StorybookTranslateModule,
        NgOtpInputModule,
      ],
    }),
  ],
} as Meta;

const Template: Story<FieldOtpComponent> = (args: FieldOtpComponent) => {
  const form: FormGroup = new FormGroup({
    otp: new FormControl(['']),
  });

  return {
    component: FieldOtpComponent,
    template: `
      <form [formGroup]="form">
        <app-field-otp
          formControlName="otp"
          [label]="label"
          [length]="length"
          [placeholder]="placeholder"
          [showValidationErrorMessage]="true"
        >
        </app-field-otp>
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
  label: 'Verification code',
};

export const FullConfiguration = Template.bind({});
FullConfiguration.args = {
  label: 'Verification code',
  length: 4,
  placeholder: '*',
  showValidationErrorMessage: true,
};
