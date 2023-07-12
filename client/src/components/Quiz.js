import React, { useEffect, useState } from 'react'
import Questions from './Questions'

import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestion'
import { PushAnswer } from 'hooks/setResult'

import { useSelector, useDispatch } from 'react-redux'

export default function Quiz() {

    const [check, setChecked] = useState(undefined)
  //  const trace = useSelector( state => state.questions.trace )
    const state = useSelector(state => state)
    const { queue, trace } = useSelector( state => state.questions )
    const dispatch = useDispatch()

    useEffect(() => {
       console.log(state);
    })

    function onNext(){
        if(trace < queue.length){
            dispatch(MoveNextQuestion());
            dispatch(PushAnswer(check))
        }
    }

    function onPrev(){
        if(trace> 0){
            dispatch(MovePrevQuestion())
        }
    }

    function onChecked(check){
        console.log(check)
        setChecked(check)
    }

  return (
    <div className='container'>
        <h1 className='title text-light'> Quiz app </h1>

        {/* display questions*/}
        <Questions onChecked={onChecked} />

        <div className='grid'>
            <button className='btn prev' onClick={onPrev}> Өмнөх </button>
            <button className='btn next' onClick={onNext}> Дараагийнх </button>
        </div>
    </div>
  )
}
