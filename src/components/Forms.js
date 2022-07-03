import React from 'react'
import PropTypes from 'prop-types'
import './Form.css'

function Form({name}){
    return(
      <header className="header">
        <h1>Witaj, {name="Kamila"}</h1>
      </header>
    )
  }
  Form.propTypes = {
    name: PropTypes.string,
  }

  export default Form;