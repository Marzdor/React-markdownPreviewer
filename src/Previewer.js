import React from "react";

const marked = window.marked;
const renderer = new marked.Renderer();

renderer.link = function(href, title, text) {
  return (
    '<a target="_blank" href="' +
    href +
    '" title="' +
    title +
    '">' +
    text +
    "</a>"
  );
};

const Previewer = props => {
  function createHtml() {
    return {
      __html: marked(props.text, {
        renderer: renderer
      })
    };
  }

  return (
    <section>
      <h2 className="title">Previewer</h2>
      <div id="preview" dangerouslySetInnerHTML={createHtml()} />
    </section>
  );
};

export default Previewer;
