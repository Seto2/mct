import React, { Component, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Quiz from './Quiz'
const Home = React.lazy(() => import('./Home'))

export default class index extends Component {
  render() {
    return (
        <BrowserRouter>
            <Suspense>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/quiz' element={<Quiz/>}/>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
  }
}
