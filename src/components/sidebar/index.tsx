import { Box, Text,  VStack, Flex, useBreakpointValue, useColorMode, IconButton } from '@chakra-ui/react'
import React from 'react'

import { MoonIcon, SunIcon } from '@chakra-ui/icons'

import NavItem from './NavItem';

export default function Sidebar(): JSX.Element {

    const variant = useBreakpointValue({ base: MobileBar(), md: ComputerBar() })

    return (
        variant ? variant : <h1>hello</h1>
    );
}

function MobileBar() {
    return (
        <Flex w={{ base: 'full', md: 60 }} bg='blue' direction='column'>
            Mobile
        </Flex>
    );
}

function ComputerBar() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box
            aria-label='Main Navigation'
            as='nav'
            pos='sticky'
            overscrollBehavior='contain'
            top='0rem'
            w='15%'
            h='100vh'
            overflowY='auto'
            className='sidebar-content'
            flexShrink={0}
            display={{ base: 'none', md: 'block' }} shadow='none'>
            <Flex h="20" align="center" mx='8' justify="space-between">
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    Logo
                </Text>
                <IconButton icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} onClick={toggleColorMode} variant="ghost" aria-label='toggle theme'/>
            </Flex>
            <Flex align="center" justifyContent="space-between" direction='column' p='3'>
                <VStack w='100%'>
                    <NavItem to='/'>Home</NavItem>
                    <NavItem to='/pacientes'>Pacientes</NavItem>
                </VStack>
            </Flex>
        </Box>
    );
}
