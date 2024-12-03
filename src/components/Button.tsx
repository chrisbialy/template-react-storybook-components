/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { palette } from './palette';
import { FillOptions, Variants } from './types';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variants;
  fill?: FillOptions;
  disabled?: boolean;
};

export function Button({ variant = 'primary', fill = 'solid', disabled = false, ...htmlButtonProps }: ButtonProps) {
  const color = palette[variant];
  const customStyle = css`
    background-color: ${fill === 'solid' ? color : 'transparent'};
    color: ${fill === 'solid' ? 'white' : color};
    border: ${fill === 'outline' ? `1px solid ${color}` : 'none'};
  `;
  return <button css={[styles.basic, customStyle, disabled && styles.disabled]} {...htmlButtonProps} />;
}

const styles = {
  basic: css`
    padding: 10px 20px;
    border-radius: 50px;
    cursor: pointer;
    outline: none;

    &:hover {
      box-shadow: inset 0 0 5px ${palette.shadowColor};
    }

    &:active {
      box-shadow: inset 0 0 15px ${palette.shadowColor};
    }
  `,
  disabled: css`
    pointer-events: none;
    filter: grayscale(50%);
  `,
};
