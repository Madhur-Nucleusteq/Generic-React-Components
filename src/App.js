import './App.css';
import Button from './components/button/Button';
import './components/button/button.css';
import { DiApple, DiCodeigniter } from "react-icons/di";


function App() {
  return (
    <div className='main-div'>
      <h1>Types of Buttons</h1>
      <div className='button-div'>
        <Button
          value={'Apple'}
          theme={{
            height: '50px',
            width: '50px',
          }}
          className={'button'}
          icon={<DiApple style={{ fontSize: "15px" }} />}
        />
        <Button
          value={'Apple'}
          theme={{
            height: '50px',
            width: '50px',
          }}
          className={'button'}
          icon={<DiApple style={{ fontSize: "15px" }} />}
        />

        <Button
          value={' Fire'}
          theme={{
            width: "500px",
            height: '70px',
          }}
          className={'button2'}
          icon={<DiCodeigniter style={{ fontSize: "18px" }} />}
        />
      </div>
    </div>
  );
}

export default App;
