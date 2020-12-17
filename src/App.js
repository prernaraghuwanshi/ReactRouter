// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import { render } from 'react-dom';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
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
// class App extends React.Component {
//   url = "https://www.google.com/"
//   constructor() {
//     super()
//     this.state = {
//       userName: ''
//     }
//   }
//   onClick = ($event) => {
//     window.open(this.url, "_blank");
//   }
//   onNameChange = (event) => {
//     this.setState({ userName: event.target.value })
//   }
//   render() {
//     return (
//       <>
//   <div>
//     <img src={logo} onClick={this.onClick} alt ="helo" />
//     <h1>Hello {this.state.userName}</h1>
//   </div>
//     <div>
//       <input onChange = {this.onNameChange} />
//     </div>
//     </>
//     );
//   }
// }
// export default App;
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Users from './components/User';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home123</Link>
          </li>
          <li>
            <Link to="/about">About9</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
          </ul>
          <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/user">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
// import React, { useEffect } from "react";
// import axios from "axios";

// function App() {
//   useEffect(() => {
//     console.log(axios({
//         method: 'GET',
//         url: 'https://jsonplaceholder.typicode.com/posts'
//     }));
//   });
//   return <div>
//       API testing with Axios
//   </div>;
// }

// export default App;