import React, { Component } from "react";
import Search from './Search';
import DrugConceptList from './DrugConcept_List'
import AlternativeConceptList from './AlternativeConcept_List'
import API from "../utils/API";

class MedSearchContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
    	search: '',
    	drugConceptGroup: [],
    	alternativeConceptGroup: []
    };

  };

  searchDrugName = query => {
  	API.search(query)
  		.then(response => this.setState({ drugConceptGroup: response.data.drugGroup.conceptGroup[1].conceptProperties}))
  		.catch(err => console.log(err));
  };

  searchSimilarDrug = query => {
  	API.searchSimilar(query)
  		.then(response=> this.findAlternativeDrug(response.data.relatedGroup.conceptGroup[0].conceptProperties[0].rxcui))
  		.catch(err => console.log(err))
  };

  findAlternativeDrug = query => {
  	API.findAlternative(query)
  		// .then(response=> console.log(response.data))
  		.then(response=> this.setState({alternativeConceptGroup: response.data.relatedGroup.conceptGroup[0].conceptProperties}))
  		.catch(err => console.log(err))
  }

  handleDrugConceptClick = selectedDrugConcept => {
  	this.searchSimilarDrug(selectedDrugConcept)
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // on form submit, search the RxNorm API for the value of 'this.state.search' 
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchDrugName(this.state.search);
    this.setState({search:'', alternativeConceptGroup: []})
  };

  render() {
  	return (
  		<div>
	  		<Search 
	  			value={this.state.search}
	  			handleInputChange={this.handleInputChange}
	  			handleFormSubmit={this.handleFormSubmit}
	  		/>
  		{this.state.drugConceptGroup
  			? <DrugConceptList 
  				drugs={this.state.drugConceptGroup} 
  				handleDrugConceptClick={this.handleDrugConceptClick}
  				/>
  			: <h3> Drug does not exist </h3>}
  		{this.state.alternativeConceptGroup
  			? <AlternativeConceptList alternatives={this.state.alternativeConceptGroup} />
  			: <h3> No alternatives exist </h3>}
  		</div>
  	);

  }


}

export default MedSearchContainer;