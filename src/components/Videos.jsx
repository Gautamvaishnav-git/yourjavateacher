import {
  Heading,
  Stack,
  VStack,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

const Videos = () => {
  const EmbedArr = [
    {
      embedLink: "ObT6qDfmoW0",
      heading: "What is Java?",
      description: ` Lorem, ipsuam fugiat repudiandae voluptatibus
      ullam nostrum ipsum impedit ducimus illum consequatur. Lorem,
      impedit ducimus illum consequatur.`,
    },
    {
      embedLink: "Fdm3Y5e64UY",
      heading: "Hello world program in Java.",
      description: ` Lorem, ipsuum ipsum, cum culpa deleniti nesciunt
      provident facilis? Eaque quisquam fugiat repudiandae voluptatibus
      ullam nostrum ipsum impedit ducimus illum consequatur. Lorem,
      impedit ducimus illum consequatur.`,
    },
    {
      embedLink: "7fPqpsRuM7E",
      heading:
        "Basic structure of java Program with first Hello world program.",
      description: ` Lorem, ipsisquam fugiat repudiandae voluptatibus
      ullam nostrum ipsum impedit ducimus illum consequatur. Lorem,
      impedit ducimus illum consequatur.`,
    },
    {
      embedLink: "YbOOfEOXAiQ",
      heading: "Data Types & Variables In Java Programming.",
      description: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Assumenda recusandae voluptatum ipsum, cum culpa deleniti nesciunt
      provident facilis?  ducimus illum consequatur. Lorem,
      impedit ducimus illum consequatur.`,
    },
  ];

  const [videoSrc, setVideoSrc] = useState({
    embedLink: EmbedArr[0].embedLink,
    heading: EmbedArr[0].heading,
    description: EmbedArr[0].description,
  });

  return (
    <>
      <Stack direction={["column", "row"]} px={"4"} pt="12" pb={"2"}>
        <VStack
          w={["full", "xl"]}
          display={["flex", "none"]}
          alignItems={"stretch"}
        >
          <Menu>
            <MenuButton as={Button} rightIcon={<AiFillCaretDown />}>
              Actions
            </MenuButton>
            <MenuList>
              {EmbedArr.map((item, index) => (
                <MenuItem
                  key={item.embedLink}
                  variant={"ghost"}
                  onClick={() =>
                    setVideoSrc((prev) => {
                      return {
                        ...prev,
                        embedLink: item.embedLink,
                        heading: item.heading,
                        description: item.description,
                      };
                    })
                  }
                >
                  Lecture {index + 1}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </VStack>

        <VStack w="full">
          <iframe
            src={`https://www.youtube.com/embed/${videoSrc.embedLink}`}
            title="What Is Java ?"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: "100%", minHeight: "50vh" }}
          ></iframe>
          <VStack
            alignItems="flex-start"
            p={["1", "8"]}
            w="full"
            overflowY={"auto"}
          >
            <Heading>{videoSrc.heading}</Heading>
            <Text>{videoSrc.description}</Text>
          </VStack>
        </VStack>
        <VStack
          w={["full", "xl"]}
          display={["none", "flex"]}
          alignItems={"stretch"}
          spacing="4"
        >
          {EmbedArr.map((item, index) => (
            <Button
              key={item.embedLink}
              variant={"ghost"}
              colorScheme={"purple"}
              onClick={() =>
                setVideoSrc((prev) => {
                  return {
                    ...prev,
                    embedLink: item.embedLink,
                    heading: item.heading,
                    description: item.description,
                  };
                })
              }
            >
              Lecture {index + 1}
            </Button>
          ))}
        </VStack>
      </Stack>
    </>
  );
};
export default Videos;
