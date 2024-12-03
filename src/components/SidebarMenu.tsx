/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { usePortal } from './usePortal';

export type MenuItem = {
  id?: any;
  title: string;
  items?: MenuItem[];
};

export type SidebarMenuProps = {
  open: boolean;
  items: MenuItem[];
  onClose?: () => void;
  onItemClick: (item: MenuItem) => void;
};

export function SidebarMenu({ open, ...props }: SidebarMenuProps) {
  if (!open) {
    return <></>;
  }

  return <Sidebar {...props} />;
}

const SIDEBAR_ROOT_ID = 'sidebar-root';

function Sidebar({ items, onClose, onItemClick }: Omit<SidebarMenuProps, 'open'>) {
  const renderInPortal = usePortal(SIDEBAR_ROOT_ID);

  const RenderItems = ({ items }: { items: MenuItem[] }) => {
    return (
      <>
        {items.map((item, index) => (
          <li key={index}>
            <div onClick={() => onItemClick(item)} css={styles.menuItem}>
              {item.title}
            </div>
            {item.items != null && (
              <div css={styles.subMenuWrapper}>
                <ul css={styles.subMenu}>
                  <RenderItems items={item.items} />
                </ul>
              </div>
            )}
          </li>
        ))}
      </>
    );
  };

  return renderInPortal(
    <>
      <div css={styles.sidebarWrapper}>
        <ul css={styles.sidebarMenu}>
          <RenderItems items={items} />
        </ul>
      </div>
      <div css={styles.backdrop} onClick={onClose} />
    </>
  );
}

const boderColor = 'rgba(0, 0, 0, 0.1);';

const ulStyle = css`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const styles = {
  backdrop: css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  `,
  sidebarWrapper: css`
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    background-color: white;
    box-shadow: 0px 0px 10px ${boderColor};
    width: 250px;
  `,
  sidebarMenu: ulStyle,
  menuItem: css`
    padding: 10px 20px;
    color: #333;
    cursor: pointer;
    border-bottom: 1px solid ${boderColor};

    &:hover {
      background-color: ${boderColor};
    }
  `,
  subMenuWrapper: css`
    margin-left: 10px;
  `,
  subMenu: css`
    ${ulStyle};
    font-size: 0.8rem;
    border-left: 1px solid ${boderColor};
  `,
};
