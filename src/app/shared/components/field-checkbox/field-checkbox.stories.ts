import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { IonicModule } from '@ionic/angular';
import { FieldCheckboxComponent } from './field-checkbox.component';
import { FieldErrorMessageComponent } from '../field-error-message/field-error-message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StorybookTranslateModule } from '../../../core/services/storybook-translations-loader/storybook-translations.module';

export default {
  title: 'Shared/Field Checkbox',
  component: FieldCheckboxComponent,
  decorators: [
    moduleMetadata({
      declarations: [FieldErrorMessageComponent],
      imports: [IonicModule.forRoot(), FormsModule, ReactiveFormsModule, StorybookTranslateModule],
    }),
  ],
} as Meta;

const Template: Story<FieldCheckboxComponent> = (args: FieldCheckboxComponent) => ({
  props: args,
});

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
