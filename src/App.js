import logo from './logo.svg';
import './App.css';
import Main from './components/Main/Main';
import bg from '../src/Assets/bg.jpg'



function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg}) `,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',


      }}>
      <Main ></Main>
    </div>
  );
}

export default App;
