import React from 'react';
import {
  Editor,
  EditorState
} from 'draft-js';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
  }

  onChange(editorState) {
    this.setState({
      editorState
    });
  }
  render() {
    return (
      <div >
        Testing
        <h1>Editor</h1>
        <Editor
          onChange= {this.onChange.bind(this)}
          editorState={this.state.editorState}
        />
      </div >
    );
  }
}

export default Main;