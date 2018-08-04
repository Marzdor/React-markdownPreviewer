import React, { Component } from "react";
import "./App.css";
import "./App.css";
import Editor from "./Editor.js";
import Previewer from "./Previewer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editor: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      editor: event.target.value
    });
    console.log(event.target.value);
  }
  render() {
    return (
      <article>
        <Editor value={this.state.editor} handleChange={this.handleChange} />
        <Previewer text={this.state.editor} />
      </article>
    );
  }
}

export default App;
