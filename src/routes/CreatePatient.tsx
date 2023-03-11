import {
    Card,
    CardHeader,
    CardBody,
    Heading,
    FormControl,
    FormLabel,
    Input,
    RadioGroup,
    Radio,
    VStack,
    HStack,
    Button
} from '@chakra-ui/react'
import { Form, redirect } from 'react-router-dom'
import { Patient, patients } from '../data/patients';



export async function action({ request }: any) {
    const formData = await request.formData();
    const p = Object.fromEntries(formData);
    p.ID = patients.length;
    p.Edad = Number(p.Edad);
    patients.push(p as Patient);
    return redirect('/pacientes')
}

export default function CreatePatient() {
    return (
        <Card w='70%'>
            <CardHeader>
                <Heading>Nuevo Paciente</Heading>
            </CardHeader>
            <CardBody>
                <Form action='/pacientes/nuevo' method='post'>
                    <VStack spacing={5}>
                        <FormControl isRequired>
                            <FormLabel htmlFor='Nombre'>Nombre</FormLabel>
                            <Input name='Nombre' placeholder='Olivia' />
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel htmlFor='Especie'>Especie</FormLabel>
                            <RadioGroup name='Especie'>
                                <HStack spacing={3}>
                                    <Radio value='Perro'>Perro</Radio>
                                    <Radio value='Gato'>Gato</Radio>
                                </HStack>
                            </RadioGroup>
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel htmlFor='Raza'>Raza</FormLabel>
                            <Input name='Raza' placeholder='Labrador' />
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel htmlFor='Sexo'>Sexo</FormLabel>
                            <RadioGroup name='Sexo'>
                                <HStack spacing={3}>
                                    <Radio value='M'>M</Radio>
                                    <Radio value='F'>F</Radio>
                                </HStack>
                            </RadioGroup>
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel htmlFor='Edad'>Edad</FormLabel>
                            <Input type='number' name='Edad' onWheelCapture={e => e.currentTarget.blur()} />
                        </FormControl>

                        <Button type='submit' colorScheme='blue'>Listo</Button>
                    </VStack>
                </Form>
            </CardBody>
        </Card >
    )
}
