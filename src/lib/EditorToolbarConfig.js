/* @flow */

export type StyleConfig = {
  label: string;
  style: string;
  className?: string;
};

export type StyleConfigList = Array<StyleConfig>;

export type GroupName = 'INLINE_STYLE_BUTTONS' | 'ALIGN_STYLE_BUTTONS' | 'BLOCK_TYPE_BUTTONS' | 'LINK_BUTTONS' | 'BLOCK_TYPE_DROPDOWN' | 'HISTORY_BUTTONS' | 'MEDIA_BUTTONS';

export type ToolbarConfig = {
  display: Array<GroupName>;
  INLINE_STYLE_BUTTONS: StyleConfigList;
  ALIGN_STYLE_BUTTONS: StyleConfigList;
  BLOCK_TYPE_DROPDOWN: StyleConfigList;
  BLOCK_TYPE_BUTTONS: StyleConfigList;
};

export const INLINE_STYLE_BUTTONS: StyleConfigList = [
  {label: 'Bold', style: 'BOLD'},
  {label: 'Italic', style: 'ITALIC'},
  {label: 'Strikethrough', style: 'STRIKETHROUGH'},
  {label: 'Monospace', style: 'CODE'},
  {label: 'Underline', style: 'UNDERLINE'},
];
export const ALIGN_STYLE_BUTTONS: StyleConfigList = [
  {label: 'Left', style: 'ALIGN-LEFT'},
  {label: 'Center', style: 'ALIGN-CENTER'},
  {label: 'Right', style: 'ALIGN-RIGHT'},
];

export const BLOCK_TYPE_DROPDOWN: StyleConfigList = [
  {label: 'Normal', style: 'unstyled'},
  {label: 'Heading Large', style: 'header-one'},
  {label: 'Heading Medium', style: 'header-two'},
  {label: 'Heading Small', style: 'header-three'},
  {label: 'Code Block', style: 'code-block'},
];
export const BLOCK_TYPE_BUTTONS: StyleConfigList = [
  {label: 'UL', style: 'unordered-list-item'},
  {label: 'OL', style: 'ordered-list-item'},
  {label: 'Blockquote', style: 'blockquote'},
];

let EditorToolbarConfig: ToolbarConfig = {
  display: ['INLINE_STYLE_BUTTONS', 'ALIGN_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS', 'MEDIA_BUTTONS'],
  INLINE_STYLE_BUTTONS,
  ALIGN_STYLE_BUTTONS,
  BLOCK_TYPE_DROPDOWN,
  BLOCK_TYPE_BUTTONS,
};

export default EditorToolbarConfig;
