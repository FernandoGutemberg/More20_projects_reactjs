import { useState, useEffect } from "react";


import {
    Box,
    Button,
    Text,
    Input,
    FormControl,
    FormLabel,
    Center,
    HStack
} from "framer-motion";

const PomodoroTimer = () => {
    return (

        <Center width="100%" maxWidth="400px" p="4">
            <Box>

                <Text fontSize="4x1" mb="4" textAlign="center">
                    10:00
                </Text>
                <FormControl mb="4">
                    <FormLabel>Definir tempo(minutos)</FormLabel>
                    <Input type="number" />
                </FormControl>
                <HStack spacing="4">
                    <Button>Iniciar</Button>
                    <Button colorSchema="gray">Reiniciar</Button>

                </HStack>
            </Box>
        </Center>
    );
};

export default PomodoroTimer;
