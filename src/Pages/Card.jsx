import React from 'react'

export default function Card({children}) {
    return (
        <div className='bg-white h-full w-full p-5 shadow-lg rounded-lg'>
            {children}
        </div>
    )
}
