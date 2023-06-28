import { Provider } from "app/provider";
import Head from "next/head";
import React from "react";
import type { SolitoAppProps } from "solito";
import "raf/polyfill";
import { trpc } from "app/utils/trpc.web";

import "../styles/global.css";

function MyApp({ Component, pageProps }: SolitoAppProps) {
  return (
    <>
      <Head>
        <title>Universal Example</title>
        <meta name="description" content="Solito, Expo & Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <Provider>{children}</Provider>;
}

export default trpc.withTRPC(MyApp);
