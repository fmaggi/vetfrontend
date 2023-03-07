import { useLoaderData} from 'react-router-dom'



import {
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
            value: Math.random() * 5
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
                        <Center>
                            <h1>{test.name}</h1>
                            <text>{test.value}</text>
                        </Center>
                    )
                })
            }
        </Center>
    )
}
