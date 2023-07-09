import React, { useEffect } from 'react'
import Questions from './Questions'

import { useSelector } from 'react-redux'

export default function Quiz() {

    const state = useSelector( state => state )

    useEffect(() => {
        console.log(state);
    })

    function onNext(){
        console.log('next')
    }

    function onPrev(){
        console.log('prev')
    }

  return (
    <div className='container'>
        <h1 className='title text-light'> Quiz app </h1>

        {/* display questions*/}
        <Questions />

        <div className='grid'>
            <button className='btn prev' onClick={onPrev}> Өмнөх </button>
            <button className='btn next' onClick={onNext}> Дараагийнх </button>
        </div>
    </div>
  )
}
