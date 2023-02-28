import { Link, Button } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { useLocation, Link as RLink } from 'react-router-dom';

interface NavItemProps {
    children: ReactNode,
    to: string
}

export default function NavItem({ children, to }: NavItemProps) {
    const { pathname } = useLocation();

    const isActive = to === '/' ? pathname === '/' : pathname.startsWith(to);

    return (
        <Button
            as={RLink}
            to={to}
            w='100%'
            variant={isActive ? 'solid' : 'ghost'}
            colorScheme={isActive ? 'teal' : 'gray'}
        >
            {children}
        </Button>
    )
}
