import React from "react";

import PosterUrls from "../../utilities/PosterUrls";

const Poster = props => (
  <span style={{ backgroundImage: `url('${props.posterUrl}')` }} />
);

const PosterAnimation = () => (
  <div>
    {PosterUrls.map((singleUrl, i) => <Poster posterUrl={singleUrl[i]} />)}
  </div>
);

export default PosterAnimation;
