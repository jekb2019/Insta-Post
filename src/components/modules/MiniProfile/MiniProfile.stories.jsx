import React from 'react';
import MiniProfile from './MiniProfile';

export default {
  title: 'Shared/MiniProfile',
  component: MiniProfile,
  args: {
    username: 'jekb2019',
  },
};

const Template = (args) => <MiniProfile {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 'small',
};

export const WithLocation = Template.bind({});
WithLocation.args = {
  size: 'small',
  location: 'Auckland',
};
