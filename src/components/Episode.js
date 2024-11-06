import React from "react";

function Episode(props) {
  let { myEpisode } = props.eachEpisode;

  console.log(props)

  return (
    <div>
      <p>Episode {props.eachEpisode.number} - {props.eachEpisode.name}</p>
    </div>
  );
}

export default Episode;
