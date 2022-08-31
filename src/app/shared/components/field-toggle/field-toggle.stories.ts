import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { IonicModule } from '@ionic/angular';
import { FieldErrorMessageComponent } from '../field-error-message/field-error-message.component';
import { FieldToggleComponent } from './field-toggle.component';
import { StorybookTranslateModule } from '../../../core/services/storybook-translations-loader/storybook-translations.module';

export default {
  title: 'Shared/Field Toggle',
  component: FieldToggleComponent,
  decorators: [
    moduleMetadata({
      declarations: [FieldErrorMessageComponent],
      imports: [IonicModule.forRoot(), StorybookTranslateModule],
    }),
  ],
} as Meta;

const Template: Story<FieldToggleComponent> = (args: FieldToggleComponent) => ({
  props: args,
});

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
