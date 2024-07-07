import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  SimpleGrid,
  Text,
  Flex,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  HStack,
  Divider,
  Button,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../util/utils";
import { generateClient } from "aws-amplify/data";
import { Amplify } from "aws-amplify";
import outputs from "../../amplify_outputs.json";

export default function Home() {
  Amplify.configure(outputs);

  const [tasks, setTasks] = useState([]);

  //const [todos, setTodos] = useState<Schema["Todo"][]>();
  const [todo, setTodo] = useState("");
  const client = generateClient();

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get(API_URL);
      console.log("ezpay fetchTasks home 1", data);

      setTasks(data);
    } catch (err) {
      console.log(err);
    }
  };

  async function getTodos() {
    const { data } = await client.models.Post.list();
    console.log("ezpay gen2 home 3", data);
    setTodo(data);
  }

  useEffect(() => {
    fetchTasks();
    getTodos();
  }, []);

  return (
    <SimpleGrid p="10px" spacing={5} minChildWidth={300}>
      <Card align="center">
        <CardHeader>
          <Heading size="md"> Submissions dashboard</Heading>
        </CardHeader>
        <CardBody align="center">
          <Text>Your total submissions are</Text>
          <Heading>{tasks.length}</Heading>
        </CardBody>
        <CardFooter>
          <Button>View here</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <Heading size="md"> Submissions dashboard V2</Heading>
        </CardHeader>
        <CardBody align="center">
          <Text>Your total submissions are</Text>
          <Heading>{todo.length}</Heading>
        </CardBody>
        <CardFooter>
          <Button>View here</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <Heading size="md"> Customer dashboard</Heading>
        </CardHeader>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
        <CardFooter>
          <Button>View here</Button>
        </CardFooter>
      </Card>
    </SimpleGrid>

    // <SimpleGrid p="10px" spacing={10} minChildWidth="250px">
    //   <Box bg="white" h="200px" border="1px solid"></Box>
    //   <Box bg="white" h="200px" border="1px solid"></Box>
    //   <Box bg="white" h="200px" border="1px solid"></Box>
    //   <Box bg="white" h="200px" border="1px solid"></Box>

    //   <Box bg="white" h="200px" border="1px solid"></Box>
    //   <Box bg="white" h="200px" border="1px solid"></Box>
    //   <Box bg="white" h="200px" border="1px solid"></Box>
    //   <Box bg="white" h="200px" border="1px solid"></Box>

    //   <Box bg="white" h="200px" border="1px solid"></Box>
    //   <Box bg="white" h="200px" border="1px solid"></Box>
    //   <Box bg="white" h="200px" border="1px solid"></Box>
    //   <Box bg="white" h="200px" border="1px solid"></Box>
    // </SimpleGrid>
  );
}
