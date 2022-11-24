import React, { useState } from "react";
import { Box, Heading, Center, Flex, Select } from "@chakra-ui/react";
import { Input } from "antd";
const { Search } = Input;
import Table from "../fragment/Tables";
import ActionButton from "../fragment/ActionButton";

export default function Content() {
    const [witelLocation, setWitelLocation] = useState("Semua Witel");

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
                        Pengajuan Karyawan
                    </Heading>
                    <Flex
                        justifyContent={"space-between"}
                        direction={{ base: "column", md: "row" }}
                        my={5}
                        alignItems={{ md: "center" }}
                        gap={{ base: 2, md: 0 }}
                    >
                        <Search
                            placeholder="Search pengajuan karyawan"
                            allowClear
                            style={{
                                width: 200,
                            }}
                        />
                        <Select
                            placeholder="Pilih Witel Pemasangan"
                            size="sm"
                            borderRadius={0}
                            focusBorderColor="red.500"
                            fontSize={"sm"}
                            maxW={{
                                base: "85%",
                                sm: "50%",
                                md: "30%",
                                lg: "20%",
                            }}
                            value={witelLocation}
                            onChange={(e) => setWitelLocation(e.target.value)}
                        >
                            <option value="semua witel">Semua Witel</option>
                            <option value="jakarta">Jakarta</option>
                            <option value="bandung">Bandung</option>
                            <option value="surabaya">Surabaya</option>
                            <option value="malang">Malang</option>
                        </Select>
                    </Flex>
                    <Table columns={columns} />
                </Box>
            </Center>
        </Box>
    );
}
