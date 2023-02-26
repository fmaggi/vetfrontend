import { Link, Button } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { useLocation, Link as RLink } from 'react-router-dom';

interface NavItemProps {
    children: ReactNode,
    to: string
}

export default function NavItem({ children, to }: NavItemProps) {
    const location = useLocation();
    const path = location.pathname;

    const isActive = to === '/' ? path === '/' : path.startsWith(to);

    return (
        <Button
            as={RLink}
            to={to}
            w='100%'
            variant={isActive ? 'solid' : 'ghost'}
            colorScheme={isActive ? 'green' : 'gray'}
        >
            {children}
        </Button>
    )
}
