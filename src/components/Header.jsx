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
        zIndex={1000}
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
              <Button onClick={onClose} variant="ghost" colorScheme={"purple"}>
                <Link to="/">Home</Link>
              </Button>
              <Button onClick={onClose} variant="ghost" colorScheme={"purple"}>
                <Link to="/videos">Videos</Link>
              </Button>
              <Button onClick={onClose} variant="ghost" colorScheme={"purple"}>
                <Link to="/freevideos/category=free">Free Videos</Link>
              </Button>

              <Button onClick={onClose} variant="ghost" colorScheme={"purple"}>
                <Link to="/upload">Upload video</Link>
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
                <Link to={"login"}>Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
