import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    Grid,
    GridItem,
    Container,
    FormControl,
    Input,
    Textarea,
    Button,
    Heading,
    Flex,
    Select,
} from "@chakra-ui/react";

export default function ModalAdd(value) {
    const handleClose = () => {
        value.onClose();
    };

    return (
        <Modal
            onClose={value.onClose}
            isOpen={value.isOpen}
            isCentered
            blockScrollOnMount={false}
            motionPreset="scale"
            size="md"
        >
            <ModalOverlay />
            <ModalContent borderRadius={0}>
                <ModalBody p={8}>
                    <Heading fontSize={"lg"} fontWeight={"medium"}>
                        Tambah Pengajuan
                    </Heading>
                    <FormControl method="POST">
                        <Container
                            gridTemplateRows="repeat(2,1fr)"
                            p={0}
                            my={6}
                        >
                            <Grid
                                templateColumns="repeat(2, 1fr)"
                                gap={5}
                                my={3}
                            >
                                <GridItem>
                                    <Input
                                        type="text"
                                        borderRadius={0}
                                        focusBorderColor="primary.100"
                                        placeholder="NIK"
                                        fontSize={"sm"}
                                    />
                                </GridItem>
                                <GridItem>
                                    <Input
                                        type="text"
                                        borderRadius={0}
                                        focusBorderColor="primary.100"
                                        placeholder="Nama"
                                        fontSize={"sm"}
                                    />
                                </GridItem>
                                <GridItem>
                                    <Input
                                        type="text"
                                        borderRadius={0}
                                        focusBorderColor="primary.100"
                                        placeholder="Posisi"
                                        fontSize={"sm"}
                                    />
                                </GridItem>
                                <GridItem>
                                    <Select
                                        placeholder="Band Posisi"
                                        fontSize={"sm"}
                                        borderRadius={0}
                                        focusBorderColor="primary.100"
                                        color={"gray.500"}
                                    >
                                        <option value="A1">A1</option>
                                        <option value="A2">A2</option>
                                        <option value="A3">A3</option>
                                        <option value="A4">A4</option>
                                        <option value="A5">A5</option>
                                        <option value="A6">A6</option>
                                    </Select>
                                </GridItem>
                                <GridItem>
                                    <Input
                                        type="text"
                                        borderRadius={0}
                                        focusBorderColor="primary.100"
                                        placeholder="No Handphone"
                                        fontSize={"sm"}
                                    />
                                </GridItem>
                                <GridItem>
                                    <Input
                                        type="text"
                                        borderRadius={0}
                                        focusBorderColor="primary.100"
                                        placeholder="Kota Pemasangan"
                                        fontSize={"sm"}
                                    />
                                </GridItem>
                                <GridItem>
                                    <Input
                                        type="text"
                                        borderRadius={0}
                                        focusBorderColor="primary.100"
                                        placeholder="Witel Pemasangan"
                                        fontSize={"sm"}
                                    />
                                </GridItem>
                                <GridItem>
                                    <Input
                                        type="text"
                                        borderRadius={0}
                                        focusBorderColor="primary.100"
                                        placeholder="No Internet"
                                        fontSize={"sm"}
                                    />
                                </GridItem>
                                <GridItem colSpan={2}>
                                    <Textarea
                                        type="text"
                                        borderRadius={0}
                                        focusBorderColor="primary.100"
                                        placeholder="Alamat Pemasangan"
                                        fontSize={"sm"}
                                        width={"100%"}
                                    />
                                </GridItem>
                            </Grid>
                        </Container>
                        <Button
                            variant="outline"
                            colorScheme={"teal"}
                            fontWeight={"medium"}
                            fontSize={"sm"}
                            px={6}
                            borderRadius={0}
                            onClick={handleClose}
                        >
                            Batal
                        </Button>
                        <Button
                            type="submit"
                            ml={4}
                            px={6}
                            colorScheme={"teal"}
                            borderRadius={0}
                            fontWeight={"medium"}
                            fontSize={"sm"}
                            onClick={handleClose}
                        >
                            Tambah
                        </Button>
                    </FormControl>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
