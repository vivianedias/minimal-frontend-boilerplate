import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { IS_IN_MAINTENANCE } from "../utils";
import { useTranslation } from "react-i18next";

export default function SmallWithNavigation() {
  const { t } = useTranslation("footer");
  const boxBgColor = useColorModeValue("gray.50", "gray.900");
  const boxTextColor = useColorModeValue("gray.700", "gray.200");
  const currentYear = new Date().getFullYear();

  if (IS_IN_MAINTENANCE) {
    return null;
  }

  return (
    <Box bg={boxBgColor} color={boxTextColor}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack direction={"row"} spacing={6}>
          <Link href={"#"}>Home</Link>
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Blog</Link>
          <Link href={"#"}>Contact</Link>
        </Stack>
        <Text>© {currentYear} medusa.lab. All rights reserved.</Text>
      </Container>
    </Box>
  );
}
