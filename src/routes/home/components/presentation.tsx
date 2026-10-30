import { Html } from "@elysia/html";

interface PresentationProps {
  image: string;
  title: string;
  subtitle: string;
  link: string;
}

export function Presentation(props: PresentationProps) {
  return (
    <section>
      <h1>Presentation</h1>
    </section>
  );
}
