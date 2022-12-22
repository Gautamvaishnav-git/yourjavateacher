import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { BiMenuAltLeft } from "react-icons/bi";
import { Link } from "react-router-dom";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let navProperties = {
    variant: "ghost",
    p: "0",
    colorScheme: "purple",
  };
  return (
    <>
      <Button
        variant={"ghost"}
        pos={"fixed"}
        top="2"
        left="4"
        colorScheme={"purple"}
        borderRadius={"full"}
        p="0"
        w="10"
        h="10"
        onClick={onOpen}
        zIndex={"overlay"}
      >
        <BiMenuAltLeft size={"20px"} />
      </Button>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton borderRadius={"full"} colorScheme={"purple"} />
          <DrawerHeader borderBottomWidth="1px">VideosForYou</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={"stretch"}>
              <Button {...navProperties} onClick={onClose}>
                <Link to="/" style={{ width: "100%" }}>
                  Home
                </Link>
              </Button>
              <Button {...navProperties} onClick={onClose}>
                <Link to="/videos" style={{ width: "100%" }}>
                  Videos
                </Link>
              </Button>

              <Button {...navProperties} onClick={onClose}>
                <Link to="/upload" style={{ width: "100%" }}>
                  Upload video
                </Link>
              </Button>
            </VStack>
            <HStack
              position={"absolute"}
              bottom={"5"}
              justifyContent="space-evenly"
              w={"full"}
            >
              <Button colorScheme={"purple"} variant="solid" onClick={onClose}>
                <Link to={"login"}>Log In</Link>
              </Button>

              <Button
                colorScheme={"purple"}
                variant="outline"
                onClick={onClose}
              >
                <Link to={"signup"} style={{ width: "100%" }}>
                  Sign Up
                </Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
