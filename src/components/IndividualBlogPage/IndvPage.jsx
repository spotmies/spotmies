import React from 'react'
import Header from './Header'
import Section from './Section'
import { ArticleData } from './Data'



const IndvPage = ({ArtHeader,BannerImage,ArtSections}) => {
  const data = ArticleData[0]
  const sections=data.ArtSections
const AHeader= data.ArtHeader
const Banner= data.BannerImage
  return (
    <div className='w-full flex flex-col justify-center items-center bg-white'>
        <Header title={AHeader} stylesimg={Banner} />
        
        {
          sections.map((section)=><Section  {...section}/>)
        }

  {/* https://github.com/sm-creative-crazy4code/decentralized-twitter-frontend/blob/main/pages/index.js */}

  <div className='w-[50%]'> 

<iframe src="https://gitcodeembedder.blogspot.com/?gh=spotmies/spotmies/main/src/components/reusableComponent/hoverButton.jsx" Width="100%" height="700px" frameborder="0"></iframe>
</div>   
       
</div>
  )
}

export default IndvPage
