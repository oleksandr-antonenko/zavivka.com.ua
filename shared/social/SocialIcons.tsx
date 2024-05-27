import React from 'react';
import type {FC} from 'react';
import { SpriteSVGSocial } from '@/shared/svg';
import { SocialIconsProps } from './type';

const SocialIcons: FC<SocialIconsProps> = ({colorFill="#FBFBFB", colorStroke="#FBFBFB"}) => {
  return (
    <div className="flex items-center gap-4 h-[18px]">
        <a href="https://www.instagram.com/zavivka.com.ua/" target='_blank'>
            <SpriteSVGSocial 
                name="instagram" 
                colorFill={colorFill}
                colorStroke={colorStroke}
            />
        </a>
        <a href="https://www.facebook.com/curlstudio" target='_blank'>
            <SpriteSVGSocial 
                name="facebook"
                colorFill={colorFill}
                colorStroke={colorStroke}
            />
        </a>
        <a href="https://www.youtube.com/@ZavivkaComUa" target='_blank'>
            <SpriteSVGSocial 
                name="youtube"
                colorFill={colorFill}
                colorStroke={colorStroke}
            />
        </a>
        <a href="http://surl.li/tuxzk" target='_blank'>
            <SpriteSVGSocial 
                name="google"
                colorFill={colorFill}
                colorStroke={colorStroke}
            />
        </a>
    </div>
  )
}

export default SocialIcons
