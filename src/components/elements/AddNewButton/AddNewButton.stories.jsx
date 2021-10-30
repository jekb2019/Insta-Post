import React from 'react';
import AddNewButton from './AddNewButton';

export default {
  title: 'Element/AddNewButton',
  component: AddNewButton,
  args: {
    color: 'orange',
    size: 'large',
  },
};

const Template = (args) => <AddNewButton {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};
export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  color: 'green',
};
export const Large = Template.bind({});
Large.args = {
  size: 'large',
};
