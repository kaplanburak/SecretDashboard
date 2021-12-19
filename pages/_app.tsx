import App from "next/app";
import type { AppProps, AppContext, AppInitialProps } from "next/app";
import React, { FC } from "react";
import { Provider } from "react-redux";
import { initFirebase } from "../firebase";
import "antd/dist/antd.css";
import "../styles/globals.css";
import store from "../redux/store";

const SafeHydrate: FC = ({ children }) => {
  if (typeof window === "undefined") {
    return <div suppressHydrationWarning>{null}</div>;
  }

  initFirebase();

  return <div suppressHydrationWarning>{children}</div>;
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SafeHydrate>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SafeHydrate>
  );
}

// MyApp.getInitialProps = async (appContext: AppContext) => {
//   const appProps: AppInitialProps = await App.getInitialProps(appContext);

//   return { ...appProps };
// };

export default MyApp;
