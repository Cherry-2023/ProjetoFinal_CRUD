import React from 'react'
import Toti from './Toti.png'

function Navbar() {
  return (
    <div className= 'nav-wrapper'>
      <div className='center-align'>
          <p><img src={Toti} alt='Toti Logo' width="100"/></p>
          <h5><b>CRUD React, Node.js é SQLite * Projeto Final * Turma 31 * Programador Full Stack</b></h5>
      </div>
      <ul className="collapsible">
        <li>
          <div>
            <i className="material-icons">people</i>
           {'... '}<b>Aluno:</b> <em>Cherry Machado</em>
          </div> 
        </li>
      </ul>
    </div>
  )
}

export default Navbar
