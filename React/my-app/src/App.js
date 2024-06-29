//import logo from './logo.svg';
// import images from "./images.jpeg"
 import './App.css';
 import { Counter } from './counter/counter';
 import { Form } from './form/form';
 import { UserProfile } from './UserProfile/UserProfile';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={images} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
       
//       </header>
//     </div>
//   );
// }

function App(){
  const onCallback = (count) =>{
    console.log('Data From Child', count)
  }
  return(
      <div className="Firstclass">
      
       
<p>This is react application.</p>
        <Counter name="Rohit" greeting="Hello" fullName="Sharma"></Counter>
        <Counter name="Virat" greeting="Hi"></Counter>
        <Counter counterName={5} onCountChange={onCallback}></Counter>
        <UserProfile></UserProfile>
        <Form></Form>
      </div>
   );
}

export default App;
