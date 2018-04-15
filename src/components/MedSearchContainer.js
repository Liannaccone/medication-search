import React, { Component } from "react";
import Search from './Search';
import DrugConceptList from './DrugConcept_List'
import API from "../utils/API";

class MedSearchContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drugConceptGroup: [],
      search: ''
    };

  }

  searchDrugName = query => {
  	API.search(query)
  		.then(response => this.setState({ drugConceptGroup: response.data.drugGroup.conceptGroup[1].conceptProperties}))
  		.catch(err => console.log(err));
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
  };

  render() {
  	return (
  		<div>
	  		<Search 
	  			value={this.state.search}
	  			handleInputChange={this.handleInputChange}
	  			handleFormSubmit={this.handleFormSubmit}
	  		/>
  		{this.state.drugConceptGroup.length > 0
  			? <DrugConceptList drugs={this.state.drugConceptGroup} />
  			: <h3> No Results to Display </h3>}
  		</div>
  	);

  }


}

export default MedSearchContainer;