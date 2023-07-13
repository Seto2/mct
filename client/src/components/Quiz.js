import React, { useEffect, useState } from 'react'
import Questions from './Questions'

import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestion'
import { PushAnswer } from 'hooks/setResult'

import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function Quiz() {

    const [check, setChecked] = useState(undefined)
  //  const trace = useSelector( state => state.questions.trace )
    const result = useSelector(state => state.result.result)
    const { queue, trace } = useSelector( state => state.questions )
    const dispatch = useDispatch()

    useEffect(() => {
       console.log(result);
    })

    function onNext(){
        if(trace < queue.length){
            dispatch(MoveNextQuestion());
            if(result.length <= trace){
                dispatch(PushAnswer(check))
            }
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
    if(result.length && result.length >= queue.length ){
        return <Navigate to={'/result'} replace={true}></Navigate>
    }

  return (
    <div className='container'>
        <h1 className='title text-light'> Quiz app </h1>

        {/* display questions*/}
        <Questions onChecked={onChecked} />

        <div className='grid'>
            { trace > 0 ? <button className='btn prev' onClick={onPrev}> Өмнөх </button> :<div></div>}
            <button className='btn next' onClick={onNext}> Дараагийнх </button>
        </div>
    </div>
  )
}
