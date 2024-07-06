import { Box } from "@chakra-ui/react";
import React,  { useState, useEffect }  from "react";
import axios from "axios";
import { API_URL } from "../util/utils";

export const MySubmissions = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get(API_URL);
      console.log("malakian fetchTasks 1", data);

      setTasks(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <Box maxW="480px" p="20px"></Box>
  );
};
