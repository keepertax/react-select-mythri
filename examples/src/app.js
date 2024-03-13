/* eslint react/prop-types: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import './example.less';

import Creatable from './components/Creatable';
import CustomComponents from './components/CustomComponents';
import CustomRender from './components/CustomRender';
import Multiselect from './components/Multiselect';
import NumericSelect from './components/NumericSelect';
import BooleanSelect from './components/BooleanSelect';
import Australia from './components/Australia';
import States from './components/States';

ReactDOM.render(
	<div>
		<States label="States" />
		<Australia label="Australia" searchable />
		<Multiselect label="Multiselect" />
		<NumericSelect label="Numeric Values" />
		<BooleanSelect label="Boolean Values" />
		<CustomRender label="Custom Render Methods" />
		<CustomComponents label="Custom Placeholder, Option, Value, and Arrow Components" />
		<Creatable
			hint="Enter a value that's NOT in the list, then hit return"
			label="Custom tag creation"
		/>
	</div>,
	document.getElementById('example')
);
