import React from 'react';
import AlternativeConceptListItem from './AlternativeConcept_List_Item';

const AlternativeConceptList = (props) => {
	const alternativeItems = props.alternatives.map((alternative) => {
		return(
			<AlternativeConceptListItem
				key={alternative.rxcui}
				alternative={alternative}
			/>
		)
	});


	return(
		<div className=" col-md-4 panel panel-default">
			<div className="panel-heading">
		    	<h3 className="panel-title">Suggested Alternatives</h3>
		  	</div>
		  	<div className="panel-body">
				<ul className='list-group'>
					{alternativeItems}
				</ul>
	  		</div>
		</div>
	)

}

export default AlternativeConceptList;