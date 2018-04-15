import React from 'react';

const Search = props => (
	<form>
	    <div className="form-group">
	    	<label htmlFor="search">Search:</label>
	    	<input
	        onChange={props.handleInputChange}
	        value={props.value}
	        name='search'
	        type="text"
	        className='search-bar'
	        placeholder="Search for a medication"
	        id="search"
	    	/>
	    	<br />
	    	<button onClick={props.handleFormSubmit} className="btn btn-primary">
	        Search
	    	</button>
    	</div>
	</form>
);

export default Search;