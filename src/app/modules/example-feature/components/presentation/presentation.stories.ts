/* tslint:disable:ter-indent */
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { IonicModule } from '@ionic/angular';
import { PresentationComponent } from './presentation.component';
import { StorybookTranslateModule } from '../../../../core/services/storybook-translations-loader/storybook-translations.module';

const componentNotes = {
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
};

storiesOf('Example/Presentation Component', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [StorybookTranslateModule, IonicModule],
    })
  )
  .add(
    'Variant A',
    () => ({
      component: PresentationComponent,
      props: {
        myProp: text('myProp', 'initial value'),
        onAction: action('An action!'),
      },
    }),
    {
      notes: componentNotes,
    }
  )
  .add(
    'Variant B',
    () => ({
      component: PresentationComponent,
      props: {},
    }),
    {
      notes: componentNotes,
    }
  );
