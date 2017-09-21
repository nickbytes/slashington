import React from "react";

const Poster = props => (
  <span style={{ backgroundImage: url(`${props.posterUrl}`) }} />
);

const PosterAnimation = () => (
  <div>
    <h1>PosterAnimation</h1>
  </div>
);

export default PosterAnimation;
