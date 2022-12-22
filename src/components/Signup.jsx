import {
  Button,
  Container,
  Heading,
  Input,
  VStack,
  Text,
  Avatar,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png";

const Signup = () => {
  return (
    <Container
      maxW={"container.xl"}
      h={["fit-content", "100vh"]}
      p={["4", "16"]}
    >
      <form>
        <VStack
          alignItems={"stretch"}
          w={["full", "96"]}
          m={"auto"}
          spacing="8"
          my={"16"}
        >
          <Avatar src={logoImg} alignSelf="center" h="28" w="" />
          <Heading>Your Java Teacher</Heading>
          <Input
            placeholder="Username"
            type={"text"}
            required
            focusBorderColor={"purple.500"}
          />
          <Input placeholder="Email" required focusBorderColor={"purple.500"} />
          <Input
            type={"password"}
            placeholder="Password"
            required
            focusBorderColor={"purple.500"}
          />
          <Button type="submit" colorScheme={"purple"}>
            Sign Up
          </Button>
          <Text textAlign={"right"}>
            Already have an account?{" "}
            <Button
              variant={"link"}
              colorScheme={"purple"}
              alignSelf={"flex-end"}
            >
              <Link to={"/login"}>Login</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
