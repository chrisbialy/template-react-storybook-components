/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export type HeaderConfig = {
  title: React.ReactNode;
  formatter?: (cell: any) => React.ReactNode;
};

export type TableProps = {
  headers: HeaderConfig[];
  data: React.ReactNode[][];
};

export function Table({ headers, data }: TableProps) {
  return <table />;
}
