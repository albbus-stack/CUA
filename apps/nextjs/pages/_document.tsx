import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import { Children } from "react";
import { AppRegistry } from "react-native";

export default class Document extends NextDocument {
  static async getInitialProps({ renderPage }: any) {
    AppRegistry.registerComponent("Main", () => Main);
    const page = await renderPage();

    // @ts-ignore
    const { getStyleElement } = AppRegistry.getApplication("Main");

    return { ...page, styles: Children.toArray([getStyleElement()]) };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
