import React, { Component } from "react";
import Input from "./components/input/Input";
import "./App.scss";
import ImageGrid from "./components/imageGrid/ImageGrid";
import Axios from "axios";
import Spinner from "./UI/Spinner";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      api_BASE: "https://api.unsplash.com/search/photos",
      input: "",
      responseState: "",
      sendData: false,
      spinner: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    if (this.state.sendData) {
      this.setState({
        spinner: true
      });
      Axios.get(this.state.api_BASE, {
        params: { query: this.state.input },
        headers: {
          Authorization:
            "Client-ID 9e30bce2e591d121caded97bef304be5b9e01c5654b86c03c283c07aab1cafd2"
        }
      })
        .then(response => {
          this.setState({ responseState: response, spinner: false });
        })
        .catch(error => {
          alert(error);
        });
    }
  }
  onChange = event => {
    this.setState({
      input: event.target.value
    });
  };
  handleSubmit = event => {
    this.setState({ sendData: true }, function() {
      this.componentDidMount();
    });
    event.preventDefault();
  };

  render() {
    let SpinnerVar = "";
    if (this.state.spinner) {
      SpinnerVar = <Spinner />;
    }
    let ImageGridvar = "";
    if (this.state.sendData && this.state.responseState.data !== undefined) {
      let responseData = this.state.responseState.data.results;
      ImageGridvar = responseData.map((responseData, index) => {
        return (
          <ImageGrid
            key={index}
            responseData={this.state.responseState.data.results[index]}
          />
        );
      });
    }

    return (
      <div className="App">
        <Input
          input={this.state.input}
          onChange={this.onChange}
          handleSubmit={this.handleSubmit}
        />
        <div className="limit-width">
          {ImageGridvar}
          {SpinnerVar}
        </div>
      </div>
    );
  }
}

export default App;
