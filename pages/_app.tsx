import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme, VStack } from "@chakra-ui/react";
import { SWRConfig } from "swr";
import { appWithTranslation } from "next-i18next";

import customTheme from "shared/theme";
import { Header, Footer, Analytics } from "shared/components";
import { fetcher, IS_IN_MAINTENANCE } from "shared/utils";

const theme = extendTheme(customTheme);

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <SWRConfig value={{ fetcher }}>
          <Header />
          <VStack
            maxWidth="100vw"
            minHeight="calc(100vh - 120px)"
            justifyContent="center"
            alignItems="center"
            as="main"
            py={IS_IN_MAINTENANCE ? 0 : [8, 16]}
          >
            <Component {...pageProps} />
          </VStack>
          <Footer />
        </SWRConfig>
      </ChakraProvider>
      <Analytics />
    </>
  );
}

export default appWithTranslation(App);
