import React from 'react'

import { Box, Card, CardBody, CardHeader, Heading, Button, Flex, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react'
import { Link, useLoaderData } from 'react-router-dom'

export async function loader() {
    const patients = [ 'Olivia', 'Alica', 'Romeo', 'Oliver', 'Poncho']
    return patients;
}

export default function Patients() {
    const patients = useLoaderData() as string[];
    const bg = useColorModeValue('white', 'gray.700')

    return (
        <SimpleGrid w='100%' h='100%' p='5' columns={1} spacing={5}>
            {
                patients.map(patient => {
                    return (
                        <Card key={patient} bg={bg} shadow='sm'>
                            <CardHeader>
                                <Heading>{patient}</Heading>
                            </CardHeader>
                            <CardBody>
                                <Flex align='center' justify='space-between'>
                                    <Text>
                                        Muy linda mascota
                                    </Text>
                                    <Button as={Link} to={`/labs/${patient}`} colorScheme='teal'>Estudio</Button>
                                </Flex>
                            </CardBody>
                        </Card>
                    );
                })
            }
        </SimpleGrid>
    )
}
