import {
  Button,
  Container,
  Heading,
  Input,
  VStack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container maxW={"container.xl"} h={["fit-content","100vh"]} p={["4", "16"]}>
      <form>
        <VStack
          alignItems={"stretch"}
          w={["full", "96"]}
          m={"auto"}
          spacing="8"
          my={"16"}
        >
          <Heading> Welcome Back</Heading>
          <Input
            placeholder="Email"
            type={"email"}
            required
            focusBorderColor={"purple.500"}
          />
          <Input
            type={"password"}
            placeholder="Password"
            required
            focusBorderColor={"purple.500"}
          />
          <Button variant={"link"} alignSelf={"flex-end"}>
            <Link to={"/forgotpassword"}>Forget password</Link>
          </Button>
          <Button type="submit" colorScheme={"purple"}>
            Log In
          </Button>
          <Text textAlign={"right"}>
            New user?{" "}
            <Button
              variant={"link"}
              colorScheme={"purple"}
              alignSelf={"flex-end"}
            >
              <Link to={"/signup"}>Signup</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
