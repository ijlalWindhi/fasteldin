import { Button, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function NavAccordionItem({ label, path }) {
    const active = path == location.pathname;

    return (
        <Link to={path}>
            <Button
                transition="200ms"
                my={[1, 2, 3]}
                pl={{ md: 10, lg: 10 }}
                fontWeight={500}
                justifyContent="space-between"
                alignItems="center"
                w="full"
                _hover={{ color: "red.500" }}
                color={active ? "red.500" : "gray.500"}
                borderRadius="0"
            >
                <Text fontSize={"sm"} fontWeight={"normal"} maxW={"100%"}>
                    {label}
                </Text>
            </Button>
        </Link>
    );
}
