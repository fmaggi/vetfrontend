import { useLoaderData} from 'react-router-dom'



import {
    Card,
    CardHeader,
    Heading,
    CardBody,
    Flex,
    SimpleGrid,
    Text, useColorModeValue
} from '@chakra-ui/react'

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
    const bg = useColorModeValue('white', 'gray.700')

    return (

        <SimpleGrid w='100%' h='100%' p='5' columns={1} spacing={5}>
            {
                data.map(test => {
                    return (
                        <Card key={test.name} bg={bg} shadow='sm'>
                            <CardHeader>
                                <Heading>{test.name}</Heading>
                            </CardHeader>
                            <CardBody>
                                <Flex align='center' justify='space-between'>
                                    <Text>
                                        Cantidad: {test.value}
                                    </Text>
                                </Flex>
                            </CardBody>
                        </Card>
                    );
                })
            }
        </SimpleGrid>
    )
}
