import React, { Component } from "react";

class DrugConceptListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: false
		}
	}

	toggleClass() {
    	const currentState = this.state.isActive;
        this.setState({ isActive: !currentState })
        this.props.handleDrugConceptClick(this.props.drug.rxcui);
    };

	render() {
		return(
			<li onClick={() => this.toggleClass()} className={this.state.isActive ? 'active list-group-item' : 'list-group-item'}>
				{this.props.drug.synonym ? this.props.drug.synonym : this.props.drug.name}
			</li>
		)
	}
}

export default DrugConceptListItem;