import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./Pages/Home";
import Cronometro from "./Pages/Cronometro";
import ToDoList from "./Pages/ToDoList";
import Weather from "./Pages/Weather"; 


function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cronometro" element={<Cronometro />} />  
          <Route exact path="/list" element={<ToDoList />} />
          <Route exact path="/weather" element={<Weather />} />       
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
