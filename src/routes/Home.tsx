import { Form } from 'react-router-dom'



import {
    Button,
    Center,
    useColorModeValue
} from '@chakra-ui/react'
import {useWindowSize} from "../hooks/window";

export default function Home() {
    const winSize = useWindowSize();
    return (
        <Center h={winSize.h} w='100%' bg={useColorModeValue('white', 'gray.700')}>
            <Form method='post' action={'/createPatient'}>
                 <Button px={winSize.w / 10} py={winSize.h / 10} type='submit' fontSize={winSize.h / 10} colorScheme={useColorModeValue('purple', 'purple')}>Añadir Paciente</Button>
            </Form>
        </Center>
    )
}
