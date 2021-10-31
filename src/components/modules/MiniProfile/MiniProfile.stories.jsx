import React from 'react';
import MiniProfile from './MiniProfile';

export default {
  title: 'Elements/MiniProfile',
  component: MiniProfile,
  args: {
    username: 'jekb2019',
    image: 'https://source.unsplash.com/WLUHO9A_xik/',
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
