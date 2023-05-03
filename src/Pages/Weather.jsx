import { useState, useEffect, useCallback } from "react";
import {
  Box,
  Text,
  Flex,
  Button,
  Input,
  Stack,
  VStack,
  useToast
} from "@chakra-ui/react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaCloud, FaTemperatureLow, FaTemperatureHigh, FaTint, FaTintSlash, FaWind } from 'react-icons/fa'



const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Rio das ostras");  
  const toast = useToast();

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=791908a1210316f885a1930ae53103da&lang=pt_br`
      );
      setWeatherData(response.data);
      setCity("");            
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível encontrar a cidade que você digitou.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setCity("")
    }
  }, [city, toast]);

  useEffect(() => {
    fetchData();
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      fetchData();
    }
  }

  if (!weatherData) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      <Flex width="100%" justifyContent="flex-end">
        <Link to="/">
          <Button mt={2} colorScheme="blackAlpha" mr={2} minW="100px">
            Voltar
          </Button>
        </Link>
      </Flex>
      <Box p={12} pt={2} >
        <Stack direction="row" alignItems="center" mb={4}>
          <Input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Digite o nome da cidade"
            size="md"
            maxW="500px"
          />
          <Button
            colorScheme="cyan"
            size="md"
            onClick={() => fetchData()}
          >
            Atualizar
          </Button>
        </Stack>

        <VStack align="start" mb={4} pl={6}>
          <Text fontSize="3xl" fontWeight="bold">
            Previsão do tempo para {weatherData.name}
          </Text>
          <Flex alignItems="center">
            <Box as={FaCloud} size="24px" mr={2} />
            <Text fontSize="lg" fontWeight="bold">
              {weatherData.weather[0].description}
            </Text>
          </Flex>
        </VStack>

        <Stack spacing={4} mb={4} bg="gray.100" p={6} borderRadius={5}>
          <Flex alignItems="center">
            <Box as={FaTint} size="24px" mr={2} />
            <Text fontSize="lg">
              Temperatura: {" "}
              <Text as="span" fontWeight="bold">
                {(weatherData.main.temp - 273.15).toFixed(1)}°C
              </Text>
            </Text>
          </Flex>
          <Flex alignItems="center">
            <Box as={FaTemperatureLow} size="24px" mr={2} />
            <Text fontSize="lg">
              Temperatura Mínima: {" "}
              <Text as="span" fontWeight="bold">
                {(weatherData.main.temp_min - 273.15).toFixed(1)}°C
              </Text>
            </Text>
          </Flex>
          <Flex alignItems="center">
            <Box as={FaTemperatureHigh} size="24px" mr={2} />
            <Text fontSize="lg">
              Temperatura Máxima: {" "}
              <Text as="span" fontWeight="bold">
                {(weatherData.main.temp_max - 273.15).toFixed(1)}°C
              </Text>
            </Text>
          </Flex>
          <Flex alignItems="center">
            <Box as={FaTintSlash} size="24px" mr={2} />
            <Text fontSize="lg">
              Umidade: {" "}
              <Text as="span" fontWeight="bold">
                {weatherData.main.humidity}%
              </Text>
            </Text>
          </Flex>
          <Flex alignItems="center">
            <Box as={FaWind} size="24px" mr={2} />
            <Text fontSize="lg">
              Pressão Atmosférica: {" "}
              <Text as="span" fontWeight="bold">
                {weatherData.main.pressure}hPa
              </Text>
            </Text>
          </Flex>
        </Stack>
      </Box>
    </>
  )
};

export default Weather;