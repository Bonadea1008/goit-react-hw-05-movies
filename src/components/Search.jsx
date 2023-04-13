import { useState } from 'react';

const Search = () => {
  const [search, setSearch] = useState('');

  const handleInputChange = ({ target }) => {
    setSearch(target.value);
  };

  const handleSearchSubmit = e => {
    e.preventDefault();
    setSearch('');
  };

  console.log(search);
  return (
    <div>
      <label htmlFor="">
        <input
          type="text"
          name="search"
          onChange={handleInputChange}
          value={search}
        ></input>
      </label>
      <button type="submit" onSubmit={handleSearchSubmit}>
        {' '}
        Search
      </button>{' '}
    </div>
  );
};

export default Search;
