import React from 'react'
import Hero from '../Components/Hero/Hero'
import { Popular } from '../Components/Popular/Popular'
import { Offers } from '../Components/Offers/Offers'
import { NewColletions } from '../Components/NewColletions/NewColletions'
import { NewsLetter } from '../Components/NewsLetter/NewsLetter'
import { Footer } from '../Components/Footer/Footer'

export const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewColletions/>
      <NewsLetter/>
    </div>
  )
}
