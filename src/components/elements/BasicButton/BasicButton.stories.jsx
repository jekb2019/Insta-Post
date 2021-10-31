import React from 'react';
import BasicButton from './BasicButton';

export default {
  title: 'Elements/BasicButton',
  component: BasicButton,
  args: {
    color: 'white',
    size: 'small',
  },
};

const Template = (args) => <BasicButton {...args} />;

export const Primary_OK = Template.bind({});
Primary_OK.args = {
  label: 'OK',
  backgroundColor: 'green',
};

export const Primary_Cancel = Template.bind({});
Primary_Cancel.args = {
  label: 'Cancel',
  backgroundColor: 'red',
};
