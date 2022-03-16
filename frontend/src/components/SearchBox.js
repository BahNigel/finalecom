import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function SearchBox(props) {
  const [name, setName] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    props.history.push(`/search/name/${name}`);
  };
  return (
    <form className="search" onSubmit={submitHandler}>
      <div className="searchBar">
      <input className="searchInput" placeholder="Search Producs..."
      type="text"
      name="q"
      onChange={(e) => setName(e.target.value)}
      ></input>
      <span className="searchButton">
          <a className="inerSearchButton">
          <FaSearch style={{backgroundColor:'rgb(228, 228, 228)', borderRadius:'50%'}}/>
          </a>
      </span>
      </div>
    </form>
  );
}
