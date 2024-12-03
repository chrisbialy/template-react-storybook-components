/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FieldContainer } from './FieldContainer';
import { palette } from '../palette';

export type SwitchProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label?: string;
  error?: string;
};

export function Switch({ label, error, ...htmlInputProps }: SwitchProps) {
  return (
    <FieldContainer label={label} error={error}>
      <label css={switchStyle}>
        <input className="checkbox-component" {...htmlInputProps} type="checkbox" />
        <span className="checkbox-slider" />
      </label>
    </FieldContainer>
  );
}

const width = 40;
const padding = 4;

const height = width / 2 + padding;
const diameter = height - 2 * padding;

const switchStyle = css`
  display: block;
  margin-top: 2px;

  .checkbox-component {
    display: none;
  }

  .checkbox-slider {
    position: relative;
    display: inline-block;
    width: ${width}px;
    height: ${height}px;
    background-color: ${palette.secondary};
    border-radius: ${height}px;
    transition: background-color 0.3s;
  }

  .checkbox-component[type='checkbox']:checked + .checkbox-slider {
    background-color: ${palette.success};
  }

  .checkbox-slider::before {
    position: absolute;
    content: '';
    height: ${diameter}px;
    width: ${diameter}px;
    left: ${padding}px;
    bottom: ${padding}px;
    background-color: white;
    border-radius: 50%;
    transition: transform 0.3s;
  }

  .checkbox-component[type='checkbox']:checked + .checkbox-slider::before {
    transform: translateX(${diameter}px);
  }
`;
