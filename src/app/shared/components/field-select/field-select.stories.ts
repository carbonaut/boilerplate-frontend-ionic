import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { IonicModule } from '@ionic/angular';
import { FieldErrorMessageComponent } from '../field-error-message/field-error-message.component';
import { FieldSelectComponent } from './field-select.component';
import { StorybookTranslateModule } from '../../../core/services/storybook-translations-loader/storybook-translations.module';

export default {
  title: 'Shared/Field Select',
  component: FieldSelectComponent,
  decorators: [
    moduleMetadata({
      declarations: [FieldErrorMessageComponent],
      imports: [IonicModule.forRoot(), StorybookTranslateModule],
    }),
  ],
} as Meta;

const Template: Story<FieldSelectComponent> = (args: FieldSelectComponent) => ({
  props: args,
});

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
