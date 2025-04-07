import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPlatformFilter, setGenreFilter, setSortBy } from '../redux/actions';

function Sidebar() {
  const dispatch = useDispatch();
  const { platformFilter, genreFilter, sortBy } = useSelector((state) => state);

  return (
    <aside className="sidebar">
      <h3>Filters</h3>
      <div>
        <label>Platform:</label>
        <select value={platformFilter} onChange={(e) => dispatch(setPlatformFilter(e.target.value))}>
          <option value="">All</option>
          <option value="pc">PC</option>
          <option value="browser">Browser</option>
          <option value="playstation">Playstation</option>
          {/* Add more platforms */}
        </select>
      </div>
      <div>
        <label>Genre:</label>
        <select value={genreFilter} onChange={(e) => dispatch(setGenreFilter(e.target.value))}>
          <option value="">All</option>
          <option value="action">Action</option>
          <option value="adventure">Adventure</option>
          {/* Add more genres */}
        </select>
      </div>
      <div>
        <label>Sort By:</label>
        <select value={sortBy} onChange={(e) => dispatch(setSortBy(e.target.value))}>
          <option value="name">Name</option>
          <option value="-released">Release Date</option>
          {/* Add more sorting options */}
        </select>
      </div>
    </aside>
  );
}

export default Sidebar;