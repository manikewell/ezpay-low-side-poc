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

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get(API_URL);
      console.log("malakian fetchTasks home 1", data);

      setTasks(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <SimpleGrid p="10px" spacing={5} minChildWidth={300}>
      <Card align="center">
        <CardHeader>
          <Heading size="md"> Submissions dashboard</Heading>
        </CardHeader>
        <CardBody>
          <Text>Your total submissions are</Text>
          <Text>{tasks.length}</Text>
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
