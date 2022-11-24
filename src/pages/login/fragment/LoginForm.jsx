import React, { useState } from "react";
import { Eye, EyeOff } from "react-feather";
import {
    Button,
    Box,
    Heading,
    FormControl,
    Input,
    Text,
    InputGroup,
    InputRightElement,
    IconButton,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const handleClick = () => setShow(!show);

    const handleLogin = () => {
        if (email === "hc@gmail.com") {
            navigate("/dashboard/hc/pengajuan-karyawan");
            localStorage.setItem("role", "hc");
        } else if (email === "karyawan@gmail.com") {
            navigate("/dashboard/karyawan");
            localStorage.setItem("role", "karyawan");
        } else if (email === "customercare@gmail.com") {
            navigate("/dashboard/customercare");
            localStorage.setItem("role", "customercare");
        } else {
            alert("Email tidak terdaftar");
        }
    };

    return (
        <Box width={{ lg: "70%" }} mx={"auto"}>
            <Box mt={4}>
                <Heading fontWeight={700} color="red.500">
                    Masuk
                </Heading>
                <Text fontSize="md" my={3}>
                    Masuk untuk mulai menelusuri
                </Text>
            </Box>
            <Box>
                <FormControl method="POST">
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        borderRadius="full"
                        focusBorderColor="red.500"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputGroup mt={4}>
                        <Input
                            type={show ? "text" : "password"}
                            name="password"
                            id="password"
                            borderRadius="full"
                            focusBorderColor="red.500"
                            placeholder="Password"
                        />
                        <InputRightElement>
                            <IconButton
                                borderRadius="full"
                                size="sm"
                                variant="ghost"
                                mr={[2, 6, 10]}
                                onClick={handleClick}
                                aria-label={"whod hide"}
                                icon={show ? <EyeOff /> : <Eye />}
                            />
                        </InputRightElement>
                    </InputGroup>
                    <Button
                        mt={8}
                        bg="red.500"
                        color="white"
                        type="submit"
                        w="full"
                        borderRadius="full"
                        borderWidth={2}
                        borderColor="primary.100"
                        _hover={{
                            bg: "white",
                            color: "red.500",
                            borderColor: "red.500",
                        }}
                        onClick={handleLogin}
                    >
                        Masuk
                    </Button>
                </FormControl>
            </Box>
        </Box>
    );
}
