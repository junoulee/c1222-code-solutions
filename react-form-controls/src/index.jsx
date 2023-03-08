import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function RegistrationForm() {
  const [userName, setUserName] = useState('');
  const [pw, setPw] = useState('');

  function handleUsernameChange(event) {
    setUserName(event.target.value);
  }
  function handlePasswordChange(event) {
    setPw(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (!userName || !pw) {
      alert('Please input username and passsword');
    }
    if (userName && pw) {
      alert(`Form was submitted successfully, ${userName}`);
      console.log('state:', { userName, pw });
      setUserName('');
      setPw('');
    }
  }
  return (
    <div>
      <form>
        <label>Username</label>
        <input value={userName} onChange={handleUsernameChange}></input>
        <label>Password</label>
        <input type="password" value={pw} onChange={handlePasswordChange} onKeyDown={(e) => e.key === 'Enter' ? handleSubmit : ''}></input>
        <button type="submit" onClick={handleSubmit}>Sign Up</button>
      </form>
    </div>
  );
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<RegistrationForm />);
