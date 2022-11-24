import React from "react";
import { Box, Heading, Center, Flex } from "@chakra-ui/react";
import { Input } from "antd";
const { Search } = Input;
import Table from "../fragment/Tables";
import ActionButton from "../fragment/ActionButton";

export default function Content() {
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
        {
            key: "status",
            title: "Status",
            dataIndex: "status",
        },
        {
            key: "action",
            title: "Ubah Status",
            render: () => <ActionButton />,
        },
    ];

    return (
        <Box maxW={"full"} minH={"full"} bgColor={"gray.100"}>
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
                        Pengajuan Divisi Luar
                    </Heading>
                    <Flex
                        justifyContent={"space-between"}
                        direction={{ base: "column", md: "row" }}
                        my={5}
                        alignItems={{ md: "center" }}
                    >
                        <Search
                            placeholder="Search pengajuan karyawan"
                            allowClear
                            style={{
                                width: 200,
                            }}
                        />
                    </Flex>
                    <Table columns={columns} />
                </Box>
            </Center>
        </Box>
    );
}
