module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/addon-docs'],
  framework: {
    name: "@storybook/angular",
    options: {}
  },
  core: {
    disableTelemetry: true,
    enableCrashReports: true
  },
  docs: {
    autodocs: true
  }
};