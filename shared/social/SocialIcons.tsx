import React from 'react';
import type { FC } from 'react';
import { SocialIconsProps } from './type';
import {
  InstagramIcon,
  FacebookIcon,
  GoogleIcon,
  YoutubeIcon,
} from '@/shared/svg/icons';

const SocialIcons: FC<SocialIconsProps> = ({
  colorFill = '#FBFBFB',
  colorStroke = '#FBFBFB',
}) => {
  return (
    <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 h-[18px]">
      <a href="https://www.instagram.com/zavivka.com.ua/" target="_blank">
        <InstagramIcon colorFill={colorFill} colorStroke={colorStroke} />
      </a>
      <a href="https://www.facebook.com/curlstudio" target="_blank">
        <FacebookIcon colorFill={colorFill} colorStroke={colorStroke} />
      </a>
      <a href="https://www.youtube.com/@ZavivkaComUa" target="_blank">
        <YoutubeIcon colorFill={colorFill} colorStroke={colorStroke} />
      </a>
      <a href="https://g.co/kgs/HM6P1Wj" target="_blank">
        <GoogleIcon colorFill={colorFill} colorStroke={colorStroke} />
      </a>
    </div>
  );
};

export default SocialIcons;
