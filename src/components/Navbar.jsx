import { Box, Button, Flex, IconButton, useBoolean } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const links = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/contact", name: "Contact" },
  { path: "/login", name: "Login" },
];
export default function Navbar() {
  const [flag, setFlag] = useBoolean(false);
  return (
    <Box>
      <Box pos={"fixed"} top={"1rem"} right={"1rem"} align={"center"}>
        <Flex display={{ base: "none", md: "flex" }}>
          {links.map((link) => (
            <Link key={link.path} to={link.path}>
              <Button variant={"ghost"}>{link.name}</Button>
            </Link>
          ))}
        </Flex>
        <IconButton
          display={{ base: "block", md: "none" }}
          icon={<HamburgerIcon />}
          onClick={setFlag.on}
        ></IconButton>
      </Box>
      {flag && (
        <Box
          pos={"fixed"}
          top={0}
          left={0}
          w={"100vh"}
          h={"100vh"}
          zIndex={20}
          overflowY={"auto"}
          bgColor={"white"}
          display={{ base: "block", md: "none" }}
        >
          <Flex>
            <Box pos={"fixed"} top={"1rem"} right={"1rem"}>
              <IconButton onClick={setFlag.off} icon={<CloseIcon />}></IconButton>
            </Box>
          </Flex>
          <Flex>
            <Flex direction={"column"} align={"center"}>
              {links.map((link) => (
                <Link key={link.path} to={link.path}>
                  <Button variant={"ghost"}>{link.name}</Button>
                </Link>
              ))}
            </Flex>
          </Flex>
        </Box>
      )}
    </Box>
  );
}
