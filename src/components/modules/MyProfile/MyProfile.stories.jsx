import React from 'react';
import MyProfile from './MyProfile';

export default {
  title: 'Modules/MyProfile',
  component: MyProfile,
  args: {},
};

const Template = (args) => <MyProfile {...args} />;

export const Primary = Template.bind({});
