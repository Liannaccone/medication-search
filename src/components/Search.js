import React from 'react';

const Search = props => (
	<div className='col-md-4 panel panel-default'>
		<div className='panel-heading'>
			<h3 className='panel-title'>Search</h3>
		</div>
		<div className='panel-body'>
			<form>
			    <div className="form-group">
			    	<input
			        onChange={props.handleInputChange}
			        value={props.value}
			        name='search'
			        type="text"
			        className='search-bar'
			        placeholder="Enter medication here"
			        id="search"
			    	/>
			    	<br />
			    	<button onClick={props.handleFormSubmit} className="btn btn-primary">
			        Search
			    	</button>
		    	</div>
			</form>
		</div>
	</div>
);

export default Search;
