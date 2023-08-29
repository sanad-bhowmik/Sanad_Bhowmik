
import './App.css';
import Main from './components/Main/Main';
import bg from '../src/Assets/bg.jpg'
import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes';
import { Toaster } from 'react-hot-toast';



function App() {
  return (
    <div
      className='object-cover min-h-screen w-full' style={{
        backgroundImage: `url(${bg}) `,
        backgroundSize: 'cover',

        backgroundAttachment: 'fixed'
      }}
    >
      <RouterProvider router={router}></RouterProvider>
      <Main ></Main>
      <Toaster />
    </div>
  );
}

export default App;
