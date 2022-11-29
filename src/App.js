import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState([])
  console.log(count)
  const addFields = (e) => {
    e.preventDefault()
    console.log(e)
    const number = (e.target.member.value)
    const array = []

    for (var i = 0; i < number; i++) {
      array.push([i])

    }
    console.log(array)
    setCount(array)
  }
  return (
    <div className="App">
      <form onSubmit={addFields}>

        <input type="text" id="member" name="member" />
        <button type='submit'>Fill Details</button>
        <input type="text" />
        {
          count.map(item => {
            return (
              <div>
                <input type="checkbox" id="check" name="check" />
                <input type="text" id="price" name="price" />
              </div>
            )
          })
        }
      </form>
    </div>
  );
}

export default App;
