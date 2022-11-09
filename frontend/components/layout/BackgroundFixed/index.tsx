import { Box, Image } from "@chakra-ui/react";

function BackgroundFixed() {
  return (
    <Box
      backgroundColor={"background"}
      width="100%"
      height={"100vh"}
      position={"fixed"}
      zIndex={"-100"}
      overflow={"hidden"}
    >
      <Box
        height={"100%"}
        backgroundRepeat={"no-repeat"}
        position={"absolute"}
        top={"0"}
        left={"0"}
      >
        <Image
          width={{
            md: "480px",
            sm: "100px",
          }}
          src={"./assets/bg-up-left.png"}
          alt={"bg-up-left"}
        ></Image>
      </Box>
      <Box
        height={"100%"}
        backgroundRepeat={"no-repeat"}
        position={"absolute"}
        top={"0"}
        right={"0"}
      >
        <Image
          width={{
            md: "480px",
            sm: "100%",
          }}
          src={"./assets/bg-up-right.png"}
          alt={"bg-up-left"}
        ></Image>
      </Box>
      <Box
        backgroundRepeat={"no-repeat"}
        position={"absolute"}
        bottom={"-390"}
        left={"0"}
      >
        <Image
          width={{
            sm: "100%",
          }}
          src={"./assets/bg-down-left.png"}
          alt={"bg-up-left"}
        ></Image>
      </Box>
      <Box
        backgroundRepeat={"no-repeat"}
        position={"absolute"}
        bottom={"-300"}
        right={"0"}
      >
        <Image
          width={{
            sm: "100%",
          }}
          src={"./assets/bg-down-right.png"}
          alt={"bg-up-left"}
        ></Image>
      </Box>
    </Box>
  );
}

export default BackgroundFixed;
