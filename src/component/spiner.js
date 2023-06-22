import React, { Component } from 'react'
import loading from "./Loading.gif"
export class spiner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt=''></img>
      </div>
    )
  }
}

export default spiner
