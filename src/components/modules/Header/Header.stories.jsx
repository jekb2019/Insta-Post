import React from 'react';
import Header from './Header';

export default {
  title: 'Modules/Header',
  component: Header,
  args: {
    name: 'Jason Ko',
    username: 'jekb_2019',
    profileImg: 'https://source.unsplash.com/WLUHO9A_xik/',
  },
};

const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});
