import logo from './logo.svg';
import './App.css';
import { Dell } from './lenevo/lenevo';
import { Counter } from './counter/counter';


function App() {
  return (
      const onCallback = (count) =>{
      console.log('Data From Child', count)
    }
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Dell />
        <Counter counterName={5} onCountChange={onCallback}></Counter>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
