import React from 'react';

const DrugConceptListItem = ({drug, handleDrugConceptClick}) => {
	return(
		<li onClick={() => handleDrugConceptClick(drug.rxcui)} >
			{drug.synonym ? drug.synonym : drug.name}
		</li>
	)
}

export default DrugConceptListItem;