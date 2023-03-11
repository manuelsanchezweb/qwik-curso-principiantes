import { component$ } from "@builder.io/qwik";
import { DocumentHead, Link } from "@builder.io/qwik-city";
import { Button } from "~/components/button/button";

export default component$(() => {
  return (
    <div>
      <h1>Página con componente con estilos propios</h1>
      <p>
        En esta página vamos a cargar una serie de estilos a nivel local que se
        van a aplicar en el componente del botón. En la página de{" "}
        <Link href="/">inicio</Link> había un botón que no es componente y no
        tiene el estilo.
      </p>
      <Button />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Págian con estilos",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
