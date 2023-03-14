import React, { useState } from 'react';

export function ValidatedInput() {
  const [pw, setPw] = useState('');

  function handlePasswordChange(event) {
    setPw(event.target.value);
  }

  function textCounter() {
    if (!pw || pw.length < 8) {
      return 'fa-solid fa-x x';
    } else {
      return 'fa-solid fa-check check';
    }
  }

  function displayText() {
    if (!pw) {
      return 'A password is required.';
    } else if (pw.length < 8) {
      return 'Your password is too short.';
    }
  }
  function extraValidation() {
    const lowerCaseLetters = /[a-z]/g;
    const upperCaseLetters = /[A-Z]/g;
    const numbers = /[0-9]/g;
    const symbols = /[-!$%^&*()_+|~=`{}[\]:/;<>?,.@#]/;
    if (pw.match(lowerCaseLetters) && pw.match(upperCaseLetters) && pw.match(numbers) && pw.match(symbols)) {
      return '';
    }
    return 'Password must contain a lowercase and uppercase letter, a number, and a special character.';
  }

  return (
    <form>
      <div>
        <label className="pw">Password</label>
      </div>
      <input
        className="field"
        type="password"
        value={pw}
        onChange={handlePasswordChange}>
      </input>
      <i className={textCounter()}/>
      <div>
        <label className="bottom-text">{displayText()}</label>
      </div>
      <div>
        <label className="bottom-text-two">{extraValidation()}</label>
      </div>
    </form>
  );
}
