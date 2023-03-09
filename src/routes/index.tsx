import { component$, useContext } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { AuthContext } from "~/root";

export default component$(() => {
  const auth = useContext(AuthContext);

  return (
    <div>
      <h1>useContext</h1>
      <p>
        Ha iniciado sesión: <strong>{auth.isLogged.value.toString()}</strong>{" "}
      </p>
      {auth.isLogged.value == true ? (
        <p>El nombre del usuario es {auth.userName}</p>
      ) : (
        <p>No hay un usuario que haya iniciado sesión</p>
      )}
      <button onClick$={() => auth.login()}>Login</button>
      <button onClick$={() => auth.logout()}>Logout</button>
      {/* <User /> */}
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
