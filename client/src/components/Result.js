import React from 'react'
import '../styles/Result.css'
import {Link} from 'react-router-dom'
import ResultTable from './ResultTable'

export default function Result() {

  function onRestart(){
    console.log('ddd')
  }

  function onPrint(){
    console.log('result')
  }

  return (
    <div className='container'>
      <h1 className='title text-light'> Quiz app </h1>

      <div className='result flex-center'>
        <div className='flex'>
          <span> Realistic </span>
          <span className='bold'> daily tuition </span>
        </div>
        <div className='flex'>
          <span> Investigative </span>
          <span className='bold'> daily tuition </span>
        </div>
        <div className='flex'>
          <span> Social </span>
          <span className='bold'> daily tuition </span>
        </div>
        <div className='flex'>
          <span> Username </span>
          <span className='bold'> daily tuition </span>
        </div>
        <div className='flex'>
          <span> Enterprising </span>
          <span className='bold'> daily tuition </span>
        </div>
        <div className='flex'>
          <span> Conventional </span>
          <span className='bold'> daily tuition </span>
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
