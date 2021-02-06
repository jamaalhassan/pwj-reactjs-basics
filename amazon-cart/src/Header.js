import React from 'react'
import './Header.css'

function Header({title}) {
    return (
    <div className="App">
      <header className='App-header'>
        <h1>{title}</h1>
      </header>
    </div>
    )
}

export default Header
