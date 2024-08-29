
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
        backgroundImage: 'linear-gradient( 181deg,  rgba(2,0,97,1) 15%, rgba(97,149,219,1) 158.5% )',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }}
    >
      <RouterProvider router={router}></RouterProvider>
      <Main></Main>
      <Toaster />
    </div>
  );
}

export default App;