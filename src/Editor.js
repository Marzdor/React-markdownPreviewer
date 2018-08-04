import React from "react";

const Editor = props => {
  return (
    <section>
      <h2 className="title">Editor</h2>
      <textarea value={props.value} onChange={props.handleChange} id="editor" />
    </section>
  );
};

export default Editor;
