import React from 'react';
import ProfileImg from './ProfileImg';

export default {
  title: 'Elements/ProfileImg',
  component: ProfileImg,
  args: {
    borderColor: 'gray',
  },
};

const Template = (args) => <ProfileImg {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  borderColor: 'red',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};
