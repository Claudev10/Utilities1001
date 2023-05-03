import React, { useState } from "react";
import {
  Heading,
  Input,
  IconButton,
  Stack,
  Checkbox,
  Text,
  Box,
  Flex,
  Button
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

function ToDoList() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputValueChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = () => {
    setItems([...items, { text: inputValue, checked: false }]);
    setInputValue("");
  };

  const handleToggleItem = (index) => {
    const newItems = [...items];
    newItems[index].checked = !newItems[index].checked;
    setItems(newItems);
  };

  const handleRemoveItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const [editIndex, setEditIndex] = useState(-1);

  const handleEditItem = (index) => {
    setEditIndex(index);
    setInputValue(items[index].text);
  };

  const handleSaveItem = () => {
    const newItems = [...items];
    newItems[editIndex].text = inputValue;
    setItems(newItems);
    setEditIndex(-1);
    setInputValue("");
  };

  return (
    <>
      <Flex width="100%" justifyContent="flex-end">
        <Link to="/">
          <Button mt={2} colorScheme="blackAlpha" mr={2} minW="100px">
            Voltar
          </Button>
        </Link>
      </Flex>
      <Box maxW="md" mx="auto" mt={8}>
        <Heading as="h1" size="lg" mb={4}>
          ToDo List
        </Heading>
        <Stack spacing={3} mb={4}>
          <Input
            value={inputValue}
            onChange={handleInputValueChange}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleAddItem();
              }
            }}
            placeholder="Adicionar novo item"
          />
          <Button colorScheme="green" onClick={handleAddItem}>
            Adicionar
          </Button>
        </Stack>
        {items.map((item, index) => (
          <Box key={index} display="flex" alignItems="center" borderBottom="1px dashed gray" mb={2} paddingBottom={1}>
            <Checkbox
              mr={4}
              isChecked={item.checked}
              onChange={() => handleToggleItem(index)}
            />
            {editIndex === index ? (
              <Input
                value={inputValue}
                onChange={handleInputValueChange}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSaveItem();
                  }
                }}
                placeholder="Editar item"
                autoFocus
              />
            ) : (
              <Box wordBreak="break-word" onClick={() => handleEditItem(index)}>
                <Text textDecoration={item.checked ? "line-through" : "none"}>
                  {item.text}
                </Text>
              </Box>
            )}
            <Box ml="auto">
            <IconButton              
              ml="1"
              colorScheme="gray"
              size="xs"
              icon={<EditIcon />}
              onClick={() => handleEditItem(index)}
            />            
            <IconButton       
              ml="1"       
              colorScheme="red"
              size="xs"
              icon={<DeleteIcon />}
              onClick={() => handleRemoveItem(index)}
            />
            </Box>
          </Box>
        ))}
      </Box>
    </>
  )};
  export default ToDoList;