import React from 'react'
import Questions from './Questions'

export default function Quiz() {

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
