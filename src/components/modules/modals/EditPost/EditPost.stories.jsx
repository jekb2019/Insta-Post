import React from 'react';
import EditPost from './EditPost';

export default {
  title: 'Modules/EditPost',
  component: EditPost,
  args: {},
};

const Template = (args) => <EditPost {...args} />;
export const Primary = Template.bind({});
