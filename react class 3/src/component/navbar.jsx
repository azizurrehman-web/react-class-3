import React from 'react'

function Navbar({ name, age }) {
  return (
    <div>
      <h2>Your name is {name}</h2>
      <p>Your age is {age}</p>
      <p>Thanks</p>
    </div>
  );
}

export default Navbar;