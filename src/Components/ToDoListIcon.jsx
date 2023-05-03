import React from "react";
import { Link } from "react-router-dom";
import { Flex, Box, Heading } from "@chakra-ui/react";
import { HiOutlineCheck } from "react-icons/hi"; 

const ToDoListIcon = () => {
  return (
    <Link to="/list">
      <Flex 
      alignItems="center" 
      justifyContent="center" 
      h="150px" mt="2rem" 
      mb="2rem"    
      _hover={{ boxShadow: "xl", bg:"#f1f1f1" }}   
      >
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
          <HiOutlineCheck size={70} />
        </Box>
        <Heading ml={8} size="2xl">
          Lista de Tarefas
        </Heading>
      </Flex>
    </Link>
  );
};

export default ToDoListIcon;
