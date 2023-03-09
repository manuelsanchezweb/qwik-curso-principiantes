import { component$, useContext } from "@builder.io/qwik";
import { AuthContext } from "~/root";

export const User = component$(() => {
  const auth = useContext(AuthContext);
  return (
    <div>
      {auth.userName}
      <div>{auth.isLogged.value.toString()}</div>
    </div>
  );
});
