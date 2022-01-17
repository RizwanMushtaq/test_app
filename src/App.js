import './App.css';
import {useState, useEffect} from 'react'

function App() {

  const [person , setPerson] = useState({
    firstName: 'Rizwan 00',
    lastName: 'Mushtaq 00'
  })
  
  const clickHandlerFirstName = () => {
    setPerson( (person) => ({
      ...person,
      firstName: 'Rizwan ' + Math.floor( Math.random() * (100 - 1) + 1)
    }))
  }

  const clickHandlerLastName = () => {
    setPerson( (person) => ({
      ...person,
      lastName: 'Mushtaq ' + Math.floor( Math.random() * (100 - 1) + 1)
    }))
  }

  useEffect(() => {
    console.log('running effect')
  }, [person.firstName])

  return (
    <div className="App">
      <h1>Test App</h1>
      <div>{JSON.stringify(person)}</div>
      <button 
        onClick={clickHandlerFirstName}
      >Click</button>
      <div>{JSON.stringify(person)}</div>
      <button 
        onClick={clickHandlerLastName}
      >Click</button>
    </div>
  );
}

export default App;
