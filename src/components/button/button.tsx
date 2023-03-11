import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./button.css?inline";

export const Button = component$(() => {
  useStylesScoped$(styles);

  return <button>Botón estilado</button>;
});
