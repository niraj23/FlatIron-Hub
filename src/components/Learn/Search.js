import React from "react";
import styled from "styled-components";


function Search({searchTerm, onSearchChange, sortBy, handleSort}) {
  return (
    <div className="ui large fluid icon input" id= "search">
    {/* <h3>Search Resources </h3> */}
      <input
        type="text"
        id ="search"
        placeholder="Search All Resources"
        value= {searchTerm}
        onChange={(e)=> onSearchChange(e.target.value)}
      />
      <i className="circular search link icon"></i>
      <br /> 
      <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'row'}}>
   <strong style={{color: 'white'}}>Sort by:  </strong>
   <div className="ui radio checkbox" style={{marginLeft: '8px'}}>
      <input 
      type="radio"
      value="name"
      checked={sortBy === "name"}
      onChange={handleSort}
      />
      <label style={{marginLeft: '8px', color: "white", fontSize: 'medium'}}>Name</label>
   </div>
   <div className="ui radio checkbox" style={{marginLeft: '8px'}}>
      <input
      type="radio"
      value="description"
      checked={sortBy === 'description'}
      onChange={handleSort}
      />
      <label style={{marginLeft: '8px', color: "white", fontSize: 'medium'}}>Description</label>
   </div>

    </div>
    </div>
  );
}
export default Search;