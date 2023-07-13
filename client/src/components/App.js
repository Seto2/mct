import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { CheckUserExist } from 'helper/helper';

import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
import Test from './Test';

import '../styles/App.css';

/** routes */
const router = createBrowserRouter([
  {
    path : '/',
    element : <Main> </Main>
  },
  {
    path : '/quiz',
    element : <CheckUserExist><Quiz/></CheckUserExist>
  },
  {
    path : '/result',
    element :<CheckUserExist><Result/></CheckUserExist>
  },
  {
    path : '/test',
    element : <Test></Test>
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
