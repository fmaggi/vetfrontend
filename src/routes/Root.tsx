import React from "react"

import { Box, Flex, useColorModeValue } from "@chakra-ui/react"

import Sidebar from '../components/sidebar'
import { Outlet } from "react-router-dom"

export default function Root() {
    return (
        <Box w='full' bg={useColorModeValue('white', 'gray.700')}>
            <Box display={{ md: 'flex' }}>
                <Sidebar />
                <Box flex='1' minW='0'>
                    <Box px={5} mx='auto'>
                        <Flex>
                            <Box
                                minW='0'
                                flex='auto'
                                px={{ base: '4', sm: '6', xl: '8' }}
                                pt='10'
                                pb='10'>
                                    <Outlet />
                            </Box>
                        </Flex>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
