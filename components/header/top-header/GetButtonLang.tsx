import React from 'react'
import { ButtonLangProps } from './types'

function GetButtonLang({languages, onClick}: ButtonLangProps) {
  return (
    <>
      {languages.map(language => (
            <button
                onClick={onClick}
                key={language}
                className='px-[10px] uppercase hover:font-bold'
            >
                {language}
            </button>
        )
      )}
    </>
  )
}

export default GetButtonLang
