import React from "react";
import { Table } from "antd";
import { Box } from "@chakra-ui/react";
import dataDummy from "./dataDummy";

export default function Tables({ data, columns }) {
    const onChange = (pagination, sorter, extra) => {
        // console.log("params", pagination, sorter, extra);
    };

    return (
        <Box overflowX={{ base: "scroll" }}>
            <Table
                columns={columns}
                dataSource={dataDummy}
                onChange={onChange}
            />
        </Box>
    );
}
