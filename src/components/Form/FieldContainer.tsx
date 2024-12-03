/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { palette } from '../palette';

export type FieldContainerProps = {
  label?: string;
  error?: string;
};

export function FieldContainer({ label, error, children }: React.PropsWithChildren<FieldContainerProps>) {
  return (
    <div css={containerStyle}>
      <label className="input-label">{label}</label>
      {children}
      {error != null && <div className="input-error">{error}</div>}
    </div>
  );
}

const containerStyle = css`
  position: relative;
  display: block;

  .input-label {
    font-size: 15px;
  }

  .input-error {
    color: ${palette.error};
    font-size: 12px;
  }
`;
