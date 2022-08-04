import React from "react";
import { useToast } from "@chakra-ui/react";


export default function CustomToast(title, desc, status) {
    const toast = useToast();

    const showToast = () => {
        toast({
            title: title,
            description: desc,
            status: status,
            duration: 9000,
            isClosable: true,
          });
    };

    return showToast;
}