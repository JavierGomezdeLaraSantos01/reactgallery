import React from "react";

const Image = ({ url, title }) => {(
  <li>
    <img src={url} alt={title}></img>
  </li>)
};

export default Image;