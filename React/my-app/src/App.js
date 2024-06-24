//import logo from './logo.svg';
// import images from "./images.jpeg"
 import './App.css';
 import { Counter } from './counter/counter';
 import { Form } from './form/form';

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
  return(
      <div className="Firstclass">
      
       
<p>This is react application.</p>
        <Counter name="Rohit" greeting="Hello" fullName="Sharma"></Counter>
        <Counter name="Virat" greeting="Hi"></Counter>
        <Form></Form>
      </div>
   );
}

export default App;
