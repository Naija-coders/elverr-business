import "../styles/app.scss";
import type { AppProps } from "next/app";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthReducer, initialAuthState } from "../store/auth.store";
import { useImmerReducer } from "use-immer";
import StateContext from "../context/StateContext";
import DispatchContext from "../context/DispatchContext";
import store from "../state";
function MyApp({ Component, pageProps }: AppProps) {
  const [AuthState, AuthDispatcher] = useImmerReducer<any>(
    AuthReducer,
    initialAuthState
  );
  const StateProviders: any = { AuthState };

  const DispatchProviders: any = { AuthDispatcher };
  return (
    <GoogleOAuthProvider clientId="810142204796-f4ben70l6156k4vl9fpfpifrgmt48aji.apps.googleusercontent.com">
      <StateContext.Provider value={{ ...StateProviders }}>
        <DispatchContext.Provider value={{ ...DispatchProviders }}>
          <Component {...pageProps} />
        </DispatchContext.Provider>
      </StateContext.Provider>
    </GoogleOAuthProvider>
  );
}

export default MyApp;
