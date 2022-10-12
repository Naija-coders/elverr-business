import "../styles/app.scss";
import type { AppProps } from "next/app";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthReducer, initialAuthState } from "../store/auth.store";
import { useImmerReducer } from "use-immer";
import { GlobalReducer, initialGlobalState } from "../store/global.store";
import StateContext from "../context/StateContext";
import DispatchContext from "../context/DispatchContext";
import Head from "next/head";
import "@fontsource/inter";
import { Provider } from "react-redux";
import store from "../state";

function MyApp({ Component, pageProps }: AppProps) {
  const [GlobalState, GlobalDispatcher] = useImmerReducer<any>(
    GlobalReducer,
    initialGlobalState
  );
  const [AuthState, AuthDispatcher] = useImmerReducer<any>(
    AuthReducer,
    initialAuthState
  );
  const StateProviders: any = { AuthState, GlobalState };

  const DispatchProviders: any = { GlobalDispatcher, AuthDispatcher };
  return (
    <>
      <Head>
        <title>
          Elverr - Run your business on one platform, seamlessly across all
          digital channels{" "}
        </title>
      </Head>
      <Provider store={store}>
        <GoogleOAuthProvider clientId="810142204796-f4ben70l6156k4vl9fpfpifrgmt48aji.apps.googleusercontent.com">
          <StateContext.Provider value={{ ...StateProviders }}>
            <DispatchContext.Provider value={{ ...DispatchProviders }}>
              <Component {...pageProps} />
            </DispatchContext.Provider>
          </StateContext.Provider>
        </GoogleOAuthProvider>
      </Provider>
    </>
  );
}

export default MyApp;
