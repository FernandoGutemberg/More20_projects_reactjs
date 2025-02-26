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

    useEffect(() => {
        let interval;

        if (isActive && (minutes > 0 || seconds > 0)) {
            interval = setInterval(() => {
                if (seconds === 0) {
                    setMinutes(minutes - 1)
                    setSeconds(59)
                } else {
                    setSeconds(seconds - 1);
                }
            }, 1000);
        } else if (minutes === 0 && seconds === 0) {
            alert("Tempo esgotado!");
            resetTimer();
        } else {
            clearInterval(interval)
        }

        return () => clearInterval(interval);
    }, [isActive, minutes, seconds]);

    const toggleTimer = () => {
        setIsActive(!isActive);
    };

    const resetTimer = () => {
        setIsActive(false);
        setMinutes(userTime);
        setSeconds(0);
    };

    const handleTimeChange = (e) => {
        setUserTime(e.target.value);
        setMinutes(e.target.value);
    };



    return (

        <Center width="100%" mminHeight="100vh" p="6">
            <Box width={{ base: "90%", md: "80%", lg: "60%" }} p="8" borderWidth="1px" borderRadius="lg">
                <Text fontSize="4x1" mb="4" textAlign="center">
                    {String(minutes).padStart(2, "0")} :{" "}
                    {String(seconds).padStart(2, "0")}
                </Text>
                <FormControl mb="6">
                    <FormLabel>Definir tempo(minutos)</FormLabel>
                    <Input
                        type="number"
                        value={userTime}
                        onChange={handleTimeChange}
                        isDisabled={isActive} />
                </FormControl>
                <HStack spacing="6" justifyContent="center">
                    <Button  size="lg" onClick={toggleTimer} colorScheme={isActive ? "red" : "green"}>
                        {isActive ? "Pausar" : "Iniciar"}
                    </Button>
                    <Button size="lg" colorSchema="gray" onClick={resetTimer}>Reiniciar</Button>

                </HStack>
            </Box>
        </Center>
    );
};

export default PomodoroTimer;
