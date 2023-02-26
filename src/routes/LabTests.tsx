import React from 'react'

import { Form, redirect, useLoaderData } from 'react-router-dom'

import {
    Card,
    FormControl,
    FormLabel,
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
    VStack
} from '@chakra-ui/react'

export function action(params: any) {
    const request = params.request;
    console.log(request);
    return redirect('/');
}

const quimica = [
    'Urea', 'Creatina', 'Fosfatasa Alcalina', 'GPT', 'Proteinas', 'Albúmina', 'Fosforo'
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
                    <VStack>
                    {
                        quimica.map(entry => {
                            const label = entry;
                            const nameSplit = entry.toLowerCase().split(' ');
                            const name = nameSplit.join('-');

                            return (
                                <FormControl key={entry}>
                                    <FormLabel htmlFor={name}>{label}</FormLabel>
                                    <NumberInput precision={2} step={0.01}>
                                        <NumberInputField name={name}/>
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
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
