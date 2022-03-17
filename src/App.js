import logo from './logo.svg';
import './App.css';
const number = 6666;
const music = {
  name: 'Khalid', job:'singer'
}
const singer = {name:'Andrwo', job:'mordern singer'};
const singerStyle ={
  color: 'red',
  backgroundColor: 'white'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className="container">
          <h3>Hello React Js</h3>
        </div>
        <div className="music">
          <p>Number: {number} </p>
          <p style = {singerStyle}>Name: {music.name} {music.job}</p>
          <p style = {{color:'blue', backgroundColor:'yellow'}}>Name: {singer.name} {singer.job}</p>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
