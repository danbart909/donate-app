import React, { Component } from 'react'
import { PayPalButton } from 'react-paypal-button-v2'

export default class Paypal extends Component {
  render() {
    return (
      <div>
        <PayPalButton
          amount='0.01'
          onSuccess={(details, data) => {
            console.log("Transaction completed by " + details.payer.name.given_name)
          }}
          // options={{
          //   clientId: 'ID'
          // }}
        />
      </div>
    )
  }
}