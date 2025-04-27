import React, { Component } from 'react'

export class Hello extends Component {
  render() {
     const name="Dhruvil"
    return (
      <div>
        <h1>Welcome To JSX</h1>
        <p>{name}</p>
      </div>
    )
  }
}

export default Hello
