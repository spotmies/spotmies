import React from 'react'
import { ArticleData } from '@/components/IndividualBlogPage/Data'
import { useRouter } from 'next/router'
import IndvPage from '@/components/IndividualBlogPage/IndvPage'



const blogNo = () => {
    const router = useRouter()
    const articleIndex =  router.query.blogNo
    const i =parseInt(articleIndex)
    const data= ArticleData[i]



  return (
    <>
      <IndvPage {...data}/>
    </>
  )
}

export default blogNo
