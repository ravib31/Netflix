import React from 'react'
import { BG_IMAGE } from '../utils/Constants'
import GptMovieSuggestions from './GptMovieSuggestions'
import GptSearchBar from './GptSearchBar'

const GptSearch = () => {
  return (
    <div>
        <div className='absolute -z-10'>
        <img
          src={BG_IMAGE}
          alt="background"
        />
        </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch