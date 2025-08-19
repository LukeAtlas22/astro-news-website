

type InputGroup = {
  showLabel?: boolean,
  buttons: Array<{type: 'primary' | 'accent', textContent: string, position?: number}>,
  input: {type: InputType, placeholder: string, name?: string, classList?: string},
}

type InputType =
  | 'text'
  | 'number'
  | 'email'
  | 'password'
  | 'date'
  | 'time'
  | 'url'
  | 'tel'
  | 'search'
  | 'color'
  | 'file'
  | 'checkbox'
  | 'radio'
  | 'range'
  | 'hidden'
  | 'submit'
  | 'reset'
  | 'button'
  | 'image';

type Input = {
  type: InputType,
  name: string,
  placeholder?: string,
  id?: string,
  classList?: string,
}

export type {
  InputGroup, Input, //....
}