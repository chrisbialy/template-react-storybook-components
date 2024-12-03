/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { palette } from './palette';

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  title?: string;
  description?: React.ReactNode;
  image?: string;
};

export function Card({ title, description, image, children, ...containerProps }: CardProps) {
  return (
    <div css={styles.card} {...containerProps}>
      {image != null && <img src={image} alt={title} css={styles.image} />}
      <div css={styles.content}>
        <h2 css={styles.title}>{title}</h2>
        <p css={styles.descrtiption}>{description}</p>
        {children != null && <div css={styles.children}>{children}</div>}
      </div>
    </div>
  );
}

const styles = {
  card: css`
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  `,
  image: css`
    height: 200px;
    width: 100%;
    object-fit: cover;
  `,
  content: css`
    padding: 16px;
  `,
  title: css`
    font-size: 24px;
    font-weight: bold;
    margin: 0 0 8px 0;
  `,
  descrtiption: css`
    font-size: 16px;
    margin: 0;
  `,
  children: css`
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  `,
};
