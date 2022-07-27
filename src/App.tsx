import Header from "./components/Header";

import initialEmails from "./data/emails";

import "./App.css";
import { useState } from "react";

function App() {
  // Use initialEmails for state
const[emails,setEmails]=useState(initialEmails)

console.log(initialEmails);

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        {/* Render a list of emails here */}
      <ul>

      {initialEmails.map(function(email){
return ( 
<li className='email unread'>
<input type='checkbox'></input>
<input className='email star-checkbox'  type='checkbox'></input>
<span className='email title'>{email.sender}</span>
<span>{email.title}</span>
      </li>
      )

      })}
       
     
      </ul>
     
      </main>
    </div>
  );
}

export default App;
