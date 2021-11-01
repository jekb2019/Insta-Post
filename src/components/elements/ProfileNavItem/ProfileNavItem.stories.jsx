import React from 'react';
import ProfileNavItem from './ProfileNavItem';

export default {
  title: 'Elements/ProfileNavItem',
  component: ProfileNavItem,
  args: {
    label: 'My Page',
    onClick: () => {
      console.log('Item Clicked');
    },
  },
};

const Template = (args) => <ProfileNavItem {...args} />;

export const Primary = Template.bind({});
