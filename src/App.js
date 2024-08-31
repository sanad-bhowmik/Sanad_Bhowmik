
import './App.css';
import Main from './components/Main/Main';
import bg from '../src/Assets/bg.jpg'
import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div
      className='min-h-screen w-full' 
      style={{
        backgroundImage: 'linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)',
      
      }}
    >
      <RouterProvider router={router}></RouterProvider>
      <Main></Main>
      <Toaster />
    </div>
  );
}

export default App;