import React from "react";

const Editor = props => {
  return (
    <section>
      <h2>Editor</h2>
      <textarea onChange={props.handleChange} id="editor" />
    </section>
  );
};

export default Editor;
