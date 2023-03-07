import {useFetcher, useLoaderData} from 'react-router-dom'



import {
    Card,
    CardHeader,
    Heading,
    CardBody,
    Flex,
    SimpleGrid,
    Text, useColorModeValue, MenuList, Button, MenuButton, MenuItem, Menu
} from '@chakra-ui/react'

import tests from "../data/tests";
import {ChevronDownIcon} from "@chakra-ui/icons";

export /*async*/ function loader(days:number) {
    /*
    fetch(BACKEND).then(res=>res.json());

     */
    if(days === -1)
        days = 100;
    return tests[0].fields.map(field => {
        return {
            name: field.label,
            value: Math.floor(Math.random() * days)
        }
    });
}


export default function Stats() {
    const data = useLoaderData() as any[];
    const bg = useColorModeValue('white', 'gray.700')
    const fetcher = useFetcher();


    function loadDays(days: number){
        fetcher.load(`/estadisticas/${days}`);
    }

    return (

        <SimpleGrid w='100%' h='100vh' p='5' columns={1} spacing={5}>

            <Card key={"period_chooser"}>
                <CardHeader>
                    <Heading>
                        Elegir Periodo
                    </Heading>
                </CardHeader>
                <CardBody>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            Periodo
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={() => loadDays(7)}>Ultimos 7 dias</MenuItem>
                            <MenuItem onClick={() => loadDays(15)}>Ultimos 15 dias</MenuItem>
                            <MenuItem onClick={() => loadDays(30)}>Ultimos 30 dias</MenuItem>
                            <MenuItem onClick={() => loadDays(90)}>Ultimos 3 meses</MenuItem>
                            <MenuItem onClick={() => loadDays(-1)}>Todo</MenuItem>
                        </MenuList>
                    </Menu>
                </CardBody>
            </Card>
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
