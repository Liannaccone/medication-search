import React, { Component } from "react";
import API from "../utils/API";

class MedSearchContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drugs: [],
      search: ''
    };

  }

  render() {
  	return (
  		<div><strong>Hello!!</strong></div>
  	);

  }


}

export default MedSearchContainer;