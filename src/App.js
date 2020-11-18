import React, { Component } from 'react'
import Paypal from './components/Paypal.js'

export default class App extends Component {
  render() {
    return (
      <div id='overlord'>
        App
        <Paypal />
      </div>
    )
  }
}