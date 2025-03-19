import React from 'react'
import Skeleton from 'react-loading-skeleton'

export const RecipeSkeleton = () => {
    return (
        <div className="h-120 flex flex-col w-8/10 md:w-3/10 m-5 overflow-hidden box-content">
            <div className="h-2/5 w-full p-5">
                <Skeleton width={"100%"} height={"100%"} borderRadius={'10px'} />
            </div>

            <div className="font-nunito h-3/5 w-full bg-white flex flex-col p-5 justify-between">

                <Skeleton width={'30%'} className='text-2xl' />

                <Skeleton className=' text-3xl' />
                <Skeleton className=' text-3xl' />
                <Skeleton className=' text-3xl' />

                <Skeleton width={'30%'} className='text-2xl' />
            </div>
        </div >
    )
}
