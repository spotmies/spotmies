import React from 'react'
import { ArticleData } from '@/components/IndividualBlogPage/Data'
import { useRouter } from 'next/router'
import IndvPage from '@/components/IndividualBlogPage/IndvPage'

// C:\Users\sneha\spotmies-web-page\src\app\blog\[blogNo].js

const blogNo = () => {
    const router =useRouter()
    const articleIndex =  router.query.blogNo
    const i =parseInt(articleIndex)
    const data= ArticleData[i]
//  console.log(data)



  return (
    <>
      <IndvPage {...data}/>
    </>
  )
}

export default blogNo
