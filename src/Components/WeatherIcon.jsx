import React from "react";
import { Flex, Box, Icon, Heading } from "@chakra-ui/react";
import { RiSunLine, RiMoonClearLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const WeatherIcon = ({ isDay }) => {
  return (
    <Link to="/weather">
      <Flex alignItems="center" justifyContent="center" _hover={{ boxShadow: "xl", bg:"#f1f1f1" }} h="150px" mt="2rem" >
        <Box
          w="80px"
          h="80px"
          borderRadius="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg={isDay ? "yellow.300" : "gray.800"}
          boxShadow="xl"
          mt={4}               
        >
          <Icon
            as={isDay ? RiSunLine : RiMoonClearLine}
            color={isDay ? "orange.800" : "white"}
            boxSize={10}
          />
        </Box>
        <Heading ml={8} size="2xl">
          Previsão do Tempo
        </Heading>        
      </Flex>
    </Link>
  );
};

export default WeatherIcon;
