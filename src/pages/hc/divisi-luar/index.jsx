import React from "react";
import Sidebar from "../../../components/fragment/sidebar";
import { Flex, Box } from "@chakra-ui/react";
import Content from "./section/Content";

export default function index() {
    return (
        <Flex
            h={["100vh"]}
            flexDir={["column", "column", "row"]}
            overflow="hidden"
            maxW={"100vw"}
        >
            <Sidebar />
            <Box w={["full"]} h={["full"]} overflowY="auto">
                <Content />
            </Box>
        </Flex>
    );
}
