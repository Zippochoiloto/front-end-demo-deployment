import "./App.css";
import React, {useState} from "react"

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = async (e) => {
    e.preventDefault()
    const data = {name, password}
    const url = "https://studentmanagement321.herokuapp.com/login"
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'  
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    console.log('response', response.json())
  }

  const onChangName = (e) => {
    setName(e.target.value)
  }
  const onchangePass = (e) => {
    setPassword(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <form>
          <div>
            <span>User Name: </span>
            <input value={name} onChange={onChangName} type="text" placeholder="Please input your name" />
          </div>
          <div>
            <span>Password: </span>
            <input value={password} onChange={onchangePass} type="password" placeholder="Please input your password" />
          </div>
          <button onClick={submitForm}>Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
