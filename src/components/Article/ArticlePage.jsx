import React from 'react'
import SearchBar from '../reusableComponent/SearchBar'
import ArticleBlocks from '../reusableComponent/ArticleBlocks'
import { articles } from '@/Data'

const ArticlePage = () => {
  return (
    <div className='w-full   overflow-x-hidden p-2 bg-slate-100'>
        <div className='w-full h-[65px] z-10   bg-slate-100 flex justify-center items-center mx-auto fixed '>
        <SearchBar/>
        </div>
<div className='w-full mt-[75px]  grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-4 p-4 '>
  {articles.map((article,index)=>( 
    
    <ArticleBlocks key={`article-${index}`} {...article}/>
    
  ))}
    </div>
      
    </div>
  )
}

export default ArticlePage
