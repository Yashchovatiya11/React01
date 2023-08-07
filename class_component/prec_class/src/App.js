import React, { Component } from 'react'
import Classco from './Classco'

export default class App extends Component {
  render() {
    return (
      <>
        <div>App</div>

        <Classco name="yash" rno={101} car="audi" />
      </>
    )
  }
}
