import {
  $,
  component$,
  createContextId,
  Signal,
  useContextProvider,
  useSignal,
  useStore,
} from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

type AuthStore = {
  userName: string;
  isLogged: Signal<boolean>;
  login: () => void;
  logout: () => void;
};

export const AuthContext = createContextId<AuthStore>("Auth");

export default component$(() => {
  const loginState = useSignal(false);

  const authStore = useStore<AuthStore>({
    userName: "manuelsanchezweb",
    isLogged: loginState,
    login: $(() => {
      console.log("LOGIN");
      loginState.value = true;
    }),
    logout: $(() => {
      console.log("LOGOUT");
      loginState.value = false;
    }),
  });

  useContextProvider(AuthContext, authStore);

  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
