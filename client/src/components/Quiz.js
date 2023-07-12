import React, { useEffect } from 'react'
import Questions from './Questions'

import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestion'

import { useSelector, useDispatch } from 'react-redux'

export default function Quiz() {

  //  const trace = useSelector( state => state.questions.trace )
    const { queue, trace } = useSelector( state => state.questions )
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(queue);
    })

    function onNext(){
        if(trace < queue.length){
            dispatch(MoveNextQuestion());
        }
    }

    function onPrev(){
        if(trace> 0){
            dispatch(MovePrevQuestion())
        }
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
