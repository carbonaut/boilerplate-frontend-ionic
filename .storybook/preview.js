import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
setCompodocJson(docJson);

const preview = { parameters: {
  actions: { argTypesRegex: ['^on[A-Z].*', '^ion[A-Z].*'] },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
}};

export default preview;
