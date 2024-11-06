import React from "react";

function tvShow(props) {
  
  //double check on props. removed medium in props.image


  function handleShowClick() {
    props.selectShow(props.show)
  }

  return (
    <div>
      <br />
      <img src={props.show.image.medium} onClick={handleShowClick} alt={props.show.name} />
    </div>
  );
}

export default tvShow;
