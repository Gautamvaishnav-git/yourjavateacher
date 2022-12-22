import { Box, Container, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Programming1 from "../assets/Programming1.jpg";
import Programming2 from "../assets/Programming2.jpg";
import Programming3 from "../assets/Programming3.jpg";
import detective from "../assets/detective.png";

const headingOptions = {
  pos: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  textTransform: "uppercase",
  p: "4",
};

const Home = () => {
  return (
    <>
      <Box>
        <HomeCarousel />
      </Box>
      <Container m="auto" maxW="container.xl" minH={"100vh"}>
        <Heading w={"fit-content"} mx="auto" borderBottom={"2px solid"} pt="8">
          Services
        </Heading>
        <Stack
          h="full"
          p={"4"}
          direction={["column", "row"]}
          alignItems={"center"}
          gap="10"
        >
          <Image
            src={detective}
            h={["40", "400"]}
            filter={"hue-rotate(-130deg)"}
          />
          <Box w="full">
            <Heading paddingBottom={"4"}>What You will learn ?</Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
              hic explicabo non quasi. Mollitia laudantium inventore quaerat sit
              veniam sint harum dolor provident beatae voluptatem ipsa, esse
              quidem reprehenderit. quia minus.
            </Text>
          </Box>
        </Stack>
      </Container>
    </>
  );
};

const HomeCarousel = () => {
  return (
    <>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        interval="1000"
      >
        <Box w="full" h={"100vh"}>
          <Heading bg={"whiteAlpha.700"} color={"black"} {...headingOptions}>
            Computer Technology
          </Heading>
          <Image src={Programming1} alt="this is an image" />
        </Box>
        <Box w="full" h={"100vh"}>
          <Heading bg={"whiteAlpha.700"} color={"black"} {...headingOptions}>
            Java Tutorial
          </Heading>
          <Image src={Programming2} alt="this is an image" />
        </Box>
        <Box w="full" h={"100vh"}>
          <Heading bg={"whiteAlpha.700"} color={"black"} {...headingOptions}>
            Javascript
          </Heading>
          <Image src={Programming3} alt="this is an image" />
        </Box>
      </Carousel>
    </>
  );
};

export default Home;
