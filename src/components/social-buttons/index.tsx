import React from 'react';
import FacebookVariant from './variants/facebook-variant';
import GoogleVariant from './variants/google-variant';
import GithubVariant from './variants/github-variant';
import TwitterVariant from './variants/twitter-variant';

type Props = {
  onClick: Function,
  variant: 'google' | 'facebook' | 'twitter' | 'github',
  label: string,
  // eslint-disable-next-line react/require-default-props
  type?: 'default' | 'circle',
};

const variants = {
  facebook: FacebookVariant,
  google: GoogleVariant,
  github: GithubVariant,
  twitter: TwitterVariant,
};

function SocialButtons({
 onClick, variant, label, type 
}: Props) {
  const ButtonComponent = variants[variant];
  return (
    <ButtonComponent type={type || 'default'} label={label} onClick={onClick} />
  );
}

export default SocialButtons;
