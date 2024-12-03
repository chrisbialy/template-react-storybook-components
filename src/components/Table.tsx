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
  return (
    <table css={tableStyles}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{formatCell(cell, headers[cellIndex].formatter)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const tableStyles = css`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid black;

    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f2f2f2;
  }

  tr {
    background-color: white;
  }
    
  tr:nth-of-type(even) {
    background-color: #f5f5f5;
  }

  tr:hover {
    background-color: #d9d9d9;
  }
`;

const formatCell = (cellData: React.ReactNode, formatter: HeaderConfig['formatter']) =>
  typeof formatter === 'function' ? formatter(cellData) : cellData;
