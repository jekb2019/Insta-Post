import React from 'react';
import ProfileImg from './ProfileImg';

export default {
  title: 'Shared/ProfileImg',
  component: ProfileImg,
};

export const Small = () => <ProfileImg size="small" />;
export const Medium = () => <ProfileImg size="medium" />;
export const Large = () => <ProfileImg size="large" />;
