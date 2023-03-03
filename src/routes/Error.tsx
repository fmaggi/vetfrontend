import {Navigate, useNavigate, useRouteError} from "react-router-dom";
import {Button, Center, Flex, Heading, VStack} from "@chakra-ui/react";
import {useWindowSize} from "../hooks/window";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    const navigate = useNavigate();

    const winSize = useWindowSize();
    return (
        <Center h={winSize.h}>
            <Flex direction='column' align='center'>
                <VStack spacing={10}>
                    <Heading fontSize='100px'>🚧 En construccion 👷‍♂</Heading>

                    <Button w='50%' colorScheme='teal' onClick={()=>navigate(-1)}>Volver</Button>
                </VStack>
            </Flex>
        </Center>
    );
}


