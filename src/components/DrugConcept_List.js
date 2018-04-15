import React from 'react';
import DrugConceptListItem from './DrugConcept_List_Item'

const DrugConceptList = (props) => {
	const drugItems = props.drugs.map((drug) => {
		return(
			<DrugConceptListItem
				key={drug.rxcui}
				drug={drug}
				handleDrugConceptClick={props.handleDrugConceptClick}
			/>
		)
	});

	return (
		<div className=" col-md-4 panel panel-default">
			<div className="panel-heading">
		    	<h3 className="panel-title">Results</h3>
		  	</div>
		  	<div className="panel-body">
				<ul className='list-group'>
					{drugItems}
				</ul>
	  		</div>
		</div>
	);
}

export default DrugConceptList;