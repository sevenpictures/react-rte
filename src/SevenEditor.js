/* @flow */
import React, {Component} from 'react';
import RichTextEditor, {createEmptyValue} from './RichTextEditor';
import autobind from 'class-autobind';

import type {EditorValue} from './RichTextEditor';

type Props = {};
type State = {
  value: EditorValue;
  readOnly: boolean;
};
console.log('SevenEditor.RichTextEditor', RichTextEditor);
const toolbarConfig = {
	// Optionally specify the groups to display (displayed in the order listed).
	display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
	INLINE_STYLE_BUTTONS: [
		{label: 'Bold', style: 'BOLD', className: 'custom-css-class'},
		{label: 'Italic', style: 'ITALIC'},
		{label: 'Underline', style: 'UNDERLINE'}
	],
	BLOCK_TYPE_DROPDOWN: [
		{label: 'Normal', style: 'unstyled'},
		{label: 'Heading Large', style: 'header-one'},
		{label: 'Heading Medium', style: 'header-two'},
		{label: 'Heading Small', style: 'header-three'}
	],
	BLOCK_TYPE_BUTTONS: [
		{label: 'UL', style: 'unordered-list-item'},
		{label: 'OL', style: 'ordered-list-item'}
	]
};

export default class SevenEditor extends Component {
	props: Props;
	state: State;

	constructor(props) {
		super(props);
		autobind(this);
		this.state = {
			value: createEmptyValue(),
			readOnly: false,
		};
	}

	render() {
		const { value, readOnly } = this.state;

		return (
			<RichTextEditor
				value={value}
				onChange={this._onChange}
				className="rte-seven-editor"
				placeholder="Tell a story"
				toolbarClassName="rte-toolbar"
				editorClassName="rte-editor"
				toolbarConfig={toolbarConfig}
			/>
		)

	}

	_onChange(value: EditorValue) {
		this.setState({value});
	}

}
