import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitcher } from "./ColorMode";
import Form from "./form/Form";

export default function App() {
  return (
    <>
      <ColorModeSwitcher />
      <Container>
        <Box p={10}>
          <Form />
        </Box>
      </Container>
    </>
  );
}
