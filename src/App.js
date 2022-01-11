import React, { Component } from "react";
import './styles/App.css';
import md5 from "md5"


import SearchAppBar from "./components/heroSearchBar";
import HeroCard from "./components/heroCard";

class App extends Component {
  constructor() {
    super()
    this.state = {
      value: "",
      currentHero: "",
      statusCode: "",
    }
  }

  onChange = event => {
    this.setState({ value: event.target.value });
  }

  onSubmit = event => {
    event.preventDefault();
    const { value } = this.state
    const baseURL = `https://gateway.marvel.com:443/v1/public/`
    const searchType = `characters?`
    const searchMethod = `name=`
    const timestamp = Date.now()
    const publicKey = process.env.REACT_APP_PUBLIC_KEY
    const privateKey = process.env.REACT_APP_PRIVATE_KEY
    const hash = md5(timestamp + privateKey + publicKey)
    fetch(`${baseURL}${searchType}${searchMethod}${value}&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`)
      .then(response => {
        console.log(response)

        if (response.status === 200) {
          this.setState({
            statusCode: 200,
            value: "",
          })
          return response.json()
        } else {
          this.setState({
            statusCode: response.status,
            value: "",
          })
        }
      })
      .then(data => {
        console.log(this.state.statusCode)
        let newData = data.data.results
        if (this.state.statusCode === 200 && newData.length === 1) {
          console.log(data)
          this.setState({
            statusCode: 200,
            currentHero: newData[0]
          })
        } else if (newData.length === 0) {
          this.setState({
            statusCode: 404,
          })
        }
      })
  }

  render() {

    return (
      <div className="App">
        <SearchAppBar onChange={this.onChange} onSubmit={this.onSubmit} value={this.state.value} statusCode={this.state.statusCode}/>
        <HeroCard hero={this.state.currentHero} />
      </div>
    );
  }
}

export default App;