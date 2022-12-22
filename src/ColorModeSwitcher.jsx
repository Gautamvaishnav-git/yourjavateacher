import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";

const ColorModeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <>
      <IconButton
        variant="ghost"
        colorScheme={"purple"}
        pos="fixed"
        p="0"
        w="10"
        h="10"
        zIndex={"overlay"}
        borderRadius="full"
        right="4"
        top="2"
        title={text}
        aria-label={`Switch to ${text} mode`}
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        {...props}
      />
    </>
  );
};

export default ColorModeSwitcher;
