import React from "react";
import {
    Box,
    Heading,
    Text,
    Button,
    Center,
    Flex,
    Icon,
    useDisclosure,
} from "@chakra-ui/react";
import { Input } from "antd";
const { Search } = Input;
import { Plus } from "react-feather";
import ModalAdd from "../fragment/ModalAdd";
import Table from "../fragment/Tables";

export default function Content() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const columns = [
        {
            key: "nik",
            title: "NIK",
            dataIndex: "nik",
        },
        {
            key: "nama",
            title: "Nama",
            dataIndex: "nama",
        },
        {
            key: "posisi",
            title: "Posisi",
            dataIndex: "posisi",
        },
        {
            key: "bandPosisi",
            title: "Band Posisi",
            dataIndex: "bandPosisi",
        },
        {
            key: "noHandphone",
            title: "No Handphone",
            dataIndex: "noHandphone",
        },
        {
            key: "alamat",
            title: "Alamat",
            dataIndex: "alamat",
        },
        {
            key: "kotaPemasangan",
            title: "Kota Pemasangan",
            dataIndex: "kotaPemasangan",
        },
        {
            key: "witelPemasangan",
            title: "Witel Pemasangan",
            dataIndex: "witelPemasangan",
        },
        {
            key: "noInternet",
            title: "No Internet",
            dataIndex: "noInternet",
        },
    ];

    return (
        <Box maxW={"full"} minH={"full"} bgColor={"gray.100"}>
            <ModalAdd isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
            <Center>
                <Box
                    width={"full"}
                    maxW={{ base: "90%" }}
                    bgColor={"white"}
                    marginY={{ base: 10 }}
                    paddingY={5}
                    paddingX={10}
                >
                    <Heading
                        color={"black"}
                        fontSize={"3xl"}
                        fontWeight={"medium"}
                    >
                        Pengajuan
                    </Heading>
                    <Flex
                        justifyContent={"space-between"}
                        direction={{ base: "column", md: "row" }}
                        my={5}
                        alignItems={{ md: "center" }}
                        gap={{ base: 2, md: 0 }}
                    >
                        <Search
                            placeholder="Search pengajuan"
                            allowClear
                            style={{
                                width: 200,
                            }}
                        />
                        <Button
                            color={"white"}
                            bgColor={"blue.300"}
                            rounded={0}
                            width={"fit-content"}
                            _hover={{
                                bgColor: "blue.400",
                            }}
                            onClick={onOpen}
                        >
                            <Icon
                                as={Plus}
                                w={{ base: 4, lg: 3.5 }}
                                h={{ base: 4, lg: 3.5 }}
                                mr={2}
                            />
                            <Text fontSize={"sm"} fontWeight={"normal"}>
                                Tambah Pengajuan
                            </Text>
                        </Button>
                    </Flex>
                    <Table columns={columns} />
                </Box>
            </Center>
        </Box>
    );
}
