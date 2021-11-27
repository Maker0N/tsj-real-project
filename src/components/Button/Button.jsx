/* eslint-disable react/prop-types */
import React from 'react'

const Button = ({ clickButton, nameButton }) => (
  <button
    className="button"
    type="button"
    onClick={(e) => {
      e.preventDefault()
      clickButton()
    }}
  >
    {nameButton}
  </button>
)

export default Button
