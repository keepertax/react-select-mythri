import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';

const STATES = require('../data/searchStates');

var SearchField = createClass({
	displayName: 'SearchField',
	propTypes: {
		label: PropTypes.string,
	},
	getInitialState() {
		return {
			selectValue: null,
		};
	},
	updateValue(newValue) {
		this.setState({
			selectValue: newValue,
		});
	},
	render() {
		var options = STATES.US;
		return (
			<div className="section">
				<h3 className="section-heading">{this.props.label}</h3>
				<Select
					id="state-select"
					ref={(ref) => {
						this.select = ref;
					}}
					onBlurResetsInput={false}
					onSelectResetsInput={false}
					autoFocus
					options={options}
					simpleValue
					name="selected-state"
					value={this.state.selectValue}
					onChange={this.updateValue}
					searchable
				/>
			</div>
		);
	},
});

module.exports = SearchField;
