import React, { Component } from "react";
import './App.css';
import md5 from "md5"

class App extends Component {
  constructor() {
    super()
    this.state = {
      value: "",
    }
  }

  onSubmit = event => {
    event.preventDefault();
    const {value} = this.state
    const baseURL = `https://gateway.marvel.com:443/v1/public/`
    const searchType = `characters?`
    const searchMethod = `name=`
    const timestamp = Date.now()
    const publicKey = process.env.REACT_APP_PUBLIC_KEY
    const privateKey = process.env.REACT_APP_PRIVATE_KEY
    const hash = md5(timestamp + privateKey + publicKey)
    fetch(`${baseURL}${searchType}${searchMethod}${value}${timestamp}${publicKey}${hash}`)
      .then(response => response.json())
      .then(data => console.log(data))
  }

  render() {
    const timestamp = Date.now()
    const publicKey = process.env.REACT_APP_PUBLIC_KEY
    const privateKey = process.env.REACT_APP_PRIVATE_KEY
    const hash = md5(timestamp + privateKey + publicKey)
    // console.log("hash", hash)
    fetch(`https://gateway.marvel.com:443/v1/public/characters?name=Deadpool&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`)
      .then(response => response.json())
      .then(data => {
        if (data.code === 200) {
          console.log(data)
        }
      })
    return (
      <div className="App">
        {timestamp}
      </div>
    );
  }
}

export default App;