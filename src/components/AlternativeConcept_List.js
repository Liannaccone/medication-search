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
		<ul>
			{alternativeItems}
		</ul>
	)

}

export default AlternativeConceptList;