import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setUserId } from 'redux/result_reducer'

import '../styles/Main.css'

export default function Main() {

    const inputRef = useRef(null)
    const dispatch = useDispatch()

    function startQuiz(){
        if(inputRef.current?.value){
            dispatch(setUserId(inputRef.current?.value))
        }
    }

    return (
    <div className='container'>
        <h1 className='title text-light'> Мэргэжил сонголтын туслах </h1>

        <ol>
        <h2 className=' text-light'>Аливаа үйл ажиллагааны амжилт нь чиг хандлага, үнэт зүйлийн баримжаа, сонирхол, тогтсон хандлага, харилцаа, сэдлээс хамаардаг ба эдгээр хүчин зүйлийг харгалзан бие хүний мэргэжилд баримжаалсан 6 хэв шинжийг тодорхойлсон. Уг тестээр 16 нас хүрсэн, суурь боловсрол эзэмшсэн хүн өөрийгөө тодорхойлж болно.</h2>
        
        </ol>

        <form id='form'>
            <input ref={inputRef} className='userid' type='text' placeholder='Username*' />
        </form>

        <div className='start'>
            <Link className='btn' to={'quiz'} onClick={startQuiz}> Start quiz </Link>
        </div>
    </div>
  )
}
