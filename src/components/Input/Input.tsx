import React from 'react';

interface IInputProps {
  handlerInput?: (value: React.ChangeEvent<HTMLInputElement>) => void
  value?: string;
  className?: string;
}

export const Input: React.FC<IInputProps> = (props) => {
  const {handlerInput, value, className} = props;
  return (
    <input type='text' className={ className } value={ value } onChange={ handlerInput }/>
  );
}
