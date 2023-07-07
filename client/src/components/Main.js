import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Main.css'
export default function Main() {

    const inputRef = useRef(null)

    return (
    <div className='container'>
        <h1 className='title text-light'> Мэргэжил сонголтын туслах </h1>

        <ol>
        <li>Та нийт 18н асуултанд хариулна.</li>
        <li>Та нийт 18н асуултанд хариулна.</li>
        <li>Та нийт 18н асуултанд хариулна.</li>
        <li>Та нийт 18н асуултанд хариулна.</li>
        </ol>

        <form id='form'>
            <input ref={inputRef} className='userid' type='text' placeholder='Username*' />
        </form>

        <div className='start'>
            <Link className='btn' to={'quiz'}> Start quiz </Link>
        </div>
    </div>
  )
}
