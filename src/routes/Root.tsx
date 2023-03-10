import React from "react"

import { Box, Flex, useColorModeValue, Center } from "@chakra-ui/react"

import Sidebar from '../components/sidebar'
import { Outlet } from "react-router-dom"
import { useWindowSize } from "../hooks/window";
import { useAuthContext } from "../hooks/authentication";

export default function Root() {
    const winSize = useWindowSize();
    const authContext = useAuthContext();
    return (
        <Box w={winSize.w} bg={useColorModeValue('gray.200', 'gray.800')}>
            <Box display={{ md: 'flex' }}>
                <Sidebar />
                <Box flex='1' minW='0'>
                    <Box mx='auto'>
                        <Flex overflow='hidden'>
                            <Center h={winSize.h}
                                overflow='auto'
                                minW='0'
                                flex='auto'>
                                <Outlet context={authContext} />
                            </Center>
                        </Flex>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
