import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue("green.100", "green.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />

        <HStack spacing={8} p="20px" alignItems={"center"}>
          <Heading as="h1">ezPay</Heading>
          <Spacer />
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/create">Create</NavLink>
            <NavLink to="/mySubmissions">My Submissions</NavLink>
          </HStack>
        </HStack>
      </Flex>
    </Box>

    // <Flex as="nav" p="10px" alignItems="center">
    //   <Heading as="h1"> Dojo Tasks</Heading>

    //   <Spacer />

    //   <HStack spacing="20px">
    //     <Box bg="gray" p="10px">
    //       M
    //     </Box>
    //     <Text>test@gmail.com</Text>
    //     <Button colorScheme="purple">Logout</Button>
    //   </HStack>
    // </Flex>
    // <Flex bg="grey" justify="space-between" wrap="wrap" gap="2">
    //     <Box w="150px" h="50px" bg="red">1</Box>
    //     <Box w="150px" h="50px" bg="blue">2</Box>
    //     <Box w="150px" h="50px" flexGrow="1" bg="green">3</Box>
    //     <Box w="150px" h="50px" flexGrow="2" bg="yellow">4</Box>
    // </Flex>
  );
}
