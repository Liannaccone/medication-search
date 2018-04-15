import React from 'react';

const AlternativeConceptListItem = ({alternative}) => {
	return(
		<li id={alternative.rxcui} className='list-group-item'>
			{alternative.synonym ? alternative.synonym : alternative.name}
		</li>
	)
}

export default AlternativeConceptListItem;