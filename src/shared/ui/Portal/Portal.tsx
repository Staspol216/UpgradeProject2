import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children?: ReactNode;
    element?: HTMLElement;
}

export const Portal: FC<PortalProps> = (PortalProps) => {
    const {
        children,
        element = document.body,
    } = PortalProps;
    return createPortal(children, element);
};
