import React from 'react'
// import { ArticleData } from '@/components/IndividualBlogPage/Data'
import { ArticleData } from '@/components/IndividualBlogPage/Data'


import IndvPage from '@/components/IndividualBlogPage/IndvPage'

// C:\Users\sneha\spotmies-web-page\src\app\blog\[blogNo].js

const blogNo = () => {
   
    const data= ArticleData[0]
 console.log(data)



  return (
    <>
      <IndvPage {...data}/>
    </>
  )
}

export default blogNo
