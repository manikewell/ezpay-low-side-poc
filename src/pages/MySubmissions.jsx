import {
  Box,
  Table,
  TableCaption,
  Th,
  Thead,
  Tr,
  Tbody,
  Td,
  Tfoot,
  TableContainer,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../util/utils";

export const MySubmissions = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get(API_URL);
      console.log("ezpay fetchTasks 1", data);

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
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Title</Th>
                <Th>Description</Th>
              </Tr>
            </Thead>
            {tasks.map((task) => (
              <Tbody>
                <Tr>
                  <Td>{task.id}</Td>
                  <Td>{task.name}</Td>
                  <Td>{task.name}</Td>
                </Tr>
              </Tbody>
            ))}
          </Table>
        </TableContainer>
      </Card>
    </SimpleGrid>
  );
};
