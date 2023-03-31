import { ReactNode } from "react";
import { useTranslation } from "next-i18next";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { IS_IN_MAINTENANCE } from "shared/utils";

export default function Footer() {
  const { t } = useTranslation("footer");
  const boxBgColor = useColorModeValue("gray.50", "gray.900");
  const boxTextColor = useColorModeValue("gray.700", "gray.200");
  const currentYear = new Date().getFullYear();

  if (IS_IN_MAINTENANCE) {
    return null;
  }

  return (
    <Box as="footer" bg={boxBgColor} color={boxTextColor}>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Logo name={t("title")} />
        <Text>© {currentYear} Viviane Dias. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Twitter"} href={"#"} />
          <SocialButton label={"YouTube"} href={"#"} />
          <SocialButton label={"Instagram"} href={"#"} />
        </Stack>
      </Container>
    </Box>
  );
}

const Logo = (props: any) => {
  return <Text>{props.name}</Text>;
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children?: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};
