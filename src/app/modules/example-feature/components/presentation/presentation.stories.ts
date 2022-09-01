import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { IonicModule } from '@ionic/angular';
import { PresentationComponent } from './presentation.component';
import { StorybookTranslateModule } from '../../../../core/services/storybook-translations-loader/storybook-translations.module';

export default {
  title: 'Example/Presentation',
  component: PresentationComponent,
  decorators: [
    moduleMetadata({
      imports: [IonicModule.forRoot(), StorybookTranslateModule],
    }),
  ],
} as Meta;

export const withMarkdown = () => PresentationComponent;
withMarkdown.story = {
  parameters: {
    notes: {
      markdown: `
    # Stories Notes
    When creating or updating a component, the following characteristics should be
    documented here:\n
    Unusual component behavior that defies the teams common assumptions \n \n
    - CSS variables \n
    - Expected Inputs and Ouputs \n
    - All variants with it's respective story \n
    For notes you can write inline markdown or import it from it's own file. You can 
    even import multiple notes texts. For more information, visit the
    <a href="https://www.npmjs.com/package/@storybook/addon-notes"> addon page</a>.
    \n
    \n
    \n
    ## Story name\n
    Each story must have an unique name\n
    ## CSS Variables
    Each CSS variable should have:
    \`--c-variable\`\n
    Brief description of css variable
    \nDefault: --default-value;
    \n
    \n
    `,
    },
  },
};

const Template: Story<PresentationComponent> = (args: PresentationComponent) => ({
  props: args,
});

export const VariantA = Template.bind({});
VariantA.args = {
  myProp: 'initial value',
  onAction: 'An action!',
};

export const VariantB = Template.bind({});
VariantB.args = {};
