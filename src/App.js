import React, { Component } from 'react';
import './App.css';
import Post from './Post';

class App extends Component {
    state = { 
      titleValue: "",
      imageValue: "",
      allValues: [],
    };

  handleChangeImage=(event)=> {
    this.setState({ imageValue: event.target.value });
  }

  handleChangeTitle=(event)=> {
    this.setState({ titleValue: event.target.value });
  }
  
 handleSubmit=(event)=> {
    event.preventDefault();
    const postObject = { titleValue: this.state.titleValue, imageValue: this.state.imageValue };
    this.setState({ allValues: [...this.state.allValues, postObject], titleValue: "", imageValue: "" });
  }

  render() {
    const post = Post;
    return (
      <div className="App">
        <div className="App-header">
          <form onSubmit={this.handleSubmit}>
            
            <label>
            <input  type="text" placeholder="URL" value={this.state.imageValue} onChange={this.handleChangeImage} />
            <br/>
            </label>
            <label>
            <input  type="text" placeholder="Title" value={this.state.titleValue} onChange={this.handleChangeTitle} />
            </label>
            <br/>
            <input type="submit" value="New Post" />
          </form>

          <div>
            {this.state.allValues.map((imgPost, index) => post(imgPost, index))}
          </div>
 
          </div>  
      </div>
    );
  }
}

export default App;
