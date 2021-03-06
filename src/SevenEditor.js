/* @flow */
import React, {Component} from 'react';
import RichTextEditor, {createEmptyValue, createValueFromString} from './RichTextEditor';
import autobind from 'class-autobind';

import type {EditorValue} from './RichTextEditor';

type Props = {
  stringValue: String
};

type State = {
  value: EditorValue;
  readOnly: boolean;
};

export default class SevenEditor extends Component {
	props: Props;
	state: State;

	constructor(props) {
		super(props);
		autobind(this);

		this.state = {
			value: this._changeFormat(this.props.stringValue),
			readOnly: false,
		};
	}

  componentWillReceiveProps(nextProps) {
    let {
      stringValue
    } = nextProps;

    this.setState({ value: this._changeFormat(this.props.stringValue) });
  }

	render() {
		let { value, readOnly } = this.state;

		return (
			<RichTextEditor
				value={value}
				onChange={this._onChange}
				className="rte-seven-editor"
				placeholder="Tell a story"
				toolbarClassName="rte-toolbar"
				editorClassName="rte-editor"
			/>
		)

	}

	_onChange(value: EditorValue) {
    let { onChange } = this.props;

		this.setState({value});
    if (!!onChange) onChange(value); // Send the changes up to the parent component as Editor State value(or html, marakdown format)
	}

  _changeFormat(stringValue: String) {
    return !!stringValue ? createValueFromString(stringValue) : createEmptyValue();
  }

}
