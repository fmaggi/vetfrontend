import { useLoaderData} from 'react-router-dom'



import {
    Box,
    Center,
    useColorModeValue
} from '@chakra-ui/react'
import {useWindowSize} from "../hooks/window";

import tests from "../data/tests";

export async function loader() {
    /*
    fetch(BACKEND).then(res=>res.json());

     */

    return tests[0].fields.map(field => {
        return {
            name: field.label,
            value: Math.floor(Math.random() * 10)
        }
    });
}

export default function Stats() {
    const data = useLoaderData() as any[];

    const winSize = useWindowSize();
    return (
        <Center h={winSize.h} w='100%' bg={useColorModeValue('white', 'gray.700')}>
            {
                data.map(test => {
                    return (
                        <Box>
                            <h1>{test.name}</h1>
                            <text>{test.value}</text>
                        </Box>
                    )
                })
            }
        </Center>
    )
}
