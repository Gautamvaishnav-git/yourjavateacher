import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  VStack,
  Text,
} from "@chakra-ui/react";
import { AiOutlineSend, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <Box minH="40" bgColor={"blackAlpha.900"} color="white" p={["4", "16"]}>
      <Stack direction={["column", "row"]}>
        <VStack alignItems={"stretch"} w="full">
          <Heading size={"md"}>Subscribe For More Videos.</Heading>
          <HStack borderBottom={"1px solid white"} py="2">
            <Input
              placeholder="Enter Your Email..."
              border="none"
              borderRadius="none"
              focusBorderColor="none"
              outline={"0"}
              _focusVisible={false}
            />
            <Button
              colorScheme={"purple"}
              variant={"ghost"}
              p="0"
              borderRadius={"0 20px 20px 0"}
            >
              <AiOutlineSend size={"20"} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w="full"
          borderLeft={["none", "1px solid white"]}
          borderRight={["none", "1px solid white"]}
        >
          <Heading size={"md"} textTransform="uppercase">
            Your Java Teacher
          </Heading>
          <Text>&copy; All Right Reserved. {new Date().getFullYear()} </Text>
        </VStack>
        <VStack w="full">
          <Heading size={"md"} textTransform="uppercase">
            Social media
          </Heading>
          <Button
            variant={"link"}
            colorScheme="white"
            display={"flex"}
            flexDirection={"row"}
            gap="1"
          >
            <AiFillYoutube />
            <a
              href="https://www.youtube.com/@YourJavaTeacher"
              target={"_blank"}
            >
              Youtube
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
