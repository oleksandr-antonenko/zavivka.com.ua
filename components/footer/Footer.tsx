import { SocialIcons } from '@/shared/social'
import { Logo } from '@/shared/svg'
import React from 'react'
import LinkBox from './LinkBox'
import { linksFooterServ, linksFooterZav, linksFooterEdu } from './constants'

const Footer = () => {
  return (
    <footer className='bg-grey-light'>
      <div className='py-5 px-4 md:pt-12 md:pb-10 md:px-[100px] text-black max-w-[1440px] 2xl:mx-auto'>
        <div className='pb-10 md:pb-12 flex flex-col xl:flex-row justify-between border border-b-grey text-[12px]'>
          <div className='flex flex-col gap-2 items-center mb-10 xl:mb-0'>
            <Logo color="#212121"/>
            <div className='hidden xl:block'>
              <SocialIcons colorFill='black' colorStroke='black'/>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[35px] md:justify-between xl:gap-[100px] items-start m-auto">
            <div>
              <h3 className='font-bold mb-3'>Завивки</h3>
              <LinkBox linksFooter={linksFooterZav}/>
            </div>
            <div>
              <h3 className='font-bold mb-3'>Послуги</h3>
              <LinkBox linksFooter={linksFooterServ}/>
            </div>
            <div>
              <h3 className='font-bold mb-3'>Навчання</h3>
              <LinkBox linksFooter={linksFooterEdu}/>
            </div>
            <div>
              <h3 className='font-bold mb-3'>Контакти</h3>
              <a href="+380674413565" type='tel' className='hover:font-bold'>+38 067 441 35 65</a>
              <div className='mt-3 xl:mt-0 block xl:hidden'>
              <SocialIcons colorFill='black' colorStroke='black'/>
            </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-[6px] md:flex-row md:justify-between items-center text-[16px] font-medium mt-5'>
          <div>
            <p>©Zavivka 2009-2024</p>
          </div>
          <div className='flex gap-6 items-center'>
            <p>VISA</p>
            <p>Mastercard</p>
            <p>ApplePay</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
