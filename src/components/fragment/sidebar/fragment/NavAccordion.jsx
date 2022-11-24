import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    Box,
    Icon,
    Text,
} from "@chakra-ui/react";
import React from "react";
import { ShoppingBag, ShoppingCart } from "react-feather";
import { useLocation } from "react-router-dom";
import NavAccordionItem from "./NavAccordionItem";

export default function NavAccordion() {
    const location = useLocation();
    const activePurchase = location.pathname.split("/")[2] == "pembelian";

    return (
        <>
            <Accordion allowMultiple>
                <AccordionItem border="0">
                    <AccordionButton
                        _hover={{ color: "primary.100" }}
                        bg={activePurchase ? "primary.200" : "white"}
                        color={activePurchase ? "primary.100" : "gray.500"}
                        _expanded={
                            activePurchase
                                ? { bg: "primary.200", color: "primary.100" }
                                : undefined
                        }
                        mt={[1, 2, 3]}
                        px={[2, 3, 6]}
                        justifyContent="space-between"
                        alignItems="center"
                        w="full"
                        borderRadius="0"
                    >
                        <Text fontSize={"sm"} fontWeight={"normal"}>
                            Pengajuan
                        </Text>
                        <Box display={"flex"}>
                            <AccordionIcon />
                        </Box>
                    </AccordionButton>
                    <AccordionPanel
                        transitionDuration="0"
                        bgColor={"#f2f4f8"}
                        p={0}
                    >
                        <NavAccordionItem
                            label={"Karyawan"}
                            path={"/dashboard/hc/pengajuan-karyawan"}
                        />
                        <NavAccordionItem
                            label={"Divisi Luar"}
                            path={"/dashboard/hc/pengajuan-divisi-luar"}
                        />
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </>
    );
}
