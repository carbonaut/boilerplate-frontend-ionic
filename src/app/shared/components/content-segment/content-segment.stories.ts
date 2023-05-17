import { IonicModule } from '@ionic/angular';
import { applicationConfig, Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { ContentSegmentComponent } from './content-segment.component';
import { importProvidersFrom } from '@angular/core';
import { StorybookTranslateModule } from '../../../core/services/storybook-translations-loader/storybook-translations.module';

export default {
  title: 'Shared/Content Segment',
  component: ContentSegmentComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [IonicModule.forRoot(), StorybookTranslateModule],
    }),
    applicationConfig({
      providers: [importProvidersFrom([IonicModule.forRoot()])],
    }),
  ],
} as Meta;

const Template: StoryFn<ContentSegmentComponent> = (args: ContentSegmentComponent) => {
  let segment = 'general';
  return {
    component: ContentSegmentComponent,
    template: `
      <app-content-segment
        [options]="options"
        [(value)]="segment">
      </app-content-segment>
      <div class="u-padding--xxl" [ngSwitch]="segment">
        <div class="u-text-align--center" style="font-size: 40px">
          <ng-container *ngSwitchCase="'general'">General content</ng-container>
          <ng-container *ngSwitchCase="'observations'">Observations content</ng-container>
          <ng-container *ngSwitchCase="'other_fields'">Other content</ng-container>
        </div>
      </div>
    `,

    props: { ...args, segment },
  };
};

export const Default = Template.bind({});
Default.args = {
  options: [
    {
      label: 'General',
      value: 'general',
    },
    {
      label: 'Observations',
      value: 'observations',
    },
    {
      label: 'Other fields',
      value: 'other_fields',
    },
  ],
};
