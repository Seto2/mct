
import '../styles/App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/** imports */
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
import { CheckUserExist } from 'helper/helper';

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
