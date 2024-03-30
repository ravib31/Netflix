import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstants'

function GptSearchBar() {
    const langKey = useSelector(store=>store.config.lang)
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='grid grid-cols-12 bg-black w-1/2'>
            <input type="text" className='p-4 m-4 col-span-9' id="search-bar" placeholder={lang[langKey].gptSearchPlaceholder} />
            <button className='py-2 px-4 bg-red-600 m-4 text-white rounded-lg col-span-3'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar