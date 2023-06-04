import React from 'react'
import Point from './Point'

const Step = ({hasStepImage,StepImageUrl,stepSubHeading,stepDescription,hasCode,hasSubPoints,subPoints,codeUrl,endNote ,stepNumber }) => {
  return (
    <div className="md:w-[50%]  w-[80%] bg-white mt-6">
      <div className='w-full flex flex-col justify-center items-center'>

        <h3 className='text-left  font-semibold' >{stepNumber}</h3>

        <h1 className='font-bold text-black text-left  lg:text-[30px] text-[20px] mt-2 mb-3'>{stepSubHeading}</h1>

        { hasStepImage && 

        (<div>
          <img className="bg-conver bg-no-repeat w-full h-full p-1" src={StepImageUrl}/>
        </div>)}


        <p className='md:text-left text-center text-[12px] md:text-[20px]'>{stepDescription}</p>


        {
            hasCode && (

              <div className='w-full mt-4'>
                    
                    <iframe src={codeUrl} Width="100%" height="700px" frameborder="0"></iframe>
              </div>
            )

        }


<ul class="list-disc mt-4">
        { hasSubPoints &&(


        subPoints.points.map((point)=>(
              <Point {...point} />

        ))

            
        
              
        )

       

        }

</ul>

<p className=' md:text-[20px] text-[12px] mt-5 mb-5 ' >
{endNote}
</p>


</div>


    </div>
  )
}

export default Step
