import React, { FC } from 'react';
import { Input as _Input } from 'reactstrap';

type Props = {
  placeholder: string;
  value: string;
  onChange: any;
  id: string;
  className?: string;
  autoFocus?: boolean;
};

const Input: FC<Props> = (props) => {
  const placeholder = props.placeholder;
  let className = 'rounded';
  if (props.className) {
    className += props.className;
  }
  return (
    <_Input
      placeholder={placeholder}
      className={className}
      id={props.id}
      autoFocus={props.autoFocus}
    />
  );
};

export default Input;
