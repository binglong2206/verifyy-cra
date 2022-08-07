/*eslint-disable*/
import React from "react";
import { Flex, Link, List, ListItem, Text } from "@chakra-ui/react";

export default function Footer(props) {
  // const linkTeal = useColorModeValue("teal.400", "red.200");=
  return (
    <Flex
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent="center"
      px="30px"
      pb="20px"
    >
      <Text
        color="gray.400"
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", xl: "0px" }}
      >
        &copy; 2022,{" "}
        <Text as="span">Made with 🔥 by </Text>
        <Link
          // color={linkTeal}
          color="blue.400"
          href="google.com"
          target="_blank"
        > Binglong Chee.  
        </Link> Cheers to better days ahead.
      </Text>
    </Flex>
  );
}
