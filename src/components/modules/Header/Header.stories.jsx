import React from 'react';
import Header from './Header';

export default {
  title: 'Module/Header',
  component: Header,
  args: {
    name: 'Jason Ko',
  },
};

const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});
