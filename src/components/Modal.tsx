/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { usePortal } from './usePortal';

export type ModalProps = {
  open: boolean;
  title: React.ReactNode;
  footer?: React.ReactNode;
  onClose?: () => void;
};

const MODAL_ROOT_ID = 'modal-root';

export function Modal({ open, ...props }: React.PropsWithChildren<ModalProps>) {
  if (!open) {
    return <></>;
  }

  return <ModalComponent {...props} />;
}

function ModalComponent({ footer, title, onClose, children }: React.PropsWithChildren<Omit<ModalProps, 'open'>>) {
  const renderInPortal = usePortal(MODAL_ROOT_ID);
  return renderInPortal(
    <div css={styles.modal}>
      <div css={styles.backdrop} />
      <div css={styles.content}>
        <div css={styles.header}>
          <div css={styles.title}>{title}</div>
          <button css={styles.close} onClick={onClose}>
            &times;
          </button>
        </div>
        <div css={styles.body}>{children}</div>
        {footer != null && <div css={styles.footer}>{footer}</div>}
      </div>
    </div>
  );
}

const styles = {
  modal: css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  `,
  backdrop: css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  `,
  content: css`
    z-index: 1000;
    background-color: #fff;
    width: 500px;
    max-width: 100%;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    overflow: hidden;
  `,
  header: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #eee;
  `,
  body: css`
    padding: 20px;
  `,
  footer: css`
    padding: 20px;
    border-top: 1px solid #eee;
  `,
  title: css`
    margin: 0;
    font-weight: 800;
  `,
  close: css`
    border: none;
    background-color: transparent;
    font-size: 24px;
    cursor: pointer;
  `,
};
