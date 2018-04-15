import React from 'react';
import DrugConceptListItem from './DrugConcept_List_Item'

const DrugConceptList = (props) => {
	console.log(props.drugs)
	const drugItems = props.drugs.map((drug) => {
		return(
			<DrugConceptListItem
				key={drug.rxcui}
				drug={drug}
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