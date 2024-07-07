import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Grid, GridItem } from "@chakra-ui/react";

export default function RootLayout() {
  return (
    <Grid templateColumns="1fr 3fr" bg="gray.50">
      <GridItem colSpan="4">
        <Navbar />
      </GridItem>
      <GridItem alignItems="center" colSpan="4" minH="100vh">
        <Outlet />
      </GridItem>
    </Grid>

    // <Grid templateColumns="repeat(24, 1fr)" bg="gray.50">
    //   <GridItem
    //     as="aside"
    //     colSpan={{ base: 1, lg: 1, xl: 1 }}
    //     minHeight={{ lg: "100vh" }}
    //     p={{ base: "20px", lg: "30px" }}
    //   >

    //   </GridItem>
    //   <GridItem
    //     as="main"
    //     colSpan={{ base: 22, lg: 22, xl: 22 }}
    //     bg="green.400"
    //     minHeight={{ lg: "100vh" }}
    //     p={{ base: "20px", lg: "30px" }}
    //   >
    //     aaa
    //   </GridItem>
    //   <GridItem
    //     as="aside"
    //     colSpan={{ base: 1, lg: 1, xl: 1 }}
    //     minHeight={{ lg: "100vh" }}
    //     p={{ base: "20px", lg: "30px" }}
    //   >

    //   </GridItem>
    // </Grid>

    // <div>
    //     <Navbar />
    //   <Outlet />
    // </div>
  );
}
