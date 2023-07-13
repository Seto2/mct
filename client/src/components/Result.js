import React, { useEffect } from 'react'
import '../styles/Result.css'
import {Link} from 'react-router-dom'
import ResultTable from './ResultTable'
import { useDispatch, useSelector } from 'react-redux'
import { resetAllAction } from 'redux/question_reducer'
import { resetResultAction } from 'redux/result_reducer'
import {attempts_Number, earnPoints_Number, flagResult} from 'helper/helper'

export default function Result() {

  const dispatch = useDispatch()
  const {questions: {queue, answers}, result :{result, userId}} = useSelector(state=>state);

  useEffect(()=> {
    console.log(flag)
    console.log(earnPoints, "point")
  })

  const totalPoints = queue.length * 10;
  const attempts = attempts_Number(result)
  const earnPoints = earnPoints_Number(result, answers, 10)
  const flag = flagResult(totalPoints, earnPoints)


  function onRestart(){
    dispatch(resetAllAction())
    dispatch(resetResultAction())
  }

  function onPrint(){
    console.log('result')
  }

  return (
    <div className='container'>
      <h1 className='title text-light'> Quiz app </h1>

      <div className='result flex-center'>
        <div className='flex'>
          <span> Бодит үйл ажиллагааг эрхэмлэгч хэв шинж </span>
          <span className='bold'> {totalPoints || 0 } </span>
        </div>
        <div className='flex'>
          <span> Судлаач, шинжээч хэв шинж </span>
          <span className='bold'> {queue.length || 0} </span>
        </div>
        <div className='flex'>
          <span> Уран сайхны хэв шинж </span>
          <span className='bold'> {attempts|| 0} </span>
        </div>
        <div className='flex'>
          <span> Нийгмийн хэв шинж </span>
          <span className='bold'> {earnPoints || 0} </span>
        </div>
        <div className='flex'>
          <span> Ажил хэрэгч хэв шинж </span>
          <span className='bold'> daily tuition </span>
        </div>
        <div className='flex'>
          <span> Стандартыг баримтлагч хэв шинж </span>
          <span style={{color : `${flag? "#2aff95": "#ff2a66"}`}}>{flag ? "passed" :"false"}</span>
        </div>

      </div>
      <div className='end'>
        <Link className='btn ' to={'/'} onClick={onRestart}>Дахин эхлэх</Link>
        <button className='btn ' onClick={onPrint}> үр дүнг хадгалах </button>
      </div>
      <div className='container'>
        <ResultTable/>
      </div>
    </div>
  )
}
