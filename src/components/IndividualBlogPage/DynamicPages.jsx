import React from 'react'
import { DynamicData } from './NewData'
import Header from './Header';
import Section from './Section';
import Step from './Step';




const DynamicPages = () => {
  const data = DynamicData[2];
  const artTitle= data.ArticleHeading
  const Banner = data.BannerImage
  const writtenSections= data.ArtSections
  const steps=data.Steps

  return (
    <div className='w-full flex flex-col justify-center items-center bg-white'>
         <Header title={artTitle} stylesimg={Banner} />



    {data.hasContent &&  writtenSections.map((section)=><Section  {...section}/>) }

    {data.hasSteps && steps.map((step)=>(<Step {...step} />))

    }

 </div>
  )
}

export default DynamicPages
