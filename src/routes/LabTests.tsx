import React from 'react'

import { Form, redirect, useLoaderData } from 'react-router-dom'

import {
    Card,
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    FormHelperText,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    useColorModeValue,
    CardHeader,
    Heading,
    CardBody,
    Button,
    VStack,
    InputGroup,
    InputRightAddon,
    Center
} from '@chakra-ui/react'

export function action(params: any) {
    const request = params.request;
    console.log(request);
    return redirect('/');
}

interface Test {
    label: string,
    units: string,
}

const quimica: Test[] = [
    {
        label: 'Urea',
        units: 'mg/dL'
    },
    {
        label: 'Creatina',
        units: 'mg/dL'
    },
    {
        label: 'Fosfatasa Alcalina',
        units: 'ui/L'
    },
    {
        label: 'GPT',
        units: 'ui/L'
    },
    {
        label: 'Proteinas',
        units: 'g/dL'
    },
    {
        label: 'Albúmina',
        units: 'g/dL'
    },
    {
        label: 'Fosforo',
        units: 'mg/dL'
    }
]

export default function LabTests() {
    const patient = useLoaderData() as string;

    return (
        <Card bg={useColorModeValue('white', 'gray.800')} w='60%' shadow='lg'>
            <CardHeader>
                <Heading>{patient} - Quimica</Heading>
            </CardHeader>
            <CardBody>
                <Form method='post'>
                    <VStack spacing={5}>
                    {
                        quimica.map(entry => {
                            const label = entry.label;
                            const nameSplit = label.toLowerCase().split(' ');
                            const name = nameSplit.join('-');

                            return (
                                <FormControl key={name}>
                                    <FormLabel htmlFor={name}>{label}</FormLabel>
                                    <InputGroup>
                                        <Input type='number' name={name} />
                                        <InputRightAddon w='12%'>
                                            <Center w='100%'>
                                                { entry.units }
                                            </Center>
                                        </InputRightAddon>
                                    </InputGroup>
                                </FormControl>
                            )
                        })
                    }

                        <Button type='submit' size='lg' colorScheme='blue'>Listo</Button>
                    </VStack>
                </Form>
            </CardBody>
        </Card>
    )
}
