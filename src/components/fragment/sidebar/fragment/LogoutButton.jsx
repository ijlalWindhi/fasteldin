import React from "react";
import { Link } from "react-router-dom";
import { Icon, Button, Text } from "@chakra-ui/react";
import { LogOut } from "react-feather";

export default function LogoutButton() {
    return (
        <Link to={"/login"} cursor="pointer">
            <Button
                transition="200ms"
                my={[1, 2, 3]}
                px={[2, 3, 6]}
                fontWeight={500}
                justifyContent="space-between"
                alignItems="center"
                w="full"
                _hover={{
                    color: "red.500",
                    bgColor: "white",
                    borderColor: "red.500",
                }}
                bg={"red.500"}
                color={"white"}
                borderTopWidth={1}
                borderBottomWidth={1}
                borderRadius="0"
                borderColor={"red.500"}
            >
                <Text fontSize={"sm"} fontWeight={"normal"}>
                    Logout
                </Text>
                <Icon
                    as={LogOut}
                    w={{ base: 4, lg: 3.5 }}
                    h={{ base: 4, lg: 3.5 }}
                />
            </Button>
        </Link>
    );
}
