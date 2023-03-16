import { component$ } from "@builder.io/qwik";

type HeadlineProps = {
  text?: string;
};

export default component$(({ text = "Texto por defecto" }: HeadlineProps) => {
  return <h1>{text}</h1>;
});
