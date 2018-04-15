import React from 'react';

const DrugConceptListItem = ({drug}) => {
	return(
		<li>
			{drug.synonym}
		</li>
	)
}

export default DrugConceptListItem;