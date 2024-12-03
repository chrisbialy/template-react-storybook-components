/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Variants } from './types';
import { Button } from './Button';

export type PaginationProps = {
  pages: number;
  page: number;
  maxItems?: number;
  setPage: (newPage: number) => void;
  variant: Variants;
};

export function Pagination({ pages, page, setPage, maxItems = 7, variant = 'primary' }: PaginationProps) {
  const renderPaginetionItems = () => {
    const items = [];

    let start = Math.max(1, page - Math.floor(maxItems / 2));
    let end = Math.min(pages, start + maxItems - 1);

    if (end - start < maxItems - 1) {
      start = Math.max(end - maxItems + 1, 1);
    }

    for (let i = start; i <= end; i++) {
      items.push(
        <Button
          key={i}
          onClick={() => setPage(i)}
          variant={variant}
          css={[styles.button, i === page ? styles.activeButton : null]}
        >
          {i}
        </Button>
      );
    }

    return items;
  };

  return (
    <div css={styles.container}>
      <Button variant={variant} onClick={() => setPage(page - 1)} disabled={page <= 1} css={styles.prevButton}>
        {'<'}
      </Button>
      {renderPaginetionItems()}
      <Button variant={variant} onClick={() => setPage(page + 1)} disabled={page >= pages} css={styles.nextButton}>
        {'>'}
      </Button>
    </div>
  );
}

const styles = {
  container: css`
    display: flex;
    justify-content: center;
    margin-top: 20px;
  `,
  prevButton: css`
    border-radius: 10px 0 0 10px;
  `,
  nextButton: css`
    border-radius: 0 10px 10px 0;
  `,
  activeButton: css`
    box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.5);
    filter: brightness(1.3);
  `,
  button: css`
    border-radius: 0;
  `,
};
