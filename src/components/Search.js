import React from 'react';

const Search = props => (
	<div className='panel panel-default'>
		<div className='panel-heading'>
			<h2 className='panel-title'>Search</h2>
		</div>
		<div className='panel-body'>
			<h5>Enter a medication in the search bar below. </h5>
			<h5>Results will generate to the right where you can then select the appropriate dosage to find a comparable alternative. </h5>
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
			    	<button onClick={props.handleFormSubmit} className="btn btn-success"><span className='glyphicon glyphicon-search'></span>    Search</button>
		    	</div>
			</form>
		</div>
	</div>
);

export default Search;
