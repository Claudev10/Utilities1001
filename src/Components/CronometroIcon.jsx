import React from "react";
import { Link } from "react-router-dom";
import { Flex, Box, Heading } from "@chakra-ui/react";
import { FaStopwatch } from "react-icons/fa";

const CronometroIcon = () => {
  return (
    <Link to="/cronometro">
      <Flex alignItems="center" justifyContent="center" h="150px" mt="2rem" _hover={{ boxShadow: "xl", bg:"#f1f1f1" }} >
        <Box
          w="80px"
          h="80px"
          borderWidth="2px"
          borderRadius="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxShadow="xl"
        >
          <FaStopwatch size={40} />
        </Box>
        <Heading ml={8} size="2xl">
          Cronômetro 
        </Heading>
      </Flex>
    </Link>
  );
};

export default CronometroIcon;
