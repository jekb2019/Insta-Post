import React from 'react';
import UploadPost from './UploadPost';

export default {
  title: 'Modules/UploadPost',
  component: EditPost,
  args: {},
};

const Template = (args) => <UploadPost {...args} />;
export const Primary = Template.bind({});
