import React from 'react';

import './Content.scss';

const Content = ({ id = '', heading = undefined, paragraphs, getAccess }) => {
  return (
    <div id={id} className="content">
      {heading && <div className="content-heading">{heading}</div>}
      {paragraphs.map((text) => (
        <p className="paragraph">{text}</p>
      ))}
      {getAccess && (
        <div className="get-access">
          <a href={getAccess.URL}>{getAccess.text}</a>
        </div>
      )}
    </div>
  );
};

export default Content;
