import React from 'react';
import { createPortal } from 'react-dom';

export function usePortal(portalId: string) {
  const modalRoot = React.useMemo(() => {
    let modalRootElement = document.getElementById(portalId);
    if (modalRootElement == null) {
      modalRootElement = document.createElement('div');
      modalRootElement.setAttribute('id', portalId);
      document.body.appendChild(modalRootElement);
    }
    return modalRootElement;
  }, [portalId]);

  return (children: React.ReactNode) => createPortal(children, modalRoot);
}
