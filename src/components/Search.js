import React, { useState } from "react";
import { Input } from "semantic-ui-react";

function Search(props) {

  const [search, setSearch] = useState('')

  console.log(search)

  function handleShowSearch(e) {
    setSearch(e.target.value)
    props.handleSearch(search)
  }

  return (
    <div>
      <Input
        type="text"
        placeholder="Search"
        onChange={handleShowSearch}
        value={search}
      />
    </div>
  );
}

export default Search;
