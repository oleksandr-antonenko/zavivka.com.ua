import React from 'react';
import { LinkBoxProps } from './type';
import type {FC} from 'react';
import Link from 'next/link';

const LinkBox: FC<LinkBoxProps> = ({linksFooter}) => {
  return (
    <>
      {linksFooter.map(linkFooter => (
        <div>
            {linkFooter.link && <Link href={linkFooter.link}><p className='mb-3'>{linkFooter.title}</p></Link>}
            {!linkFooter.link && <p className='mb-3'>{linkFooter.title}</p>}
        </div>
      ))}
    </>
  )
}

export default LinkBox
