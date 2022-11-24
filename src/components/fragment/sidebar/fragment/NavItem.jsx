import React from "react";
import { Link } from "react-router-dom";
import { Icon, Button, Text } from "@chakra-ui/react";

export default function NavItem({ label, link, icon, visibility }) {
    const active = window.location.pathname === link;
    return (
        <Link to={link} cursor="pointer">
            <Button
                transition="200ms"
                my={[1, 2, 3]}
                px={[2, 3, 6]}
                fontWeight={500}
                justifyContent="space-between"
                alignItems="center"
                w="full"
                _hover={{ color: "red.500" }}
                bg={active ? "white" : "white"}
                color={active ? "red.500" : "gray.500"}
                borderRadius="0"
                visibility={visibility}
            >
                <Text
                    fontSize={"sm"}
                    fontWeight={"normal"}
                    maxWidth={"80%"}
                    overflow={"hidden"}
                >
                    {label}
                </Text>
                <Icon
                    as={icon}
                    w={{ base: 4, lg: 3.5 }}
                    h={{ base: 4, lg: 3.5 }}
                />
            </Button>
        </Link>
    );
}
