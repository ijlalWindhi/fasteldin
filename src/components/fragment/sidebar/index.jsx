import React from "react";
import {
    Box,
    Flex,
    VStack,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack,
    Heading,
    Divider,
} from "@chakra-ui/react";
import { AlignCenter, X, FileText, CreditCard } from "react-feather";
import NavItem from "./fragment/NavItem";
import LogoutButton from "./fragment/LogoutButton";
import NavAccordion from "./fragment/NavAccordion";

export default function Sidebar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    if (localStorage.getItem("role") === "karyawan") {
        return (
            <Box
                w={{ base: "full", md: "20vw", lg: "14vw" }}
                minH={{ base: 6, md: "full" }}
                bg={useColorModeValue("white")}
                px={{ base: 0, md: 0 }}
                py={2}
                zIndex={10}
                boxShadow={"2px 0px 20px 2px rgba(0, 0, 0, 0.1)"}
                borderBottom={{ base: "1px", md: "none" }}
            >
                <Flex h={16} alignItems={"center"} flexDir={"column"}>
                    <Flex
                        justifyContent={{
                            base: "flex-end",
                            md: "space-between",
                        }}
                        w={"full"}
                        my="auto"
                        justifyItems={"center"}
                        alignItems={"center"}
                        mt={{ base: 4, md: 4 }}
                    >
                        <Heading
                            mx={"auto"}
                            color={"red.500"}
                            fontSize={{ base: "xl", lg: "2xl" }}
                        >
                            Fasteldin
                        </Heading>
                        <IconButton
                            size={"md"}
                            p={2}
                            my="auto"
                            mr={{ base: 4, md: 0 }}
                            icon={isOpen ? <X /> : <AlignCenter />}
                            aria-label={"Open Menu"}
                            position={{ base: "absolute" }}
                            display={{ md: "none" }}
                            onClick={isOpen ? onClose : onOpen}
                        />
                    </Flex>
                    <VStack
                        mt={{ base: 4, md: 4 }}
                        alignItems={"center"}
                        display={{ base: "none", md: "flex" }}
                    >
                        <Stack w={"full"}>
                            <Box w={"full"}>
                                <Divider
                                    orientation="horizontal"
                                    borderColor="gray.200"
                                    size={"xl"}
                                />
                                <NavItem
                                    link={"/dashboard/karyawan"}
                                    label={"Pengajuan"}
                                    icon={FileText}
                                    visibility={"visible"}
                                />
                                <NavItem
                                    link={"/dashboard/admin/client"}
                                    label={"Biaya"}
                                    icon={CreditCard}
                                    visibility={"hidden"}
                                />
                                <LogoutButton />
                            </Box>
                        </Stack>
                    </VStack>
                </Flex>
                {isOpen ? (
                    <Box
                        pb={4}
                        display={{ md: "none" }}
                        bgColor={"white"}
                        px={4}
                        borderBottom={{ base: "1px", md: "none" }}
                        maxH={"100vh"}
                        overflowY={"auto"}
                    >
                        <Stack as={"nav"} spacing={[4]}>
                            <NavItem
                                link={"/dashboard/karyawan"}
                                label={"Pengajuan"}
                                icon={FileText}
                                visibility={"visible"}
                            />
                            <NavItem
                                link={"/dashboard/admin/client"}
                                label={"Biaya"}
                                icon={CreditCard}
                                visibility={"hidden"}
                            />
                            <LogoutButton />
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        );
    } else if (localStorage.getItem("role") === "hc") {
        return (
            <Box
                w={{ base: "full", md: "20vw", lg: "14vw" }}
                minH={{ base: 6, md: "full" }}
                bg={useColorModeValue("white")}
                px={{ base: 0, md: 0 }}
                py={2}
                zIndex={10}
                boxShadow={"2px 0px 20px 2px rgba(0, 0, 0, 0.1)"}
                borderBottom={{ base: "1px", md: "none" }}
            >
                <Flex h={16} alignItems={"center"} flexDir={"column"}>
                    <Flex
                        justifyContent={{
                            base: "flex-end",
                            md: "space-between",
                        }}
                        w={"full"}
                        my="auto"
                        justifyItems={"center"}
                        alignItems={"center"}
                        mt={{ base: 4, md: 4 }}
                    >
                        <Heading
                            mx={"auto"}
                            color={"red.500"}
                            fontSize={{ base: "xl", lg: "2xl" }}
                        >
                            Fasteldin
                        </Heading>
                        <IconButton
                            size={"md"}
                            p={2}
                            my="auto"
                            mr={{ base: 4, md: 0 }}
                            icon={isOpen ? <X /> : <AlignCenter />}
                            aria-label={"Open Menu"}
                            position={{ base: "absolute" }}
                            display={{ md: "none" }}
                            onClick={isOpen ? onClose : onOpen}
                        />
                    </Flex>
                    <VStack
                        mt={{ base: 4, md: 4 }}
                        alignItems={"center"}
                        display={{ base: "none", md: "flex" }}
                    >
                        <Stack w={"full"}>
                            <Box w={"full"}>
                                <Divider
                                    orientation="horizontal"
                                    borderColor="gray.200"
                                    size={"xl"}
                                />
                                <NavAccordion />
                                <NavItem
                                    link={"/dashboard/karyawan"}
                                    label={"Pengajuan Karyawan"}
                                    icon={FileText}
                                    visibility={"hidden"}
                                />
                                <LogoutButton />
                            </Box>
                        </Stack>
                    </VStack>
                </Flex>
                {isOpen ? (
                    <Box
                        pb={4}
                        display={{ md: "none" }}
                        bgColor={"white"}
                        px={4}
                        borderBottom={{ base: "1px", md: "none" }}
                        maxH={"100vh"}
                        overflowY={"auto"}
                    >
                        <Stack as={"nav"} spacing={[4]}>
                            <Divider
                                orientation="horizontal"
                                borderColor="gray.200"
                                size={"xl"}
                            />
                            <NavAccordion />
                            <NavItem
                                link={"/dashboard/karyawan"}
                                label={"Pengajuan Karyawan"}
                                icon={FileText}
                                visibility={"hidden"}
                            />
                            <LogoutButton />
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        );
    } else if (localStorage.getItem("role") === "customercare") {
        return (
            <Box
                w={{ base: "full", md: "20vw", lg: "14vw" }}
                minH={{ base: 6, md: "full" }}
                bg={useColorModeValue("white")}
                px={{ base: 0, md: 0 }}
                py={2}
                zIndex={10}
                boxShadow={"2px 0px 20px 2px rgba(0, 0, 0, 0.1)"}
                borderBottom={{ base: "1px", md: "none" }}
            >
                <Flex h={16} alignItems={"center"} flexDir={"column"}>
                    <Flex
                        justifyContent={{
                            base: "flex-end",
                            md: "space-between",
                        }}
                        w={"full"}
                        my="auto"
                        justifyItems={"center"}
                        alignItems={"center"}
                        mt={{ base: 4, md: 4 }}
                    >
                        <Heading
                            mx={"auto"}
                            color={"red.500"}
                            fontSize={{ base: "xl", lg: "2xl" }}
                        >
                            Fasteldin
                        </Heading>
                        <IconButton
                            size={"md"}
                            p={2}
                            my="auto"
                            mr={{ base: 4, md: 0 }}
                            icon={isOpen ? <X /> : <AlignCenter />}
                            aria-label={"Open Menu"}
                            position={{ base: "absolute" }}
                            display={{ md: "none" }}
                            onClick={isOpen ? onClose : onOpen}
                        />
                    </Flex>
                    <VStack
                        mt={{ base: 4, md: 4 }}
                        alignItems={"center"}
                        display={{ base: "none", md: "flex" }}
                    >
                        <Stack w={"full"}>
                            <Box w={"full"}>
                                <Divider
                                    orientation="horizontal"
                                    borderColor="gray.200"
                                    size={"xl"}
                                />
                                <NavItem
                                    link={"/dashboard/customercare"}
                                    label={"Pengajuan"}
                                    icon={FileText}
                                    visibility={"visible"}
                                />
                                <NavItem
                                    link={"/dashboard/admin/client"}
                                    label={"Biaya"}
                                    icon={CreditCard}
                                    visibility={"hidden"}
                                />
                                <LogoutButton />
                            </Box>
                        </Stack>
                    </VStack>
                </Flex>
                {isOpen ? (
                    <Box
                        pb={4}
                        display={{ md: "none" }}
                        bgColor={"white"}
                        px={4}
                        borderBottom={{ base: "1px", md: "none" }}
                        maxH={"100vh"}
                        overflowY={"auto"}
                    >
                        <Stack as={"nav"} spacing={[4]}>
                            <Divider
                                orientation="horizontal"
                                borderColor="gray.200"
                                size={"xl"}
                            />
                            <NavItem
                                link={"/dashboard/customercare"}
                                label={"Pengajuan"}
                                icon={FileText}
                                visibility={"visible"}
                            />
                            <NavItem
                                link={"/dashboard/admin/client"}
                                label={"Biaya"}
                                icon={CreditCard}
                                visibility={"hidden"}
                            />
                            <LogoutButton />
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        );
    }
}
