import React from 'react';

const Search = props => (
	<div className='col-md-4 panel panel-default'>
		<div className='panel-heading'>
			<h3 className='panel-title'>Search</h3>
		</div>
		<div className='panel-body'>
			<br />
			<h6>Enter a medication in the search bar below. </h6>
			<br />
			<h6>Results will generate to the right where you can then select the appropriate dosage to find a comparable alternative. </h6>
			<br />
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
