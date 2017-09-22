import React from "react";

import PosterUrls from "../../utilities/PosterUrls";

const Poster = props => (
  <span style={{ backgroundImage: `url('${props.posterUrl}')` }} />
);

const PosterAnimation = () => (
  <div>
    {PosterUrls.map((singleUrl, i) => (
      <Poster key={i} posterUrl={singleUrl[i]} />
    ))}
  </div>
);

export default PosterAnimation;
