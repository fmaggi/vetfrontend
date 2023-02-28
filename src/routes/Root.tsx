import React from "react"

import { Box, Flex, useColorModeValue, Center } from "@chakra-ui/react"

import Sidebar from '../components/sidebar'
import { Outlet } from "react-router-dom"

export default function Root() {
    return (
        <Box w='full' bg={useColorModeValue('gray.100', 'gray.800')}>
            <Box display={{ md: 'flex' }}>
                <Sidebar />
                <Box flex='1' minW='0'>
                    <Box mx='auto'>
                        <Flex>
                            <Center
                                minW='0'
                                flex='auto'>
                                    <Outlet />
                            </Center>
                        </Flex>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
