import React from "react";
import ReactDOM from "react-dom";
import Post from "./Post";

import "./styles.css";

class App extends React.Component {
  state = {
    titlleValue: "",
    imageValue: "",
    allValues: []
  };

  handleChangeImage = event => {
    this.setState({ imageValue: event.target.value });
  };

  handleChangeTitle = event => {
    this.setState({ titlleValue: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const postObject = {
      titlleValue: this.state.titlleValue,
      imageValue: this.state.imageValue
    };
    this.setState({
      allValues: [...this.state.allValues, postObject],
      titlleValue: "",
      imageValue: ""
    });
  };
  render() {
    const post = Post;
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              placeholder="URL"
              value={this.state.imageValue}
              onChange={this.handleChangeImage}
            />
            <br />
          </label>
          <label>
            <input
              type="text"
              placeholder="Title"
              value={this.state.titlleValue}
              onChange={this.handleChangeTitle}
            />
          </label>
          <br />
          <input type="submit" value="New Post" />
        </form>

        <div>
          {this.state.allValues.map((imgPost, index) => post(imgPost, index))}
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
