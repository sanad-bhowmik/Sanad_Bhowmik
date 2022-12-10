
import './App.css';
import Main from './components/Main/Main';
import bg from '../src/Assets/bg.jpg'



function App() {
  return (
    <div
      className='object-cover min-h-screen w-full' style={{
        backgroundImage: `url(${bg}) `,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

        backgroundAttachment: 'fixed'


      }}
    >
      <Main ></Main>
    </div>
  );
}

export default App;
