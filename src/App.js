import logo from './logo.svg';
import './App.css';
// const number = 6666;
// const music = {
//   name: 'Khalid', job:'singer'
// }
// const singer = {name:'Andrwo', job:'mordern singer'};
// const singerStyle ={
//   color: 'red',
//   backgroundColor: 'white'
// }

function App(props) {
  console.log(props);
  return (
    <div className="App">
     
      <Person name='A. Hadi' naika='Rozina'> </Person>
      <Person name= 'Andrew' naika='bobita'> </Person>
      <h3>Capital: Dhaka</h3>
      <Person name='Razzak' naika=': Sabana'> </Person>
      <Friend name='Jasim' phone='018000000'></Friend>
      <Friend name='Bappa Raz' phone='017000000'></Friend>
    </div>
  );
}
function Person(props){ 
  console.log(props)
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Naika:{props.naika}</p>
    </div>
  )
}
function Friend(props){
return(
  <div className="friend">
    <h1>Name: {props.name}</h1>
    <p>Phone: {props.phone}</p>
  </div>
)
}

export default App;
