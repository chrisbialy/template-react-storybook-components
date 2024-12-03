/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { palette } from '../palette';
import { FieldContainer } from './FieldContainer';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export function Input({ label, error, ...htmlInputProps }: InputProps) {
  return (
    <FieldContainer label={label} error={error}>
      <input {...htmlInputProps} css={inputStyle} />
    </FieldContainer>
  );
}

const inputStyle = css`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  width: 100%;
  box-sizing: border-box;

  &:focus,
  &:active {
    border-color: ${palette.primary};
  }
`;
