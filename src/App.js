import React, { Component } from 'react';
import MedSearchContainer from './components/MedSearchContainer';
import './App.css';

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       drugs: []
//     };

//   }

//   drugSearch(term) {
//     const baseUrl = 'https://rxnav.nlm.nih.gov/REST/drugs.json?name='
//     return axios.get(baseUrl + term)
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

const App = () => <MedSearchContainer />;

export default App;
