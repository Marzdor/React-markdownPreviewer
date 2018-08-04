import React from "react";

const marked = window.marked;

const Previewer = props => {
  return (
    <section>
      <h2>Previewer</h2>
      <pre id="previewer">{marked(props.text)}</pre>
    </section>
  );
};

export default Previewer;
