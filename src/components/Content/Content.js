import React from "react";

import "./Content.scss";

const Content = ({ heading = undefined, paragraphs }) => {
  return (
    <div id="exploreus" className="content">
      {heading && <div className="content-heading">{heading}</div>}
      {paragraphs.map(text => (
        <p className="paragraph">{text}</p>
      ))}
    </div>
  );
};

export default Content;
