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

	return(
		<ul>
			{drugItems}
		</ul>
	)

}

export default DrugConceptList;