import { Page } from './Page';
import * as HeaderStories from './Header.stories';

export default {
  title: 'Example/Page',
};

const Template = (args) => Page(args);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  // More on composing args: https://storybook.js.org/docs/web-components/writing-stories/args#args-composition
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
