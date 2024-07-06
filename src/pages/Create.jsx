import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { Form, redirect } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../util/utils";

export default function Create() {
  return (
    <Box maxW="480px" p="20px">
      <Form method="post" action="/create">
        <FormControl isRequired mb="40px">
          <FormLabel>Task Name</FormLabel>
          <Input type="text" name="title" />
          <FormHelperText>Enter text</FormHelperText>
        </FormControl>

        <FormControl mb="40px">
          <FormLabel>Task Description</FormLabel>
          <Textarea
            placeholder="Enter detailed description"
            name="description"
          />
        </FormControl>

        <FormControl display="flex" alignItems="center" mb="40px">
          <Checkbox name="isPriority" size="lg" colorScheme="green" />
          <FormLabel mb="0" ml="10px">
            Make this a priority task
          </FormLabel>
        </FormControl>

        <Button type="submit" colorScheme="green">
          Submit
        </Button>
      </Form>
    </Box>
  );
}

export const createAction = async ({ request }) => {
  const data = await request.formData();

  const task = {
    title: data.get("title"),
    description: data.get("description"),
    isPriority: data.get("isPriority") === "",
  };

  console.log("malakian title:", task.title);
  console.log("malakian description:", task.description);

  try {
    await axios.post(API_URL, {
      name: task.title,
      completed: false,
    });
  } catch (err) {
    console.log(err);
  }

  return redirect("/");
};
