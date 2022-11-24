import React from "react";
import { Select } from "@chakra-ui/react";

export default function ActionButton() {
    return (
        <>
            <Select
                placeholder="-"
                size="sm"
                borderRadius={0}
                focusBorderColor="red.500"
                fontSize={"sm"}
            >
                <option value="-">-</option>
                <option value="ongoing">Ongoing</option>
            </Select>
        </>
    );
}
