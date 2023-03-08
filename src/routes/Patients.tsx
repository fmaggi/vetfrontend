import React, { useState } from 'react'

import { Box, Card, CardBody, CardHeader, Heading, Button, Flex, SimpleGrid, Text, useColorModeValue, Input, FormControl, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { Search2Icon, AddIcon } from '@chakra-ui/icons'
import { Form, Link, useLoaderData } from 'react-router-dom'

export async function loader() {
    const patients = ['Olivia', 'Alica', 'Romeo', 'Oliver', 'Poncho']
    return patients;
}

export default function Patients() {
    const patients = useLoaderData() as string[];
    const bg = useColorModeValue('white', 'gray.700')

    const [filter, setFilter] = useState('')

    return (
        <Box w='100%' h='100vh'>
            <SimpleGrid w='100%' p='5' columns={1} spacing={5}>
                <Card bg={bg} shadow='sm' h='5rem'>
                    <CardBody>
                        <Flex align='center' justify='space-between'>
                            <InputGroup w='50%'>
                                <InputLeftElement
                                    pointerEvents='none'
                                    children={<Search2Icon color='gray.400' />}
                                />
                                <Input pr='6.5rem' variant='filled' placeholder='Buscar' value={filter} onChange={e => setFilter(e.target.value.toLowerCase())} />
                                <InputRightElement w='6.5rem'>
                                    <Form action='/pacientes/busquedaAvanzada'>
                                        <Button type='submit' size='sm' colorScheme='blue' variant='ghost'>Avanzado</Button>
                                    </Form>
                                </InputRightElement>
                            </InputGroup>
                            <Form action='/paciente/nuevo'>
                                <Button type='submit' leftIcon={<AddIcon />} colorScheme='teal'>Nuevo Paciente</Button>
                            </Form>
                        </Flex>
                    </CardBody>
                </Card>
                {
                    patients.map(patient => {
                        if (!patient.toLowerCase().startsWith(filter)) {
                            return null;
                        }
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
        </Box >
    )
}
