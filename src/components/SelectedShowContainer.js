import React, { useState } from "react";
import Episode from "./Episode";

function SelectedShowContainer(props) {

  const [selectedSeason, setSelectedSeason] = useState(1);

  function mapSeasons() {
    if (!!props.allEpisodes) {
      let seasons = props.allEpisodes.map((e) => e.season).unique();

      return seasons.map((s) => {
        return (
          <option value={s} key={s}>
            Season {s}
          </option>
        );
      });
    }
  }

  function mapEpisodes() {
    return props.allEpisodes.map((e) => {
      if (e.season == selectedSeason) {
        return <Episode eachEpisode={e} key={e.id} />;
      }
    });
  }

  function handleSelectionChange(e) {
    setSelectedSeason(e.target.value)
  }

  const { selectedShow } = props;

  return (
    <div style={{ position: "static" }}>
      <h2>{props.selectedShow.name}</h2>
      <img src={props.selectedShow.image.medium} alt="" />
      <p dangerouslySetInnerHTML={{ __html: props.selectedShow.summary }}></p>
      <p>Premiered: {props.selectedShow.premiered}</p>
      <p>Status: {props.selectedShow.status}</p>
      <p>Average Rating: {props.selectedShow.rating.average}</p>
      <select style={{ display: "block" }} value={selectedSeason} onChange={handleSelectionChange}>
        {mapSeasons()}
      </select>
      {mapEpisodes()}
    </div>
  );

  // return (
  //   <div style={{ position: "static" }}>
  //     <h2>{props.selectedShow.name}</h2>
  //     <img src={props.selectedShow.image.medium} alt="" />
  //     <p dangerouslySetInnerHTML={{ __html: props.selectedShow.summary }}></p>
  //     <p>Premiered: {props.selectedShow.premiered}</p>
  //     <p>Status: {props.selectedShow.status}</p>
  //     <p>Average Rating: {props.selectedShow.rating.average}</p>

  //   </div>
  // );
}





Array.prototype.unique = function () {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    if (!arr.includes(this[i])) {
      arr.push(this[i]);
    }
  }
  return arr;
};

export default SelectedShowContainer
