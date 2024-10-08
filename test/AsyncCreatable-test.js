'use strict';
/* global describe, it, beforeEach */
/* eslint react/jsx-boolean-value: 0 */

var jsdomHelper = require('../testHelpers/jsdomHelper');
jsdomHelper();
var unexpected = require('unexpected');
var unexpectedDom = require('unexpected-dom');
var unexpectedReact = require('unexpected-react');
var expect = unexpected
	.clone()
	.installPlugin(unexpectedDom)
	.installPlugin(unexpectedReact);

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-dom/test-utils');
var sinon = require('sinon');
var Select = require('../src');

describe('AsyncCreatable', () => {
	let creatableInstance, creatableNode, filterInputNode, loadOptions;

	beforeEach(() => {
		loadOptions = sinon.stub();
	});

	function createControl(props = {}) {
		props.loadOptions = props.loadOptions || loadOptions;
		creatableInstance = TestUtils.renderIntoDocument(
			<Select.AsyncCreatable {...props} />
		);
		creatableNode = ReactDOM.findDOMNode(creatableInstance);
		findAndFocusInputControl();
	}

	function findAndFocusInputControl() {
		filterInputNode = creatableNode.querySelector('input');
		if (filterInputNode) {
			TestUtils.Simulate.focus(filterInputNode);
		}
	}

	it('should create an inner Select', () => {
		createControl();
		expect(creatableNode, 'to have attributes', {
			class: ['Select'],
		});
	});

	it('should render a decorated Select (with passed through properties)', () => {
		createControl({
			inputProps: {
				className: 'foo',
			},
		});
		expect(creatableNode.querySelector('.Select-input'), 'to have attributes', {
			class: ['foo'],
		});
	});

	describe('.focus()', () => {
		beforeEach(() => {
			createControl({});
			TestUtils.Simulate.blur(filterInputNode);
		});

		it('focuses the search input', () => {
			expect(filterInputNode, 'not to equal', document.activeElement);
			creatableInstance.focus();
			expect(filterInputNode, 'to equal', document.activeElement);
		});
	});
});
