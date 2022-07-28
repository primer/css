import { Story, Meta } from '@storybook/web-components';
import { Page, PageProps } from './Page';
import * as HeaderStories from './Header.stories';

export default {
  title: 'Example/Page',
} as Meta;

const Template: Story<Partial<PageProps>> = (args) => Page(args);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  // More on composing args: https://storybook.js.org/docs/web-components/writing-stories/args#args-composition
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
