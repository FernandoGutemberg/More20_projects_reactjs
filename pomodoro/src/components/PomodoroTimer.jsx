import { useState, useEffect } from "react";


import {
    Box,
    Button,
    Text,
    Input,
    FormControl,
    FormLabel,
    Center,
    HStack,
} from "@chakra-ui/react";

const PomodoroTimer = () => {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [userTime, setUserTime] = useState(25);

    return (

        <Center width="100%" maxWidth="400px" p="4">
            <Box>

                <Text fontSize="4x1" mb="4" textAlign="center">
                    {String(minutes).padStart(2, "0")} :{" "}
                    {String(seconds).padStart(2, "0")}
                </Text>
                <FormControl mb="4">
                    <FormLabel>Definir tempo(minutos)</FormLabel>
                    <Input
                        type="number"
                        value={userTime}
                        onChange={handleChange}
                        isDisabled={isActive} />
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
