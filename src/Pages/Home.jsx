import React from "react";
import CronometroIcon from "../Components/CronometroIcon";
import ToDoListIcon from "../Components/ToDoListIcon";
import WeatherIcon from "../Components/WeatherIcon";
import { Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box>
      <CronometroIcon />
      <ToDoListIcon />
      <WeatherIcon/>
    </Box>
  );
};

export default Home;
